import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { useNavigate } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import MenuModal from './MenuModal';
import { useDispatch, useSelector } from 'react-redux';
import NavbarProfileModal from './NavbarProfileModal';
import { getUser } from '../Redux/User/user.actions';

// import styles from "../Styles/navbar.module.css";



const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const dispatch = useDispatch();
  const {isAuthenticated, user} = useSelector(store=>store.user);
  const navigate = useNavigate();

  const handleSelect = (e)=>{
    navigate(`/${e.target.value}`);

  }
  // toggle menu modal
  const toggleMenuModal = ()=>{
    setIsMenuModalOpen(prevState => !prevState);
  }

  const toggleProfileModal = (event) => {
    event.stopPropagation();// Prevent the click event from bubbling up to document
    setIsProfileOpen((prevState) => !prevState); // Toggle modal visibility
  };

  useEffect(()=>{
    if(isAuthenticated){
      dispatch(getUser());
      // console.log(user);
    }
      
  },[dispatch]);

  return (
    <div>
        <div className='bg-white border relative '>
            <div className='w-[100%] lg:w-[70%] px-[20px] py-[30px]  m-auto  flex justify-between items-center'>
              {/* menu */}
              <div className='lg:hidden '>
                <MdMenu onClick={toggleMenuModal} className='text-3xl cursor-pointer' />
                {/* menu modal */}
                {isMenuModalOpen && <MenuModal handleSelect={handleSelect} />}
                
              </div>
                    
              
              <Logo  />

              <nav className='hidden lg:flex items-center gap-[10px] lg:gap-[40px]'>
                <a className='hover:underline underline-offset-8 decoration-red-400 decoration-2 ' href="/about">About</a>
                <a className='hover:underline underline-offset-8 decoration-red-400 decoration-2' href="/search">Search</a>
                <select defaultValue={""} onChange={handleSelect} className='cursor-pointer focus:outline-none text-[16px] py-[5px] hover:border-b-[3px] hover:border-b-red-400'>
                  <option value=""  disabled hidden>Stories</option>
                  <option value="success_stories">
                    Success Stories
                  </option>
                  <option value="success_videos">
                    Sucess Videos 
                  </option>
                </select>
                <a className='hover:underline underline-offset-8 decoration-red-400 decoration-2' href="/profile">Profile</a>
                
              </nav>

              {/* if user is authenticated then show user profile */}
              {
                isAuthenticated && <div>
                {/* profile icon here */}
                <FaUserCircle
                onClick={toggleProfileModal}
                 className='text-5xl text-sky-700 cursor-pointer' />
        
                {/* profile modal */}
                {isProfileOpen && <NavbarProfileModal user={user}  />}
              </div>
              }
              {/* if user if not authenticated then show login and signup */}
              {!isAuthenticated && <div className='flex items-center gap-[10px] lg:gap-[40px]'>
                <a className='text-[14px] lg:text-[16px] border-[2px] border-red-500 px-[10px] py-[6px] rounded hover:bg-red-500 hover:text-white' href="/register">नोंदणी करा</a>
                <a className=' text-[14px] lg:text-[16px] px-[10px] py-[8px] rounded bg-red-500 hover:bg-red-700 text-white' href="/login">लॉगिन करा</a>
              </div>}
            </div>
            

           
        </div>
    </div>
  )
}

export default Navbar;