import React from 'react';
import { MdMenu, MdSearch } from "react-icons/md";
import { getAllMarriageProfiles } from '../../Redux/Profiles/profiles.actions';
import { useDispatch } from 'react-redux';

const SearchNavbar = ({handleGender ,handleSearch}) => {
    const dispatch = useDispatch();
  return (
    <div className='
    flex 
    items-center 
    py-4 px-[40px]
    border-b
   
    '>
        <div className='w-1/3 text-3xl text-sky-800  lg:hidden'>
            <MdMenu className='cursor-pointer' />
        </div>
        <div className=' 
        w-[66%] lg:w-full flex flex-col md:flex-row gap-[20px] 
        items-center justify-between
        lg:px-[100px]
        xl:px-[250px]
        '>
            <div className='
            xl:w-[40%]
            px-4 py-2
            flex 
            items-center 
            gap-2 
            border 
            rounded-full
            text-[18px]
            '>
                <MdSearch />
                <input onChange={handleSearch} className='w-full focus:outline-none px-2' type='text' placeholder='Search by name, city, profession' />
            </div>
            <div className='flex items-center gap-6 text-white font-semibold'>
                <button onClick={()=>dispatch(getAllMarriageProfiles())} className='px-6 py-2 rounded-full bg-red-400 hover:bg-red-500'>All</button>
                <button onClick={()=>handleGender('female')} className='px-6 py-2 rounded-full bg-red-400 hover:bg-red-500'>Bride</button>
                <button onClick={()=>handleGender('male')} className='px-6 py-2 rounded-full bg-red-400 hover:bg-red-500'>Groom</button>
            </div>
        </div>
        
    </div>
  )
}

export default SearchNavbar