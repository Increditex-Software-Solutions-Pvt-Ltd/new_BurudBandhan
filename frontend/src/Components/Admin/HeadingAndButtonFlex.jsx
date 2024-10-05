import React from 'react';
import { MdAdd } from "react-icons/md";


const HeadingAndButtonFlex = ({heading, buttonInnerText}) => {
  return (
    <div className='p-6 flex justify-between items-center'>
            <h1 className='text-left text-3xl font-bold text-sky-950'>{heading}</h1>
            <div className='
            flex gap-2
            justify-center 
            items-center 
            border rounded-full
            bg-red-700 hover:bg-red-600 text-white
            py-4 px-6
            cursor-pointer
            text-[18px]
            '>
                {/* add icon */}
                <MdAdd />
                <p>{buttonInnerText}</p>
            </div>
    </div>
  )
}

export default HeadingAndButtonFlex;