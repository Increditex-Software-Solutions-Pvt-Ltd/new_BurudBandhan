import React from 'react';
import { MdAdd } from "react-icons/md";

const AboutUs = () => {
  return (
    <div>
        {/* top section */}
        <div className='p-6 flex justify-between items-center'>
            <h1 className='text-left text-3xl font-bold'>About us</h1>
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
                <p>Add Member</p>
            </div>
        </div>

        {/* edit about us page */}
        <div>
            {/* edit button */}
            <div>
                <div>
                    {/* edit icon */}
                    <p>Edit</p>
                </div>
            </div>

            <div>
                <div>
                    <p>About website</p>
                    <p>
                        {/* about us info */}
                    </p>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;