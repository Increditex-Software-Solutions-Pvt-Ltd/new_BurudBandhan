import React, { useState } from 'react';
import marriageImage from "../../Assets/marriage.jpeg";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login logic, like making an API call
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div 
    style={{
      
      filter: 'opacity(100%)'
    }}
     className="  py-[80px] flex justify-center">
      
      <div >
        <img src={marriageImage} alt='marriage'/>
      </div>
      <form onSubmit={handleSubmit} className="w-[30%] bg-white p-6 shadow-lg  text-left">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <input type='checkbox'/>
            <label htmlFor="password" className="block text-gray-700">Remember Password</label>
          </div>

          <div className='flex items-center gap-1'>
            <input type='checkbox'/>
            <label htmlFor="password" className="block text-gray-700">Forget Password</label>
          </div>
        </div>

        

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm