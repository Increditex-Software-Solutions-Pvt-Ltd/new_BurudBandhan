import React from 'react';
import marriageImage from "../Assets/marriage.jpg";
import RegisterForm from '../Components/Register/RegisterForm';


const Register = () => {
  return (
    <div className='bg-gray-50 py-[30px]'>
      {/* register container */}
      <div className='w-[80%] bg-white  m-auto shadow-xl min-h-[100vh] flex'>
        <div className='w-1/2'>
          {/* image */}
          <img className='h-[100%] w-full' src={marriageImage} alt="marriageImage" />
        </div>
        <div className='w-1/2 p-[20px] py-[40px]'>
          <h1 className='font-bold text-2xl text-sky-950'>एक पाऊल सुयोग्य जोडीदाराच्या स्थळाकडे</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register;