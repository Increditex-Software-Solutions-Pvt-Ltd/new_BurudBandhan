import React, { useEffect, useRef } from 'react';
import { MdSettings } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { logout } from '../../Redux/User/user.actions';
import { useDispatch } from 'react-redux';


const ProfileModal = ({user, modalRef}) => {
  const dispatch = useDispatch();

  return (
        <div 
        ref={modalRef} 
        className='w-[15%] p-4 text-left absolute top-[100%] right-[30px] bg-white shadow-xl rounded-lg z-50'>
            <div className='border-b pb-4 font-semibold'>
              <p>{user.fullName}</p>
              <p className='text-gray-400'>{user.email}</p>
            </div>
            <ul className='py-4 flex flex-col gap-4'>
              <li className='text-[18px] flex items-center gap-4'>
                <FaUser />
                <a href='/profile'>Profile</a>
              </li>
              <li className='text-[18px] flex items-center gap-4'>
                <MdSettings />
                <a href='/setting'>Setting</a>
              </li>
              <li className='text-[18px] flex items-center gap-4 border-t pt-4 text-red-600'>
                <RiLogoutBoxRFill />
                <a href='/login' onClick={()=>dispatch(logout)}>Logout</a>
              </li>
            </ul>
        </div>
  )
}

export default ProfileModal;