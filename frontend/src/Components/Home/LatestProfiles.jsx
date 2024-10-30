import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const profileData = [
  {name:'Sakshi Shinde', profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s', age:25, location:'Nashik', mobile:'9999999999', education:'Bcom', profession:'CA'},
  {name:'Minal More', profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s', age:25, location:'Pune', mobile:'9999999999', education:'BE', profession:'Engineer'},
  {name:'Sandip Waghmare', profile:'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp', age:25, location:'Mumbai', mobile:'9999999999', education:'BA', profession:'Digital Marketing'},
  {name:'Badri Deore', profile:'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp', age:25, location:'Mumbai', mobile:'9999999999', education:'MBBS', profession:'Doctor'},
  {name:'Gauri Patole', profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s', age:25, location:'Thane', mobile:'9999999999', education:'BSC', profession:'Bank Manager'},
  // {name:'Rutuja Shinde', profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s', age:25, location:'Sambhaji Nagar', mobile:'9999999999', education:'BA', profession:'Business'},
]

const LatestProfiles = () => {
  const [profiles, setProfiles] = useState(profileData);
  const navigate = useNavigate();

  return (
    <div className=' mb-[80px]'>
        <h1 className='text-4xl font-bold text-sky-950'>Latest Profiles</h1>
        <p className='text-2xl text-red-700'>Search your Bride & Groom here</p>

        <div className='w-[80%] m-auto mt-[50px] flex flex-wrap lg:flex-nowrap justify-between '>
          {
            profiles.map((item, i) => (
              <div className='cursor-pointer rounded-2xl hover:shadow-lg hover:shadow-gray-300 p-4' key={i}>
                  <div className=''>
                    <img className='w-[200px] h-[200px] m-auto rounded-full' src={item.profile} alt={item.name} />
                  </div>

                  <div className='mt-[15px]'>
                    <p className='font-semibold text-xl text-sky-950'>{item.name}</p>
                    <p className='text-gray-400'>{item.age} yrs | {item.location}</p>
                    <p className='text-gray-400'>{item.education} | {item.profession}</p>
                  </div>

              </div>
            ))
          }
        </div>

        <button onClick={()=>navigate('/profile')} className='w-fit mt-12 py-4 px-10 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl'>अधिक प्रोफाईल पहा</button>

        
    </div>
  )
}

export default LatestProfiles;