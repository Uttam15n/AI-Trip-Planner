import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/Gobalapi';
import { Link } from 'react-router';


function UserTripCardItem({trip}) {
  const [photourls,setphotourl]=useState();
    useEffect(()=>{
      trip&&GetPlacePhoto();
      },[trip])
    
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:trip?.userSelection?.location?.label
      }
      const result=await GetPlaceDetails(data);
        const Photourl=PHOTO_REF_URL.replace('{NAME}',result?.data.places[0]?.photos[3]?.name);
        setphotourl(Photourl);
    }



  return (
    <Link to={'/view-trip/'+trip?.iid}>

        <div className='hover:scale-105 transition-all'>
        <img src={photourls?photourls : '/No-Image.jpg'} className='object-cover rounded-xl h-[200px] w-full'/>
        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-md font-semibold text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} budget</h2>
        </div>
    </div>
    </Link>   
  )
}

export default UserTripCardItem
