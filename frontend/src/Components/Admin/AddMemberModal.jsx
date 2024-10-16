import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';

const iniMember = {
    memberImage:"",
    fullName: "",
    position: ""
}

const AddMemberModal = ({isVisible, onClose}) => {
    const [newMember, setNewMember] = useState(iniMember);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const {name, value } = e.target;
        setNewMember({...newMember, [name]:value});
    }

    const handleAdd = (e)=>{
        e.preventDefault();
        
    }

  
  return (
     <div 
        style={{
            display: isVisible? 'block':'none'
        }}
        className='min-w-[400px] text-left absolute z-10 top-16 bg-white p-6  shadow-2xl'>
            <div className='border-b pb-2 flex justify-between items-center'>
                <p className='text-xl font-bold text-sky-950'>Add New Member</p>
                {/* close icon */}
                <MdClose onClick={onClose} className='text-2xl font-bold text-sky-950 cursor-pointer' />
            </div>

            {/* form */}
            <div className='my-6'>
                <form onSubmit={handleAdd} className='flex flex-col gap-4 rounded-2xl'>
                    <div >
                        <label className='text-lg  font-semibold text-sky-950'>सदस्याचा फोटो</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder='Enter member photo url'
                        value={newMember.memberImage}
                        name='memberImage'
                        onChange={handleChange}
                         />
                    </div>

                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>सदस्याचे नाव</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter name"
                        value={newMember.fullName}
                        name='fullName'
                        onChange={handleChange}
                         />

                    </div>

                    <div>
                        <label className='text-lg  font-semibold text-sky-950'> सदस्यांची स्थिती</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter Position"
                        value={newMember.position}
                        name='position'
                        onChange={handleChange}
                         />
                    </div>

                    <div className='mt-4'>
                        <input className='w-fit py-2 px-8 rounded-full text-white bg-sky-500' type='submit' value="Add" />
                    </div>

                </form>
            </div>
                
    </div>
  )
}

export default AddMemberModal;