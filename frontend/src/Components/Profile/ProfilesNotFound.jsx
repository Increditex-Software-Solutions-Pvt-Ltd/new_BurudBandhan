import React from 'react';
import { FaUserGroup } from "react-icons/fa6";

const ProfilesNotFound = () => {
  return (
    <div className='min-h-[500px] flex justify-center items-center'>
      <div className=' text-orange-300  m-auto flex flex-col justify-center items-center'>
        <FaUserGroup className='text-[200px]' />
        <p className='text-2xl font-semibold'>Profiles Not Found</p>
      </div>
    </div>
  )
}

export default ProfilesNotFound