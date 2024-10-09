import React, { useEffect, useRef } from 'react';
import { MdSettings } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";


const MenuModal = ({handleSelect}) => {
    
  return (
        <div  
        className='w-[30%] px-4 py-4 text-left absolute top-[100%] left-2 z-50 bg-white shadow-xl rounded-lg'>
            <p className='font-semibold text-[18px] pb-2'>Menu</p>
            <hr />
            <nav className='mt-4 flex flex-col lg:hidden  items-start gap-[10px] lg:gap-[40px]'>
                <div>
                    <a className='pl-[4px] ' href="/about">About</a>
                </div>
                <div>
                    <a className='pl-[4px]' href="/search">Search</a>

                </div>

                <select defaultValue={""} onChange={handleSelect} className='cursor-pointer focus:outline-none text-[16px] py-[5px]'>
                  <option value=""  disabled hidden>Stories</option>
                  <option value="success_stories">
                    Success Stories
                  </option>
                  <option value="success_videos">
                    Sucess Videos 
                  </option>
                </select>

                <div>
                    <a className='pl-[4px]' href="/profile">Profile</a>
                </div>
                
              </nav>
        </div>
  )
}

export default MenuModal;