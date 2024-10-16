import React from 'react';
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/create-marriage-profile");
    }

  return (
    <div className='text-right px-12 my-[50px]'>
        <button 
        onClick={handleClick}
        className='p-4 rounded-xl 
        text-white text-lg
        font-semibold 
        bg-red-600 hover:bg-red-500
        '>Create Your Profile</button>
    </div>
  )
}

export default CreateProfile