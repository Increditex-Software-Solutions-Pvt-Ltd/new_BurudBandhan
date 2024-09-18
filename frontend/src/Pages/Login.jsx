import React from 'react'
import Footer from '../Components/Footer'
import banner from "../Assets/banner.jpg";
import LoginForm from '../Components/Login/LoginForm';


const Login1 = () => {
  return (
    <div>
        <div className='relative h-[700px]'>
            <img style={{
                filter: 'invert(40%)',
            }} className='w-full h-[100%]' src={banner} alt="background image" />

            <LoginForm />

        </div>

    </div>
  )
}

export default Login1