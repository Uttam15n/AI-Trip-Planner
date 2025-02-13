import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVists({trips}) {
  return (
    
    <div>
        
        <h2  className='font-bold text-lg'>Places To Visit</h2>

        <div className='mt-5'>
        {Object.entries(trips?.tripData?.itinerary || {}).map(([dayKey, places], index) => (
        <div key={dayKey} className="mb-6">
        <h2 className="font-medium text-lg">Day {index + 1} 📆</h2>
        <div className="grid grid-cols-2 gap-5">
            {places.map((place, placeIndex) => (
                <div key={placeIndex} className="my-3">
                    <h2 className="font-medium text-sm text-orange-600">{place?.time}</h2>
                    <PlaceCardItem place={place} />
                </div>
            ))}
        </div>
    </div>
))}
        </div>
    </div>
  )
}

export default PlacesToVists