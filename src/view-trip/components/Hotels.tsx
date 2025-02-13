import React from 'react'
import { Link } from 'react-router'
import HotelCarditem from './hotelCarditem'
//import {HotelCarditem} from ''

function Hotels({trips}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-7'>Hotel Recommendation 🏨</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-7'>
            {trips?.tripData?.hotel_options.map((Hotel,index)=>(
                <HotelCarditem Hotel={Hotel}/>
                
            ))}
        </div>
    </div>
  )
}

export default Hotels