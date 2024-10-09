import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const iniUser = {
  email:"",
  password:""
}

const LoginForm = () => {
  const [user, setUser] = useState(iniUser);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser({...user, [name]:[value]});
  }

  const handleSubmit = ()=>{
    // form submit logic here
  }

  return (
    <div className='mt-[50px]'>
      <form 
      className='
      w-[80%] m-auto  
      p-6 py-8   
      flex flex-col gap-6
      '
      onSubmit={handleSubmit}>
        
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
          w-full p-4 mt-8
          focus:outline-none 
          text-[18px] font-bold 
          bg-sky-700 hover:bg-sky-600 text-white' 
          type='submit'
          value='लॉगिन करा'
          />
        </div>

        <div>
          <p>तुम्ही नवीन सदस्य आहात का? <a className='text-sky-700 hover:text-sky-500' href='/register'>नोंदणी करण्यासाठी येथे क्लिक करा</a></p>
        </div>

        <div className='flex justify-center items-center'>
          <div className='w-1/3 border'></div>
          <p className='w-1/6'>किंवा </p>
          <div className='w-1/3 border'></div>
        </div>

        <div className='border border-sky-700 
        font-bold rounded-xl py-4 
        flex justify-center items-center
        hover:bg-sky-100 hover:border-sky-300
        cursor-pointer
        '>          
          {/* google icon */}
          <FcGoogle className='text-2xl' />
          <p>oogle सह लॉगिन करा</p>
          
        </div>
        

      </form>
    </div>
  )
}

export default LoginForm;