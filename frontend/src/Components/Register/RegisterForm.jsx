import React, { useState } from 'react'

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
    <div className='mt-[80px]'>
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
          placeholder='ईमेल'
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
          className='border 
          w-full p-4 mt-8
          focus:outline-none 
          text-[18px] font-bold 
          bg-sky-700 hover:bg-sky-600 text-white' 
          type='submit'
          value='नोंदणी करा'
          />
        </div>
        

      </form>
    </div>
  )
}

export default RegisterForm;