//import React,{useEffect} from 'react'
//import { GetPlaceDetails } from '@/service/Gobalapi'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/Gobalapi'
import React, { useEffect, useState } from 'react'
//import { GetPlaceDetails } from '@/service/Gobalapi'



function Infosection({trips}) {
  
  const [photourls,setphotourl]=useState();
  useEffect(()=>{
    trips&&GetPlacePhoto();
    },[trips])
  
  const GetPlacePhoto=async()=>{
    const data={
      textQuery:trips?.userSelection?.location?.label
    }
    const result=await GetPlaceDetails(data);
      const Photourl=PHOTO_REF_URL.replace('{NAME}',result?.data.places[0]?.photos[3]?.name);
      setphotourl(Photourl);
  }
  
  return (
    <div>
        <img src={photourls?photourls :'/No-Image.jpg'} className='h-[500px] w-full object-cover rounded-xl'/>
        <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>{trips?.userSelection?.location?.label}</h2>
          <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black-300 text-xs md:text-md'>📅 {trips?.userSelection?.noOfDays} Day</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black-300 text-xs md:text-md'>💰 {trips?.userSelection?.budget} Budget</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black-300 text-xs md:text-md'>🥂 No. Of Traveler: {trips?.userSelection?.traveler}</h2>
          </div>
        
        </div>
    </div>
  )
}

export default Infosection