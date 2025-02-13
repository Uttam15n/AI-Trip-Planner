import { db } from '@/service/firebaseconfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router';
import UserTripCardItem from './components/UserTripCardItem';

function Mytrips() {
    const navigation=useNavigation();
    const [usertrip,savetrip]=useState([]);
    useEffect(()=>{
        GetUserTrips();
    },[])
    const GetUserTrips=async()=>{
        const user=await JSON.parse(localStorage.getItem('user'));
        
        if(!user)
        {
            navigation('/');
            return;
        }
        savetrip([]);
        const q=query(collection(db,'AITrips'),where('userEmail','==',user?.email));

        const querySnapshot = await getDocs(q);
        savetrip([]);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        savetrip(prevVal=>[...prevVal,doc.data()])
});
    }
  
    return (
    <div className='p-10 sm:px-10  md:px-32 lg:px-56 xl:px-72'>
        <h2 className='font-bold text-3xl'>My Trips</h2>
        <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
            {usertrip?.length>0?usertrip.map((trip,index)=>(
                <UserTripCardItem trip={trip} key={index}/>
            ))
        :[1,2,3,4,5,6].map((item,index)=>(
            <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl'>

            </div>
        ))
        
        }
        </div>
    </div>
  )
}

export default Mytrips
