import React, { useEffect, useRef } from 'react';
import { MdSettings } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";


const ProfileModal = ({modalRef}) => {
    
  return (
        <div 
        ref={modalRef} 
        className='w-[15%] p-4 text-left absolute top-[100%] right-[30px] bg-white shadow-xl rounded-lg z-50'>
            <div className='border-b pb-4 font-semibold'>
              <p>Gaurav Wagh</p>
              <p className='text-gray-400'>Full Name</p>
            </div>
            <ul className='py-4 flex flex-col gap-4'>
              <li className='text-[18px] flex items-center gap-4'>
                <FaUser />
                <a href=''>Profile</a>
              </li>
              <li className='text-[18px] flex items-center gap-4'>
                <MdSettings />
                <a href=''>Setting</a>
              </li>
              <li className='text-[18px] flex items-center gap-4 border-t pt-4 text-red-600'>
                <RiLogoutBoxRFill />
                <a href=''>Logout</a>
              </li>
            </ul>
        </div>
  )
}

export default ProfileModal;