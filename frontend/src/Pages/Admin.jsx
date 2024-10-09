import React, { useState } from 'react'
import Sidebar from '../Components/Admin/Sidebar';
import Container from '../Components/Admin/Container';
import AdminNavbar from '../Components/Admin/AdminNavbar';

const Admin = () => {
  const [showContent, setShowContent] = useState("dashboard");

  return (
    <div>
      <AdminNavbar showContent={showContent} setShowContent={setShowContent} />
      <div className='flex'>
        <div className='w-[15%] bg-gray-50 hidden lg:block'>
          <Sidebar showContent={showContent} setShowContent={setShowContent} />
        </div>
        <Container showContent={showContent} />
      </div>
    </div>
    
  )
}

export default Admin;