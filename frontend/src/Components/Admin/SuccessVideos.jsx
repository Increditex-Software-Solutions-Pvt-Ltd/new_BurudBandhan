import React, { useState } from 'react'
import HeadingAndButtonFlex from './HeadingAndButtonFlex';
import { MdOutlineSearch } from "react-icons/md";
import SuccessVideoTable from './SuccessVideoTable';


const SuccessVideos = () => {
  const [page, setPage] = useState(1);

    const handleNextPage = ()=>{
        setPage(prev=>prev+1);
    };

    const handlePrevPage = ()=>{
        setPage(prev=>prev-1);
    };
  return (
    <div>
      {/* top section */}
      <HeadingAndButtonFlex heading="Success Videos" buttonInnerText="Add New Video" />
      
      {/* add filters */}
      <div className='flex justify-between items-center m-6'>
            {/* search here */}
            <div className='w-1/4 flex items-center gap-4 p-2 text-lg border rounded-xl'>
                <MdOutlineSearch className='text-gray-400 text-2xl' />
                <input className='focus:outline-none' placeholder='search here' />
            </div>

            
            
        </div>

        {/* all members are here table */}
        <SuccessVideoTable />

        {/* pagination */}
        <div className='m-6 p-4 flex justify-end items-center gap-2 '>
            <button className='border bg-gray-200 hover:bg-gray-300 rounded-xl py-2 px-4' onClick={handlePrevPage}>Prev</button>
            <button className='font-bold py-2 px-4'>{page}</button>
            <button className='border bg-gray-200 hover:bg-gray-300 rounded-xl py-2 px-4' onClick={handleNextPage}>Next</button>
        </div>
    </div>
  )
}

export default SuccessVideos;