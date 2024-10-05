import React, { useState } from 'react'
import Heading from './Heading';
import { MdOutlineSearch } from "react-icons/md";
import UsersTable from './UsersTable';

const Users = () => {
  const [page, setPage] = useState(1);

    const handleNextPage = ()=>{
        setPage(prev=>prev+1);
    };

    const handlePrevPage = ()=>{
        setPage(prev=>prev-1);
    };

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

        {/* users table */}
        <UsersTable />

        {/* pagination */}
        <div className='m-6 p-4 flex justify-end items-center gap-2 '>
            <button className='border bg-gray-200 hover:bg-gray-300 rounded-xl py-2 px-4' onClick={handlePrevPage}>Prev</button>
            <button className='font-bold py-2 px-4'>{page}</button>
            <button className='border bg-gray-200 hover:bg-gray-300 rounded-xl py-2 px-4' onClick={handleNextPage}>Next</button>
        </div>
    </div>
  )
}

export default Users;