import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Admin/Sidebar';
import Container from '../Components/Admin/Container';
import AdminNavbar from '../Components/Admin/AdminNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../Redux/User/user.actions';
import AdminLoginForm from '../Components/Admin/AdminLoginForm';

const Admin = () => {
  const [showContent, setShowContent] = useState("dashboard");
  const {isAuthenticated, user} = useSelector(store=>store.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(isAuthenticated){
      dispatch(getUser());
      // console.log(user);
      
    }
      
  },[dispatch]);

 

  return (
    <div>
      {/* if admin is not authenticated */}
      {!isAuthenticated && <AdminLoginForm />}

      {/* if user is in the db but not an admin */}
      {
        (isAuthenticated && user?.role !== 'admin') && <div className='h-[100vh] flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-[100px] text-gray-400 font-bold'>Sorry</h1>
          <h1 className='text-gray-500'>You can't access this page. This is for admin only!</h1>
          <button 
          className=' py-2 px-10 rounded-xl
          bg-red-500 hover:bg-red-600
          text-white font-bold' 
          onClick={()=>dispatch(logout)}>Logout</button>
        </div>
      }

      {/* dashboard is visible is user is admin */}
       {(isAuthenticated && user?.role== 'admin') && <div>
        <AdminNavbar showContent={showContent} setShowContent={setShowContent} />
        <div className='flex'>
          <div className='w-[15%] bg-gray-50 hidden lg:block'>
            <Sidebar showContent={showContent} setShowContent={setShowContent} />
          </div>
          <Container showContent={showContent} />
        </div>
      </div>}
    </div>
   
    
  )
}

export default Admin;