import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const UpdateProfileModal = ({user}) => {
    const [updatedUser, setUpdatedUser] = useState(user);
    const dispatch = useDispatch();
    

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUpdatedUser({...updatedUser, [name]:value});
    }

    const handleUpdate = (e)=>{
        e.preventDefault();
        // add update logic here
    }
  return (
    <div className='
    w-[100%]
    top-[100%]
    mt-4
    absolute z-50 
    bg-white 
     rounded-xl shadow-xl
    p-4
    flex flex-col gap-4
    '>
        <div className='flex 
        justify-between 
        items-center
        border-b p-2
        font-semibold
        '>
            <p className=''>Update User details</p>
            <p>Close</p>
        </div>
        <form
        className='
        py-4
        text-left
        flex flex-col
        gap-4
        ' 
        onSubmit={handleUpdate}>
            <div>
                <input
                className='
                w-full 
                border
                focus:outline-none
                p-2
                '
                name='fullName'
                value={updatedUser.fullName}
                onChange={handleChange}
                placeholder='Enter your full name' />
            </div>
            <div>
                <input
                className='
                w-full 
                border
                focus:outline-none
                p-2
                '
                name='email'
                value={updatedUser.email}
                onChange={handleChange}
                placeholder='Enter your full name' />
            </div>
            <div>
                <select
                className='
                w-full 
                border
                focus:outline-none
                p-2
                '
                 defaultValue={updatedUser.gender}>
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>

            <div>
                <input 
                className='
                w-full 
                border
                focus:outline-none
                p-2
                mt-4
                font-semibold
                cursor-pointer
                bg-sky-700 hover:bg-sky-600  
                text-white
                rounded-xl
                '
                type='submit' value="Update" />
            </div>
        </form>
    </div>
  )
}

export default UpdateProfileModal