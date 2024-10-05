import React from 'react'
import Heading from './Heading';
import { MdOutlineSearch } from "react-icons/md";

const Users = () => {
  return (
    <div>
      <Heading innerText="Users" />

       {/* add filters */}
       <div className='flex justify-between items-center m-6'>
            {/* search here */}
            <div className='w-1/4 flex items-center gap-4 p-2 text-lg border rounded-xl'>
                <MdOutlineSearch className='text-gray-400 text-2xl' />
                <input className='focus:outline-none' placeholder='search here' />
            </div>

            {/* select your position */}
            <div className='w-1/4'>
                <select>
                    <option value="">All</option>
                    <option value="">President</option>
                    <option value="">Voice President</option>
                    <option value="">Sachiv</option>
                </select>
            </div>
            
        </div>
    </div>
  )
}

export default Users;