import React, { useState } from 'react';
import { MdClose } from "react-icons/md";


const EditMemberModal = ({member, selectedMember, isVisible, onClose, handleUpdate}) => {
    const [updatedMember, setUpdatedMember] = useState(selectedMember);

    const handleChange = (e)=>{
        const {name, value } = e.target;
        setUpdatedMember({...updatedMember, [name]:value});
    }



  return (
     <div 
        style={{
            display: (member.id == selectedMember.id) && isVisible? 'block':'none'
        }}
        className='min-w-[400px] text-left absolute z-10 top-16 bg-white p-6  shadow-2xl'>
            <div className='border-b pb-2 flex justify-between items-center'>
                <p className='text-xl font-bold text-sky-950'>Update Member Information</p>
                {/* close icon */}
                <MdClose onClick={onClose} className='text-2xl font-bold text-sky-950 cursor-pointer' />
            </div>

            {/* form */}
            <div className='my-6'>
                <form onSubmit={handleUpdate} className='flex flex-col gap-4 rounded-2xl'>
                    <div >
                        <label className='text-lg  font-semibold text-sky-950'>सदस्याचा फोटो</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder='Enter member photo url'
                        value={updatedMember.image}
                        name='image'
                        onChange={handleChange}
                         />
                    </div>

                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>सदस्याचे नाव</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter name"
                        value={updatedMember.name}
                        name='name'
                        onChange={handleChange}
                         />

                    </div>

                    <div>
                        <label className='text-lg  font-semibold text-sky-950'> सदस्यांची स्थिती</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter Position"
                        value={updatedMember.position}
                        name='position'
                        onChange={handleChange}
                         />
                    </div>

                    <div className='mt-4'>
                        <input className='w-fit py-2 px-8 rounded-full text-white bg-sky-500' type='submit' value="अपडेट करा" />
                    </div>

                </form>
            </div>
                
    </div>
  )
}

export default EditMemberModal;