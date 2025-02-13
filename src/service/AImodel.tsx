import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite-preview-02-05",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a travel plan for Las Vegas, for 3 days, for a couple with a cheap budget. Provide a hotel options list (5 HOTELS)including:-\nhotel_name\nhotel_address\nprice (starting price per night)\nhotel_image_url\ngeo coordinates (latitude and longitude)\nrating (out of 5)\nCost for one night\ndescription.\nSuggest an itinerary with:\nplace_name\nplace_image_url\nDescription of place\ngeo_coordinates\nticket_pricing (if applicable)\ntime(SECHDULE OF WHOLE DAY FROM STARTING for each days selected(full selected days dont skip the days)) (estimated time range for the activity, e.g., \"10:00 AM - 12:00 PM for each day (full all day dont skip after one day full plan needed)\")\ntime_travel (estimated travel time in minutes from the previous location)\nbest_time_to_visit\nThe entire output should be in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"trip_name\": \"Budget-Friendly Las Vegas Getaway\",\n  \"duration\": \"3 Days\",\n  \"travelers\": \"Couple\",\n  \"budget\": \"Cheap\",\n  \"hotel_options\": [\n    {\n      \"hotel_name\": \"The STRAT Hotel, Casino & Skypod\",\n      \"hotel_address\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": 30,\n      \"hotel_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/2d/30/5e/exterior.jpg?w=1200&h=-1&s=1\",\n      \"geo_coordinates\": {\n        \"latitude\": 36.1473,\n        \"longitude\": -115.1567\n      },\n      \"rating\": 3.5,\n      \"cost_per_night\": {\n        \"weekday\": 30,\n        \"weekend\": 60\n      },\n      \"description\": \"Offers budget-friendly rooms with the iconic Skypod for thrilling experiences. Has a pool and casino.\"\n    },\n    {\n      \"hotel_name\": \"Circus Circus Hotel, Casino & Theme Park\",\n      \"hotel_address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": 25,\n      \"hotel_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/50/6a/79/circus-circus-las-vegas.jpg?w=1200&h=-1&s=1\",\n      \"geo_coordinates\": {\n        \"latitude\": 36.1488,\n        \"longitude\": -115.1688\n      },\n      \"rating\": 3.0,\n      \"cost_per_night\": {\n        \"weekday\": 25,\n        \"weekend\": 50\n      },\n      \"description\": \"Known for its circus acts, Adventuredome theme park (additional cost), and affordable rooms.\"\n    },\n    {\n      \"hotel_name\": \"Excalibur Hotel & Casino\",\n      \"hotel_address\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": 40,\n      \"hotel_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/15/54/a9/exterior.jpg?w=1200&h=-1&s=1\",\n      \"geo_coordinates\": {\n        \"latitude\": 36.0985,\n        \"longitude\": -115.1730\n      },\n      \"rating\": 3.5,\n      \"cost_per_night\": {\n        \"weekday\": 40,\n        \"weekend\": 70\n      },\n      \"description\": \"Medieval-themed hotel with a vibrant atmosphere, multiple dining options, and affordable rates.\"\n    },\n    {\n      \"hotel_name\": \"Flamingo Las Vegas Hotel & Casino\",\n      \"hotel_address\": \"3555 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": 50,\n      \"hotel_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c6/e8/9d/flamingo-las-vegas.jpg?w=1200&h=-1&s=1\",\n      \"geo_coordinates\": {\n        \"latitude\": 36.1126,\n        \"longitude\": -115.1712\n      },\n      \"rating\": 4.0,\n      \"cost_per_night\": {\n        \"weekday\": 50,\n        \"weekend\": 80\n      },\n      \"description\": \"Iconic hotel with a wildlife habitat, a pool, and a lively casino, offering decent value.\"\n    },\n    {\n      \"hotel_name\": \"Tropicana Las Vegas - a DoubleTree by Hilton Hotel\",\n      \"hotel_address\": \"3801 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": 45,\n      \"hotel_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/0c/41/1a/tropicana-las-vegas.jpg?w=1200&h=-1&s=1\",\n      \"geo_coordinates\": {\n        \"latitude\": 36.0978,\n        \"longitude\": -115.1749\n      },\n      \"rating\": 3.5,\n      \"cost_per_night\": {\n        \"weekday\": 45,\n        \"weekend\": 75\n      },\n      \"description\": \"Offers reasonably priced rooms, a South Beach-inspired pool area, and easy access to the Strip.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day_1\": [\n      {\n        \"place_name\": \"Welcome to Las Vegas Sign\",\n        \"place_image_url\": \"https://www.lasvegas-how-to.com/wp-content/uploads/2019/05/welcome-to-las-vegas-sign.jpg\",\n        \"description\": \"A classic photo opportunity and a quintessential Las Vegas experience. It's free to visit and take pictures.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.0884,\n          \"longitude\": -115.1723\n        },\n        \"ticket_pricing\": \"Free\",\n        \"time\": \"9:00 AM - 9:30 AM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Morning or evening to avoid the midday heat and crowds.\"\n      },\n      {\n        \"place_name\": \"Explore the Strip (Walking Tour)\",\n        \"place_image_url\": \"https://www.planetware.com/wpimages/2019/10/las-vegas-strip-top-attractions.jpg\",\n        \"description\": \"Walk along the Las Vegas Strip, taking in the sights and sounds of the iconic hotels and attractions.  See the Bellagio fountains, the Venetian canals, and more.  Enjoy free shows like the volcano at the Mirage (check show times).\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"Free (for walking and enjoying the free attractions)\",\n        \"time\": \"9:30 AM - 1:00 PM\",\n        \"time_travel\": \"10 minutes (from Welcome Sign to a Strip Hotel for a starting point)\",\n        \"best_time_to_visit\": \"Morning or early afternoon for cooler temperatures. The Strip is always busy, but mornings are generally less crowded than afternoons and evenings.\"\n      },\n      {\n        \"place_name\": \"Lunch at In-N-Out Burger\",\n        \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/In-N-Out_Burger_-_Los_Angeles.jpg/1280px-In-N-Out_Burger_-_Los_Angeles.jpg\",\n        \"description\": \"A budget-friendly and popular West Coast burger chain.  Great for a quick and affordable lunch.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1120,\n          \"longitude\": -115.1723\n        },\n        \"ticket_pricing\": \"$5 - $10 per person\",\n        \"time\": \"1:00 PM - 2:00 PM\",\n        \"time_travel\": \"5 minutes (from a Strip location)\",\n        \"best_time_to_visit\": \"Lunchtime, but expect a potential wait due to popularity.\"\n      },\n       {\n        \"place_name\": \"High Roller Observation Wheel\",\n        \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/High_Roller_Observation_Wheel.jpg/1280px-High_Roller_Observation_Wheel.jpg\",\n        \"description\": \"Enjoy panoramic views of the Las Vegas Strip and surrounding areas from the world's tallest observation wheel.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1152,\n          \"longitude\": -115.1718\n        },\n        \"ticket_pricing\": \"$25 - $35 per person (check for deals and discounts)\",\n        \"time\": \"2:00 PM - 4:00 PM\",\n        \"time_travel\": \"5 minutes (from In-N-Out or a Strip location)\",\n        \"best_time_to_visit\": \"Afternoon for sunny views, or evening to see the Strip lights.\"\n      },\n      {\n        \"place_name\": \"Free Casino Hopping and People Watching\",\n        \"place_image_url\": \"https://i.ytimg.com/vi/X_sU819h914/maxresdefault.jpg\",\n        \"description\": \"Experience the energy of different casinos. Many casinos have free attractions to enjoy (like the Bellagio Conservatory or the Mirage Volcano).  Window shop, people-watch, and soak in the atmosphere.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"Free\",\n        \"time\": \"4:00 PM - 7:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Evening - the Strip comes alive at night.\"\n      },\n       {\n        \"place_name\": \"Dinner at a Budget-Friendly Restaurant\",\n        \"place_image_url\": \"https://images.unsplash.com/photo-1572656888703-61b002535081?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjByZXN0YXVyYW50fGVufDB8fDB8fHww\",\n        \"description\": \"Choose from the many affordable dining options, such as a food court, pizza, or a casual restaurant. Look for happy hour deals.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"$15-$25 per person\",\n        \"time\": \"7:00 PM - 8:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Dinner time\"\n      },\n      {\n        \"place_name\": \"Free Shows and Attractions on the Strip\",\n        \"place_image_url\": \"https://www.destination360.com/north-america/us/nevada/las-vegas/images/s/free-las-vegas-shows.jpg\",\n        \"description\": \"Enjoy free entertainment like the Bellagio Fountain show (every 15-30 minutes), the Mirage Volcano show (check showtimes) and street performers.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"Free\",\n        \"time\": \"8:00 PM - 10:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Evening for the best experience.\"\n      }\n    ],\n    \"day_2\": [\n      {\n        \"place_name\": \"Breakfast at a Cafe or Diner\",\n        \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Breakfast.jpg/1280px-Breakfast.jpg\",\n        \"description\": \"Start your day with a budget-friendly breakfast at a local cafe or diner. Many offer breakfast specials.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"$10 - $15 per person\",\n        \"time\": \"9:00 AM - 10:00 AM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Morning\"\n      },\n      {\n        \"place_name\": \"Visit Fremont Street Experience\",\n        \"place_image_url\": \"https://www.casino.org/blog/wp-content/uploads/2023/04/fremont-street.jpg\",\n        \"description\": \"Head downtown to experience the Fremont Street Experience, with its Viva Vision light shows, street performers, and historic casinos. Enjoy the free light and sound shows on the canopy.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1700,\n          \"longitude\": -115.1410\n        },\n        \"ticket_pricing\": \"Free (for the light shows and exploring)\",\n        \"time\": \"10:00 AM - 1:00 PM\",\n        \"time_travel\": \"20-30 minutes (from the Strip via bus or ride-sharing)\",\n        \"best_time_to_visit\": \"Daytime for exploring, evening for the light show.\",\n      },\n      {\n        \"place_name\": \"Lunch at Heart Attack Grill\",\n        \"place_image_url\": \"https://assets.simpleviewinc.com/simpleview/image/upload/crm/lasvegas/Heart-Attack-Grill-LV-1200x630_109c5572-5056-a36a-0e814e91ca8f4200.jpg\",\n        \"description\": \"A uniquely themed restaurant that offers a memorable experience (and potentially a long wait if busy!). It's a tourist attraction as much as a place to eat. Can be pricey. Choose wisely from the menu.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1687,\n          \"longitude\": -115.1402\n        },\n        \"ticket_pricing\": \"$15-30 per person (menu varies greatly)\",\n        \"time\": \"1:00 PM - 2:00 PM\",\n        \"time_travel\": \"5 minutes (walking)\",\n        \"best_time_to_visit\": \"Lunchtime, but expect possible waits.\"\n      },\n       {\n        \"place_name\": \"Explore Downtown Casinos\",\n        \"place_image_url\": \"https://www.usatoday.com/gcdn/authoring/authoring-images/2023/07/09/USAT/62390577007-gettyimages-1253087150.jpg?crop=1280,720,x0,y42&width=1280&height=720&format=webp\",\n        \"description\": \"Visit the older casinos downtown.  Explore the casinos that often offer lower table limits than those on the Strip.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1700,\n          \"longitude\": -115.1410\n        },\n        \"ticket_pricing\": \"Free (for exploration and window shopping, gambling costs extra)\",\n        \"time\": \"2:00 PM - 4:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Afternoon\"\n      },\n      {\n        \"place_name\": \"Ride the Deuce Bus or Monorail\",\n        \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Las_Vegas_Monorail_train_and_track_1.jpg/1280px-Las_Vegas_Monorail_train_and_track_1.jpg\",\n        \"description\": \"A cheap way to get up and down the Strip with stops at many of the resorts.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"Deuce: about $6 per person for a 24-hour pass, Monorail: $5 per ride or $13 for a day pass (depending on your plans, the Deuce is often better value).\",\n        \"time\": \"4:00 PM - 5:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Throughout the day\"\n      },\n      {\n        \"place_name\": \"Dinner at a Cheap Eatery on the Strip\",\n        \"place_image_url\": \"https://images.unsplash.com/photo-1564295136-06ef5a810e8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpbm5lcnxlbnwwfDB8MHx8&w=1000\",\n        \"description\": \"Food courts offer various cuisines at reasonable prices. Look for happy hour deals for more savings.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"$15 - $25 per person\",\n        \"time\": \"7:00 PM - 8:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Dinner time\"\n      },\n      {\n        \"place_name\": \"Free Entertainment\",\n        \"place_image_url\": \"https://www.reviewjournal.com/wp-content/uploads/2021/08/15346439_web1_1_8134_fountains-bellagio.jpg\",\n        \"description\": \"Visit the Bellagio Fountains or Mirage Volcano. Stroll the Strip to take in the sights and sounds of the evening.  Enjoy a show at the LINQ Promenade.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"Free\",\n        \"time\": \"8:00 PM - 10:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Evening\"\n      }\n    ],\n    \"day_3\": [\n      {\n        \"place_name\": \"Breakfast at a local cafe or diner\",\n        \"place_image_url\": \"https://media.istockphoto.com/id/1156755375/photo/breakfast-in-american-diner.jpg?s=612x612&w=0&k=20&c=4v1u0v03QvjX6tQy7s74_v-5yW5Lq27s-62w09_L5f8=\",\n        \"description\": \"A quick and easy option before departure.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"$10 - $15 per person\",\n        \"time\": \"9:00 AM - 10:00 AM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Morning\"\n      },\n      {\n        \"place_name\": \"Explore a Casino or Pool (if time allows)\",\n        \"place_image_url\": \"https://images.unsplash.com/photo-1554421217-b0b9c963fa4a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhc2lubyUyMG9uZSUyMGxpbmdzJTIwZm9yZXxlbnwwfDB8MHx8Mg%3D%3D\",\n        \"description\": \"If you have time before your departure, visit the casino in your hotel or explore a different one.  Relax by the pool (if weather permits).\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"Free (for casino entry and exploring), pool access depends on hotel.\",\n        \"time\": \"10:00 AM - 12:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Morning or early afternoon\"\n      },\n      {\n        \"place_name\": \"Lunch at a fast food restaurant\",\n        \"place_image_url\": \"https://www.qsrmagazine.com/sites/default/files/styles/article_featured_standard/public/story/fastfood-generic.jpg?itok=U18lY_7u\",\n        \"description\": \"Grab a quick lunch.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1728\n        },\n        \"ticket_pricing\": \"$10 - $15 per person\",\n        \"time\": \"12:00 PM - 1:00 PM\",\n        \"time_travel\": \"0 minutes\",\n        \"best_time_to_visit\": \"Lunch time\"\n      },\n      {\n        \"place_name\": \"Head to Airport\",\n        \"place_image_url\": \"https://media.cntraveler.com/photos/5a372c9d9b07506b9a3060f0/16:9/w_2560,c_limit/Las-Vegas-Airport-GettyImages-637071978.jpg\",\n        \"description\": \"Allow plenty of time for check-in, security, and getting to your gate.\",\n        \"geo_coordinates\": {\n          \"latitude\": 36.0888,\n          \"longitude\": -115.1836\n        },\n        \"ticket_pricing\": \"N/A\",\n        \"time\": \"1:00 PM - 3:00 PM\",\n        \"time_travel\": \"10-30 minutes (depending on location and traffic)\",\n        \"best_time_to_visit\": \"Departure time\"\n      }\n    ]\n  }\n}\n```"},
        ],
      },
    ],
  });

