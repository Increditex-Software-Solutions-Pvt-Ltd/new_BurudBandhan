import React, { useEffect, useRef } from 'react';
import { MdSettings } from "react-icons/md";
import { RiLogoutBoxRFill, RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { logout } from '../Redux/User/user.actions';
import { useDispatch } from 'react-redux';


const NavbarProfileModal = ({user}) => {
    const dispatch = useDispatch();
    
  return (
        <div 
        className='w-[15%] p-4 text-left absolute top-[100%] right-[30px] bg-white shadow-xl rounded-lg z-50'>
            <div className='border-b pb-4 font-semibold'>
              <p>{user.fullName}</p>
              <p className='text-gray-400'>{user.email}</p>
            </div>
            
            <ul className='py-4 flex flex-col gap-4'>
              {(user.role == 'admin') && <li className='text-[18px] flex items-center gap-4'>
                <RiAdminFill />
                <a href='/admin'>Admin</a>
              </li>}
              {(user?.role == 'user') && <li className='text-[18px] flex items-center gap-4'>
                <FaUser />
                <a href='/user-profile'>Profile</a>
              </li>}
             
              <li className='text-[18px] flex items-center gap-4 border-t pt-4 text-red-600'>
                <RiLogoutBoxRFill />
                <a href='/login' className='cursor-pointer' onClick={()=>dispatch(logout)}>Logout</a>
              </li>
            </ul>
        </div>
  )
}

export default NavbarProfileModal;