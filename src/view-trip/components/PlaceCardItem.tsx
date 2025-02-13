import { Button } from '@/components/ui/button';
import React ,{useEffect,useState} from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/Gobalapi'

function PlaceCardItem({place}) {
  const [photourls,setphotourl]=useState();
    useEffect(()=>{
      place&&GetPlacePhoto();
      },[place])
    
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:place?.place_name
      }
      const result=await GetPlaceDetails(data);
        const Photourl=PHOTO_REF_URL.replace('{NAME}',result?.data?.places[0]?.photos[3]?.name);
        setphotourl(Photourl);
      
    }
  
  
  
  
  
  
  return (

    
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.place_name} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all'>
        <img src={photourls?photourls :'/No-Image.jpg'} 
        className='w-[140px] h-[140px] rounded-xl object-cover'
        />
        <div>
            <h2 className='font-bold text-lg'>{place?.place_name}</h2>
            <p className='text-sm text-gray-500'>{place?.best_time_to_visit}</p>
            <h2 className='mt-2 text-gray-500 text-sm font-bold'>🕙{place?.time_travel} </h2>
            <h2 className='mt-2 text-gray-500 text-sm font-bold'>💸{place?.ticket_pricing}</h2>
            <h2 className='mt-2 text-sm text-gray-500 font-semibold'>📃{place?.description}</h2>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem