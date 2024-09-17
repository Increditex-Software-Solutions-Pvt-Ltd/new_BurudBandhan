import React from 'react'
import LoginForm from '../Components/Login/LoginForm'
import banner2 from "../Assets/banner2.jpg";
import Footer from '../Components/Footer';

const Login = () => {
  return (
    <div>
      {/* login section */}
      <div
      style={{
        backgroundImage: `url(${banner2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        filter: 'opacity(50%)'
      }}
      className=''
      >
        <div
        style={{
          backgroundColor: 'black',
          filter: 'opacity(75%)'
        }} 
        className='pb-[50px]'
        >
          <LoginForm />

        </div>
      </div>

      {/* footer */}
      <Footer />

    </div>
    
  )
}

export default Login