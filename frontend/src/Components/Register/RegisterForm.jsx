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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
          className='border' 
          placeholder='पूर्ण नाव'
          type='text'
          name='fullName'
          value={user.fullName}
          onChange={handleChange} 
          />
        </div>
        
        <div>
          <input 
          className='border' 
          placeholder='ईमेल'
          type="email" 
          name='email'
          value={user.email}
          onChange={handleChange} 
          />
        </div>

        <div>
          <select 
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
          className='border' 
          placeholder='पासवर्ड'
          type='password' 
          name='password'
          value={user.password}
          onChange={handleChange} 
          />
        </div>
        
        <div>
          <input 
          type='submit'
          value='नोंदणी करा'
          />
        </div>
        

      </form>
    </div>
  )
}

export default RegisterForm;