import React from 'react';
import burudBandhan_logo from "../../Assets/burudBandhan_logo.jpeg";
import { FaUserCircle } from "react-icons/fa";


const AdminNavbar = () => {
  return (
    <div className='py-2 px-10 border flex items-center justify-between relative'>
      <div className='w-fit  '>
            <img className='w-[60px] h-[60px] object-cover' src={burudBandhan_logo} alt='logo' />
      </div>

      <div>
        {/* profile icon here */}
        <FaUserCircle className='text-5xl text-sky-700 cursor-pointer' />

        {/* profile modal */}
        <div className='w-[15%] p-4 text-left absolute top-[100%] right-[30px] bg-white shadow-xl rounded-lg'>
            <div className='border-b py-2 font-semibold'>
              <p>Admin full name</p>
            </div>
            <ul className='py-4 flex flex-col gap-4'>
              <li>
                <a href=''>Profile</a>
              </li>
              <li>
                <a href=''>Setting</a>
              </li>
              <li>
                <a href=''>Logout</a>
              </li>
            </ul>
        </div>
      </div>

      
    </div>
  )
}

export default AdminNavbar;