import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router'

function Hero() {
  return (
    <>
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'><span className='text-[#f56551]'>Discover Your Next Adventure with AI</span>: Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal planner and travel curator,creating custom Itineraries tailored to your interests and budget.</p>    
        <Link to={'/create-trip'}>
            <Button> Get Started, It's Free </Button>
        </Link>
        
    </div>
    <div>
          <h2 className='mt-16 font-bold text-3xl mx-56'>Application Highlights</h2>
          <div className='grid grid-cols-2 mt-10 gap-10 mx-56'>
            <div className='hover:scale-105 transition-all'>
                <img src='/L1.png'  className='object-cover rounded-lg border-2 '/>
                <h2 className='font-bold mt-5 '>Plan your Next Trip With AI</h2>
                <p className='text-sm text-gray-500 font-semibold'>Enter your destination, number of days, budget, and total people, and our AI will generate creative trip plans and places to visit at your fingertips.</p>
            </div>
            <div className='hover:scale-105 transition-all'>
                <img src='/L2.png' className='object-cover rounded-lg border-2 h-[250px] '/>
                <h2 className='font-bold mt-5 '>Don't Worry our AI will give full Schedule of the trip.</h2>
                <p className='text-sm text-gray-500 font-semibold'>Get the hotel Recommendation,Address of the hodel,Each Days Schedule.Track your Trips easily</p>
                
            </div>
            

          </div>
          <div className='flex flex-row mt-14 mx-56 gap-9'>
            <h2 className='font-bold text-2xl'>Then what are you waiting for? Start planning your trip now for free!</h2>
            <Link to={'/create-trip'}>
              <Button> Get Started, It's Free </Button>
            </Link>
          </div>
          
          
      </div>
      <div className='p-2 shadow-sm px-5 bg-[#1c1c1c] h-[60px] mt-10 flex items-center justify-center'>
        <h2 className='font-bold text-sm text-white'>Copy Right's @ AI Travel Planner</h2>

      </div>
          
      
    </>
  )
}

export default Hero