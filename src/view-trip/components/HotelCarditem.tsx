import React , {useEffect,useState} from 'react'
import { Link } from 'react-router'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/Gobalapi'

function HotelCarditem({Hotel}) {
    const [photourls,setphotourl]=useState();
      useEffect(()=>{
        Hotel&&GetPlacePhoto();
        },[Hotel])
      
      const GetPlacePhoto=async()=>{
        const data={
          textQuery:Hotel?.hotel_name
        }
        const result=await GetPlaceDetails(data)
          const Photourl=PHOTO_REF_URL.replace('{NAME}',result?.data?.places[0]?.photos[3]?.name);
          setphotourl(Photourl);
  
      }
  
  
  
  
    return (
    <div>
      <Link to={'https://www.google.com/maps/search/?api=1&query='+Hotel?.hotel_name+", "+Hotel?.hotel_address} target='_blank'>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img className="rounded-xl h-[180px] w-full object-cover" src={photourls?photourls :'/No-Image.jpg'} />
                    <div className='my-3'>
                        <h2 className='font-medium'>{Hotel?.hotel_name}</h2>
                        <h2 className='text-xs text-gray-500'>📍 {Hotel?.hotel_address}</h2>
                        <h2 className='font-medium text-sm text-gray-500'>💡{Hotel?.description}</h2>
                        <h2 className='text-xs text-gray-500 font-bold'>⭐{Hotel?.rating} Stars</h2>
                    </div>
                </div>
                </Link>
    </div>
  )
}

export default HotelCarditem
