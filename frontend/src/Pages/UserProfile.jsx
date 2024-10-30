import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getUser } from "../Redux/User/user.actions";
import UpdateProfileModal from '../Components/UserProfile/UpdateProfileModal';
import ChangePasswordModal from '../Components/UserProfile/ChangePasswordModal';


const UserProfile = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, user, error, loading} = useSelector(store=>store.user);
  const [updateModal, setUpdateModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);

  const onUpdateOpen = ()=>{
    setUpdateModal(true);
  }
  const onUpdateClose = ()=>{
    setUpdateModal(false);
  }

  const onChangePwdOpen = ()=>{
    setChangePasswordModal(true);
  }
  const onChangePwdClose = ()=>{
    setChangePasswordModal(false);
  }

  useEffect(()=>{
    if(isAuthenticated){
      dispatch(getUser());
      console.log(user);
    }
  },[dispatch]);

  return (
    <div className='px-[20px] py-[80px] bg-gray-100'>
        {
          user && (
            <div className=' 
            px-8 py-[100px] 
          bg-white rounded-xl
            shadow-xl
            w-[50%] m-auto
            flex flex-col 
            gap-6
            '>
              
              <div className='flex 
              flex-col 
              justify-center 
              items-center
              gap-[20px]
              '>
                {/* see or update profile photo */}
                <div>
                  <img className='border w-[180px] h-[180px]' src="person.png" alt="Profile photo" />
                </div>
                {/* update profile details */}
                <div className='flex items-center gap-4 relative'>
                  <button 
                  onClick={onUpdateOpen}
                  className=' 
                  rounded-xl 
                  px-4 py-2
                  bg-sky-600 hover:bg-sky-500 
                  text-white
                  font-semibold
                  '>Update Profile</button>
                  <button 
                  onClick={onChangePwdOpen}
                  className=' 
                  rounded-xl 
                  px-4 py-2
                  bg-sky-600 hover:bg-sky-500
                  text-white
                  font-semibold
                  '
                  >Change Password</button>

                  {/* update profile modal */}
                  {updateModal && <UpdateProfileModal onUpdateClose={onUpdateClose} user={user} />}

                  {/* change passoword modal */}
                  {changePasswordModal && <ChangePasswordModal onChangePwdClose={onChangePwdClose} />}
                </div>
              </div>

              <div className='mt-[60px] mb-[30px]'>
                <h1 className='font-bold text-3xl text-sky-800'>User Details</h1>
              </div>
              
              {/* display all info in table */}
              <table className='
              text-left 
              text-xl
              '>
                <tr>
                  <td className='p-2 font-semibold'>Full Name:</td>
                  <td className='p-2'>{user.fullName}</td>
                </tr>
                <tr>
                  <td className='p-2 font-semibold'>Email:</td>
                  <td className='p-2'>{user.email}</td>
                </tr>
                <tr>
                  <td className='p-2 font-semibold'>Gender</td>
                  <td className='p-2'>{user.gender}</td>
                </tr>
              </table>

              
                
            </div>
          )
        }
    </div>
  )
}

export default UserProfile