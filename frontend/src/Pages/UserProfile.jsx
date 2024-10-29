import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getUser } from "../Redux/User/user.actions";


const UserProfile = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, user, error, loading} = useSelector(store=>store.user);

  useEffect(()=>{
    if(isAuthenticated){
      dispatch(getUser());
      console.log(user);
    }
  },[dispatch]);

  return (
    <div className='px-[20px] py-[80px]'>
        {
          user && (
            <div className='border px-8 py-10 border-red-400 w-[70%] m-auto'>
              
              <div className='flex flex-col justify-center items-center'>
                {/* see or update profile photo */}
                <div>
                  <img className='border w-[180px] h-[180px]' src="person.png" alt="Profile photo" />
                </div>
                {/* update profile details */}
                <div className='flex items-center gap-4'>
                  <button>Update Profile</button>
                  <button>Change Password</button>
                </div>
              </div>
              
              {/* display all info in table */}
              <table className='text-left'>
                <tr>
                  <td>Full Name:</td>
                  <td>{user.fullName}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{user.gender}</td>
                </tr>
              </table>

              
                
            </div>
          )
        }
    </div>
  )
}

export default UserProfile