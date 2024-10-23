import React, { useEffect } from 'react';
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const ProfileCard = ({profile}) => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(store=>store.user);
  const navigate = useNavigate();
 
  return (
    <div className='border border-gray-100 rounded-xl'>
        <div >
            <img className='w-[180px] h-[180px] m-auto border border-gray-100 ' src={profile.photo} alt='photo' />
        </div>
        <div className='p-4'>
            <p className='
            font-semibold 
            text-[20px]
            text-sky-900
            capitalize
            '>
              {
              isAuthenticated ? profile.fullName : profile._id
              }
            </p> 
            <p className='text-sky-800'>{profile.age} Years | {profile.height} ft</p>
            
            <div className='flex gap-4'>
              <div className='flex items-center gap-2 text-[14px] text-gray-600'>
                <FaUserGraduate />
                <p>{profile.qualification}</p>
              </div>

              {
                (profile.presentlyWorking.status == 'Yes') && <div className='flex items-center gap-2 text-[14px] text-gray-600'>
                  <FaUserTie />
                  <p>{profile.presentlyWorking?.designation}</p>
                </div>
              }

            </div>
            
            <div className='flex items-center gap-2 text-[14px] text-gray-600'>
              <IoLocation />
              <p>{profile.city}, {profile.dist}</p>   
            </div>  
        </div>
        <div className='text-center my-6'>
              <button className=' 
              py-2 px-4 
              rounded-lg
              bg-orange-400 hover:bg-orange-500
              text-white 
              '
              onClick={()=>navigate(`/profile/${profile._id}`)}
              >View Full Profile</button>
        </div>                   
    </div>
  )
}

export default ProfileCard;