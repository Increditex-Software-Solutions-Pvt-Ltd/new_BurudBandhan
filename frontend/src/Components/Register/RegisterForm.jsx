import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const iniUser = {
  fullName:"",
  email:"",
  gender:"",
  password:""
}

const RegisterForm = () => {
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
          placeholder='पूर्ण नाव'
          type='text'
          name='fullName'
          value={user.fullName}
          onChange={handleChange} 
          />
        </div>
        
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
          <select
          className='border w-full p-4 focus:outline-none text-[18px]'  
          name='gender'
          value={user.gender}
          onChange={handleChange} 
          placeholder='लिंग निवडा' >
            <option value="">लिंग निवडा</option>
            <option value="male">पुरुष</option>
            <option value="female">स्त्री</option>
          </select>
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
          value='नोंदणी करा'
          />
        </div>

        <div>
          <p>आधीच खाते आहे का? <a className='text-sky-700 hover:text-sky-500' href='/login'>लॉगिन करण्यासाठी येथे क्लिक करा</a></p>
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

export default RegisterForm;