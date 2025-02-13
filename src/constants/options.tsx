

export const SelectTravelesList=[
    {
        id:1,
        titlt:'Just me',
        desc:'A sole traveles in exploration',
        people:'1 people',
        icon:'✈️'
    },
    {
        id:2,
        titlt:'A couple',
        desc:'Two traveles in tandem',
        people:'2 people',
        icon:'💞'
    },
    {
        id:3,
        titlt:'Family',
        desc:'A group of fun loving adv',
        people:'3 to 5 people',
        icon:'👨‍👩‍👧‍👧'
    },
    {
        id:4,
        titlt:'Friends',
        desc:'A bunch of thrill-seeks',
        people:'5 to 10 people',
        icon:'😎'
    },
]



export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💸'
        
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on average side',
        icon:'💰'
        
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about costs',
        icon:'🤑'
    },
    
]

export const AI_prompt="Generate a travel plan for {location}, for {noofdays} days, for a {noofpeople} with a {budget} budget. Provide a hotel options list (5 HOTELS)including:-hotel_name\nhotel_address\nprice (starting price per night)\nhotel_image_url\ngeo coordinates (latitude and longitude)\nrating (out of 5)\nCost for one night\ndescription. \nSuggest an itinerary with:\nplace_name\nplace_image_url\nDescription of place\ngeo_coordinates\nticket_pricing (if applicable)\ntime(SECHDULE OF WHOLE DAY FROM STARTING for each days selected(full selected days dont skip the days)) (estimated time range for the activity, e.g., (10:00 AM - 12:00 PM for each day (full all day dont skip after one day full plan needed)\ntime_travel (estimated travel time in minutes from the previous location)\nbest_time_to_visit\nThe entire output should be in JSON format.";