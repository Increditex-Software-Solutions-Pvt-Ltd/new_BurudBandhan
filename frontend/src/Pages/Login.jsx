import React from 'react'
import LoginForm from '../Components/Login/LoginForm'
import banner2 from "../Assets/banner2.jpg";

const Login = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${banner2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover',
      backgroundPosition: 'center',
      filter: 'opacity(50%)'
    }}
    className='h-[100vh]'
    >
      <div
      style={{
        backgroundColor: 'black',
        filter: 'opacity(75%)'
      }} 
      className='h-[100vh]'
      >
        <LoginForm />

      </div>
    </div>
  )
}

export default Login