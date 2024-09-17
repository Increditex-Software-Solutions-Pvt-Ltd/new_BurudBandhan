import React from 'react'
import Footer from '../Components/Footer'
import banner2 from "../Assets/banner2.jpg";
import LoginForm from '../Components/Login/LoginForm';


const Login1 = () => {
  return (
    <div>
        <div className='relative'>
            <img style={{
                filter: 'invert(40%)',
            }} className='w-full ' src={banner2} alt="background image" />

            <LoginForm />

        </div>
        <Footer />

    </div>
  )
}

export default Login1