import React, { useEffect, useRef, useState } from 'react';
import burudBandhan_logo from "../../Assets/burudBandhan_logo.jpeg";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ProfileModal from './ProfileModal';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../Redux/User/user.actions';


const AdminNavbar = ({showContent, setShowContent}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const modalRef = useRef(null); // Ref for the profile modal
  const dispatch = useDispatch();
  const {isAuthenticated, user} = useSelector(store=>store.user);


  const toggleProfileModal = (event) => {
    event.stopPropagation();// Prevent the click event from bubbling up to document
    setIsProfileOpen((prevState) => !prevState); // Toggle modal visibility
  };

  const toggleSidebar = ()=>{
    setIsSidebarOpen((prevState) => !prevState);
  }

  useEffect(()=>{
    if(isAuthenticated){
      dispatch(getUser());
      // console.log(user);
    }
      
  },[dispatch])

  return (
    <div className='py-2 px-10 border flex items-center justify-between relative'>
      <div className='lg:hidden '>
        <MdMenu onClick={toggleSidebar} className='text-3xl cursor-pointer' />
        {/* menu sidebar */}
        {isSidebarOpen && <div ref={sidebarRef} className='absolute top-[100%] left-0 z-50 w-[30%] bg-gray-50 lg:hidden'>
          <Sidebar showContent={showContent} setShowContent={setShowContent} />
        </div>}
      </div>
      <div className='w-fit  '>
            <img className='w-[60px] h-[60px] object-cover' src={burudBandhan_logo} alt='logo' />
      </div>

      <div>
        {/* profile icon here */}
        <FaUserCircle
        onClick={toggleProfileModal}
         className='text-5xl text-sky-700 cursor-pointer' />

        {/* profile modal */}
        {isProfileOpen && <ProfileModal user={user} modalRef={modalRef} />}
      </div>

      
    </div>
  )
}

export default AdminNavbar;