import React from 'react';
import marriageHands from "../../Assets/marriagehands.jpg";

const TopSection = () => {
  return (
    <div className='relative '>
        <img className='w-full h-[200px]  object-cover object-center' src={marriageHands} alt="hands image" />

        <div className=' flex items-center justify-center opacity-[0.75] h-[100%] absolute left-0 right-0 top-0 m-auto bg-black'>
            <p className='text-white text-4xl '>Find Your dream groom and bride here</p>
        </div>
    </div>
  )
}

export default TopSection