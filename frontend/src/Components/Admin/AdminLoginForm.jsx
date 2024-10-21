import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcGoogle } from "react-icons/fc";
import { login } from '../../Redux/User/user.actions';
import { Navigate } from 'react-router-dom';

const iniUser = {
  email:"",
  password:""
}

const AdminLoginForm = () => {
  const [user, setUser] = useState(iniUser);
  const dispatch = useDispatch();
  const {isAuthenticated, loading, error} = useSelector(store => store.user);

  
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
  }

  const handleSubmit = (e)=>{
    // form submit logic here
    e.preventDefault();
    // console.log(user);
    dispatch(login(user));
  }
  
 
  return (
    <div className='h-[100vh] flex justify-center items-center bg-gray-100'>
      <form 
      className='
      w-full lg:w-[40%] m-auto  
      lg:p-6 lg:py-8   
      flex flex-col gap-6 
      bg-white shadow-xl rounded-2xl
      '
      onSubmit={handleSubmit}>

        {error && <p className=' text-red-600 text-left'>{error}</p>}

        <h1 className='text-[40px] text-sky-800 font-bold'>Admin Login</h1>
        
        <div>
          <input 
          className='border w-full p-4 focus:outline-none text-[18px]' 
          placeholder='ई-मेल'
          type="email" 
          name='email'
          value={user.email}
          onChange={handleChange} 
          />
        </div>

        <div>
          <input 
          className='border w-full p-4 focus:outline-none text-[18px]' 
          placeholder='पासवर्ड'
          type='password' 
          name='password'
          value={user.password}
          onChange={handleChange} 
          />
        </div>
        
        <div>
          <input
          className='rounded-xl
          cursor-pointer 
          w-fit p-4 mt-8
          focus:outline-none 
          text-[18px] font-bold 
          bg-sky-700 hover:bg-sky-600 text-white' 
          type='submit'
          value='लॉगिन करा'
          />
        </div>

      </form>
    </div>
  )
}

export default AdminLoginForm;