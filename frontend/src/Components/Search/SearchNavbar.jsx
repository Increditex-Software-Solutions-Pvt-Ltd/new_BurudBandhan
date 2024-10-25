import React from 'react';
import { MdMenu, MdSearch } from "react-icons/md";

const SearchNavbar = () => {
  return (
    <div className='
    flex 
    items-center 
    py-4 px-[40px]
    border 
    mb-[500px]
    '>
        <div className='w-1/3 text-3xl text-sky-800'>
            <MdMenu />
        </div>
        <div className='w-[66%] flex items-center justify-between'>
            <div className='
            w-[40%]
            px-4 py-2
            flex 
            items-center 
            gap-2 
            border 
            rounded-full
            text-[18px]
            '>
                <MdSearch />
                <input className=' w-full focus:outline-none px-2' type='text' placeholder='Search by name' />
            </div>
            <div className='flex items-center gap-6 text-white font-semibold'>
                <button className='px-6 py-2 rounded-full bg-red-400 hover:bg-red-500'>All</button>
                <button className='px-6 py-2 rounded-full bg-red-400 hover:bg-red-500'>Bride</button>
                <button className='px-6 py-2 rounded-full bg-red-400 hover:bg-red-500'>Groom</button>
            </div>
        </div>
        
    </div>
  )
}

export default SearchNavbar