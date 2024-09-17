import React, { useState } from 'react';
import marriageImage from "../../Assets/marriage.jpeg";

const LoginForm = () => {
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login logic, like making an API call
    console.log('Mobile:', mobile);
    console.log('Password:', password);
  };

  return (
    <div 
    
     className="w-[100%] absolute top-10 py-[80px] flex justify-center">
      
      <div >
        <img className='h-[100%] rounded-l' src={marriageImage} alt='marriage'/>
      </div>

      <form onSubmit={handleSubmit} 
        style={{
          backgroundColor: 'white',
          filter:"opacity(100%)"
        }}
       className="w-[40%] bg-white p-10 shadow-lg  text-left rounded-r">

        <h2 className="text-xl font-bold mb-4 text-center">लाॅगिन करण्यासाठी तुमचा मोबाईल नंबर आणि पासवर्ड टाका !</h2>

        <div className="mb-6">
          <label htmlFor="mobile" className="block text-gray-700">मोबाईल नं.</label>
          <input
            type="number"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder='मोबाईल नंबर'
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">पासवर्ड</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='पासवर्ड'
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className='mb-8 flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <input type='checkbox'/>
            <label htmlFor="password" className="block text-gray-700">पासवर्ड लक्षात ठेवा</label>
          </div>

          <div className='flex items-center gap-1'>
            <a href='' className="text-red-700 block">पासवर्ड विसरलात का ?</a> 
          </div>
        </div>

        

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          लाॅगिन करा
        </button>

        <div >
          <p className='text-center mt-6'>तुम्ही नवीन सदस्य आहात का ? <a className='text-red-500' href='/register'>नोंदणी करा</a> </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm