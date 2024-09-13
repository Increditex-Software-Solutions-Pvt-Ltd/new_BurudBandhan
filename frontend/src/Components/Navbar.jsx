import React, { useState } from 'react';
import burudBandhan_logo from "../Assets/burudBandhan_logo.jpeg";
import { Logo } from './Logo';
import { useNavigate } from 'react-router-dom';
// import styles from "../Styles/navbar.module.css";



const Navbar = () => {
  const [option, sestOption] = useState("");
  const navigate = useNavigate();

  const handleSelect = (e)=>{
    navigate(`/${e.target.value}`);

  }

  return (
    <div>
        <div className='bg-white border  '>
            <div className='w-[70%] py-[30px]  m-auto  flex justify-between items-center'>
              <Logo  />

              <nav className='flex items-center gap-[40px]'>
                <a className='hover:underline underline-offset-8 decoration-red-400 decoration-2' href="/about">About</a>
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
                <a className='border-[2px] border-red-500 px-[10px] py-[6px] rounded hover:bg-red-500 hover:text-white' href="/register">नोंदणी करा</a>
                <a className=' px-[10px] py-[8px] rounded bg-red-500 hover:bg-red-700 text-white' href="/login">लॉगिन करा</a>
              </nav>
            </div>
            

           
        </div>
    </div>
  )
}

export default Navbar;