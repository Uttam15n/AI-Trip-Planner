import React ,{useState} from 'react'
import { Button } from '../button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';


function Header() {
  
  const user=JSON.parse(localStorage.getItem('user'));

  const[opendialog,setdialog]=useState(false);

  const login=useGoogleLogin({
    onSuccess:(codeResp)=>getuserprofile(codeResp),
    onError:(errorcode)=>console.log(errorcode),
    ux_mode: "popup"
  });


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
        window.location.reload();
    })
    
}
  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-5 bg-[#D84E55]'>
        
        
        <img src='/logo.svg' className='bg-[#F7FCFE] rounded-md object-cover'/>
      
        
        <div>
            {user?
              <div className='flex items-center gap-5'>
                <a href='/create-trip'>
                <Button variant="outline" className='rounded-full'>+ Create Trips</Button>
                </a>
                
                <a href='/my-trips'>
                <Button variant="outline" className='rounded-full'>My Trips</Button>
                </a>
                <a href='/'>
                <Button variant="outline" className='rounded-full'>Home</Button>
                </a>
                <Popover>
                <PopoverTrigger>
                  <img src={user?.picture?user?.picture :'/No-Image.jpg'} className='h-[35px] w-[35px] rounded-full' />
                </PopoverTrigger>
                <PopoverContent>
                  <h2 className='cursor-pointer' onClick={()=>{
                    googleLogout()
                    localStorage.clear()
                    window.location.reload()
                  }}>LogOut</h2>
                </PopoverContent>
                </Popover>




                </div> 
                :
            <Button onClick={()=>setdialog(true)}>Sign In</Button>
            }
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

export default Header