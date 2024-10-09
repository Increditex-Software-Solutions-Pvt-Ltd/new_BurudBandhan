import React, { useEffect, useRef, useState } from 'react';
import burudBandhan_logo from "../../Assets/burudBandhan_logo.jpeg";
import { FaUserCircle } from "react-icons/fa";
import ProfileModal from './ProfileModal';


const AdminNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const modalRef = useRef(null); // Ref for the profile modal

  const toggleProfileModal = (event) => {
    event.stopPropagation();// Prevent the click event from bubbling up to document
    setIsProfileOpen((prevState) => !prevState); // Toggle modal visibility
  };
 

  return (
    <div className='py-2 px-10 border flex items-center justify-between relative'>
      <div className='w-fit  '>
            <img className='w-[60px] h-[60px] object-cover' src={burudBandhan_logo} alt='logo' />
      </div>

      <div>
        {/* profile icon here */}
        <FaUserCircle
        onClick={toggleProfileModal}
         className='text-5xl text-sky-700 cursor-pointer' />

        {/* profile modal */}
        {isProfileOpen && <ProfileModal modalRef={modalRef} />}
      </div>

      
    </div>
  )
}

export default AdminNavbar;