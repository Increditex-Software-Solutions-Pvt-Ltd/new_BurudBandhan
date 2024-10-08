import React from 'react';
import marriageImage from "../Assets/marriage.jpg";
import LoginForm from '../Components/Login/LoginForm';



const Login = () => {

  return (
    <div className='bg-gray-50 py-[30px]'>
      {/* register container */}
      <div className='w-[80%] bg-white  m-auto shadow-xl  flex flex-col lg:flex-row'>
        <div className='lg:w-1/2 pt-4 lg:pt-0'>
          {/* image */}
          <img className=' 
          w-[200px] h-[200px] rounded-full lg:rounded-none m-auto
          lg:h-[100vh] lg:w-full' src={marriageImage} alt="marriageImage" />
        </div>

        <div className='lg:w-1/2 p-[20px] py-[40px]'>
          <h1 className='font-bold text-lg lg:text-2xl text-sky-950'>एक पाऊल सुयोग्य जोडीदाराच्या स्थळाकडे</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login;