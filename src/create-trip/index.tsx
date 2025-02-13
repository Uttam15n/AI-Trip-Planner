import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AI_prompt, SelectBudgetOptions, SelectTravelesList } from '@/constants/options'
import {chatSession} from '@/service/AImodel'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { db } from '@/service/firebaseconfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';

import axios from 'axios' 
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router'



function CreateTrip() {
  
    const [formData, setFormData] = useState({});
    const [loading,setloading]=useState(false);

    const[opendialog,setdialog]=useState(false);
    const[place,setplace]=useState();

    const navigate=useNavigate();

    const handelInputChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    // useEffect(()=>{
    //     console.log(formData);
    // },[formData])

    const login=useGoogleLogin({
        onSuccess:(codeResp)=>getuserprofile(codeResp),
        onError:(errorcode)=>console.log(errorcode),
        ux_mode: "popup"

    });

    
    const OnGenerateTrip=async()=>{

        const user=localStorage.getItem('user');

        if(!user){
            setdialog(true);
            return;
        }

        if(formData?.noOfDays>5||formData?.noOfDays<0){
            toast("Check The No of Days")
            return;
        }
        if(!formData?.location || !formData?.noOfDays || !formData?.budget || !formData?.traveler){
            toast("Please Enter all Details");
            return;
        }
        setloading(true);
        const final_prompt=AI_prompt
        .replace('{location}',formData?.location?.label)
        .replace('{noofdays}',formData?.noOfDays)
        .replace('{noofpeople}',formData?.traveler)
        .replace('{budget}',formData?.budget)

        //console.log(final_prompt);

        const result=await chatSession.sendMessage(final_prompt);

        //console.log(result?.response?.text());
        setloading(false);
        saveAItrip(result?.response?.text());
    }

    const saveAItrip=async(TripData)=>{
        
        setloading(true);
        const user=JSON.parse(localStorage.getItem('user'));
        const docId=Date.now().toString()


        const cleanTripData = TripData.replace(/```json|```/g, "");

        await setDoc(doc(db,"AITrips",docId),{
            userSelection:formData,
            
            tripData:JSON.parse(cleanTripData),
            userEmail:user?.email,
            iid:docId,

        });
        setloading(false);
        navigate('/view-trip/'+docId)

    }

    const getuserprofile=(tokeninfo)=>{
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokeninfo?.access_token}`,{
            headers:{
                Authorization:`Bearer ${tokeninfo?.access_token}`,
                Accept:'Application/json',
            }
        }).then((resp)=>{
            console.log(resp);
            localStorage.setItem('user',JSON.stringify(resp.data));
            setdialog(false);
            OnGenerateTrip();
        })
        
    }

    return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴🏖️</h2>
        <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information,and our trip planner will generate a custamized itinerary based on your preferences.</p>
    
        <div className='mt-16 flex flex-col gap-9'>
            <div>
                <h2 className='text-xl my-3 font-medium'>What's is your destination?🌍</h2>
                {/* <Input placeholder='Enter the place (Ex.Bengaluru,Karnataka,India)' type='text' 
                onChange={(v)=>handelInputChange('destination',v.target.value)} /> */}
                <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} 
                selectProps={{
                    place,
                    onChange:(v)=>{setplace(v);handelInputChange('location',v)}
                }}
                />
            </div>
            <div>
            <h2 className='text-xl my-3 font-medium'>How Many Days are planning?</h2>
            <Input placeholder='Ex.3' type='number'
            onChange={(v)=>handelInputChange('noOfDays',v.target.value)}
            />
            </div>
        </div>
        <div className='mt-16'>
        <h2 className='text-xl my-3 font-medium'>What's is your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item,index)=>(
                <div key={index} 
                onClick={()=>handelInputChange('budget',item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                ${formData?.budget==item.title&&'shadow-lg border-black'}`
                    
                }>
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
            ))}
        </div>
        </div>
        
        <div className='mt-16'>
        <h2 className='text-xl my-3 font-medium'>Who do you want to Travel with on your next Adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((item,index)=>(
                <div key={index} 
                onClick={()=>handelInputChange('traveler',item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                ${formData?.traveler==item.people&&'shadow-lg border-black'}`}>
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <h2 className='font-bold text-lg'>{item.titlt}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
            ))}
        </div>
        </div>
        <div className='my-10 flex justify-end'>
            <Button
            disabled={loading}            
            onClick={OnGenerateTrip}>
                {loading?
                <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' />:
                'Generate Trip'}
                </Button>
        </div>
        <Dialog open={opendialog}>
    
        <DialogContent>
    <DialogHeader>
        <DialogTitle className='font-extrabold text-2xl'>Sign In Options</DialogTitle>
    </DialogHeader>
    <div>
        <img className='mt-5' src='/logo.svg'/>
        <h2 className='font-bold text-lg mt-7'>Sign With Google</h2>
        <h6 className='text-sm text-gray-500'>Sign into the App With Google authentication securely</h6>
        <Button 
            onClick={login}
            className='w-full mt-7 flex gap-4 items-center'>
        <FcGoogle className='h-13 w-13' />Sign In With Google</Button>
    </div>
</DialogContent>

    </Dialog>










    </div>
        
)
}

export default CreateTrip

