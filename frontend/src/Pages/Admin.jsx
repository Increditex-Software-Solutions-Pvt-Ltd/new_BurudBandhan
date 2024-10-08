import React, { useState } from 'react'
import Sidebar from '../Components/Admin/Sidebar';
import Container from '../Components/Admin/Container';
import AdminNavbar from '../Components/Admin/AdminNavbar';

const Admin = () => {
  const [showContent, setShowContent] = useState("dashboard");

  return (
    <div>
      <AdminNavbar />
      <div className='flex'>
        <Sidebar showContent={showContent} setShowContent={setShowContent} />
        <Container showContent={showContent} />
      </div>
    </div>
    
  )
}

export default Admin;