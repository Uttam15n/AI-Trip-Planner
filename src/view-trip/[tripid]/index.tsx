import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '@/service/firebaseconfig';
import { toast } from 'sonner';
import Infosection from '../components/infosection';
import Hotels from '../components/Hotels';
import PlacesToVists from '../components/PlacesToVists';
import Footer from '../components/Footer';



function ViewTrip() {
    const {tripid}=useParams();
    const [trip,settrip]=useState([]);


    useEffect(()=>{
        tripid&&GetTripData();
    },[tripid])

    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips',tripid);
        const docsnap=await getDoc(docRef);

        if(docsnap.exists()){
            console.log("Document",docsnap.data());
            settrip(docsnap.data());
        }
        else{
            console.log("No Such Data");
            toast('No Trip Found')
        }
    }

    return (
        <>
    <div className='p-10 ms:px-20 lg:px-44 xl:px-56'>
        {/* Information section */}
        <Infosection trips={trip} />
        {/* Recommemted hotels */}
        <Hotels trips={trip} />

        {/* daily plan */}
        <PlacesToVists trips={trip} />
        {/* footer */}
        
    </div>
    <Footer trips={trip}/>
    </>
  )
}

export default ViewTrip