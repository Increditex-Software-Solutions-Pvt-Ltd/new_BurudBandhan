import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { MdClose } from "react-icons/md";

const iniPassword = {
    oldPassword:"",
    newPassword:""
}

const ChangePasswordModal = ({onChangePwdClose}) => {
    const [password, setPassword] = useState(iniPassword);
    const dispatch = useDispatch();
    

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setPassword({...password, [name]:value});
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
        text-[18px]
        '>
            <p className=''>Change Password</p>
            <MdClose onClick={onChangePwdClose} className='cursor-pointer' />
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
                name='oldPassword'
                value={password.oldPassword}
                onChange={handleChange}
                placeholder='Old Password' />
            </div>
            <div>
                <input
                className='
                w-full 
                border
                focus:outline-none
                p-2
                '
                name='newPassword'
                value={password.newPassword}
                onChange={handleChange}
                placeholder='New Password' />
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

export default ChangePasswordModal;