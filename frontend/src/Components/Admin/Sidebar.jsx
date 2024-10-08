import React from 'react';
import burudBandhan_logo from "../../Assets/burudBandhan_logo.jpeg";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUsers, FaRegEdit } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const Sidebar = ({showContent, setShowContent}) => {

  const handleContent = (content_name)=>{
    setShowContent(content_name);
  }
  return (
    <div className='min-h-[100vh] w-[15%] border-r border-r-gray-100 bg-gray-50 '>
        {/* <div className='p-6 '>
            <img className='w-[120px] h-[120px] object-cover' src={burudBandhan_logo} alt='logo' />
        </div> */}

        <div className='py-8 text-gray-600 text-xl flex flex-col '>
          <div 
          style={{
            // color: showContent=='dashboard' ? "#991b1b": "#4b5563",
            backgroundColor: showContent=='dashboard' ? "#f3f4f6": "white"
            
           }} 
           className='flex items-center gap-2 px-6 py-4 cursor-pointer  hover:bg-gray-100' onClick={()=>handleContent('dashboard')}>
            {/* dashboard icon */}
            <MdOutlineDashboard />
            <p>Dashboard</p>
          </div>
          <div style={{
            // color: showContent=='users' ? "#991b1b": "#4b5563",
            backgroundColor: showContent=='users' ? "#f3f4f6": "white"

           }} className='flex items-center gap-2 px-6 py-4 cursor-pointer hover:bg-red-100' onClick={()=>handleContent('users')}>
            {/* users icon */}
            <FiUsers />
            <p>Users</p>
          </div>

          <div style={{
            // color: showContent=='content_management' ? "#991b1b": "#4b5563",
            backgroundColor: showContent=='content_management' ? "#f3f4f6": "white"

           }} className='flex items-center gap-2 px-6 py-4 cursor-pointer hover:bg-red-100' onClick={()=>handleContent('content_management')}>
            {/* content management icon */}
            <FaRegEdit />
            <p>Content Management</p>
          </div>
        </div>

    </div>
  )
}

export default Sidebar;