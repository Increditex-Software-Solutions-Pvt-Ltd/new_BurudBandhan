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
    <div className='absolute z-50 bg-white border'>
        <form onSubmit={handleUpdate}>
            <div>
                <input
                name='fullName'
                value={user.fullName}
                onChange={handleChange}
                placeholder='Enter your full name' />
            </div>
            <div>
                <input
                name='email'
                value={user.email}
                onChange={handleChange}
                placeholder='Enter your full name' />
            </div>
            <div>
                <select defaultValue={user.gender}>
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>

            <div>
                <input type='submit' value="Update" />
            </div>
        </form>
    </div>
  )
}

export default UpdateProfileModal