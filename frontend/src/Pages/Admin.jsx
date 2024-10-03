import React, { useState } from 'react'
import Sidebar from '../Components/Admin/Sidebar';
import Container from '../Components/Admin/Container';

const Admin = () => {
  const [showContent, setShowContent] = useState("dashboard");

  return (
    <div className='flex'>
        <Sidebar showContent={showContent} setShowContent={setShowContent} />
        <Container showContent={showContent} />
    </div>
  )
}

export default Admin;