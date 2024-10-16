import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addNewMember, getAllMembers } from '../../Redux/Members/members.actions';

const iniMember = {
    memberImage:"",
    fullName: "",
    position: ""
}

const AddMemberModal = ({isVisible, onClose}) => {
    const [newMember, setNewMember] = useState(iniMember);
    const dispatch = useDispatch();
    const {members, member, loading, error} = useSelector(store=>store.member);

    const handleChange = (e)=>{
        const {name, value } = e.target;
        setNewMember({...newMember, [name]:value});
    }

    const handleAdd = (e)=>{
        e.preventDefault();
        dispatch(addNewMember(newMember));
        setNewMember(iniMember);
        if(!loading)
            onClose();
    }

    useEffect(()=>{
        dispatch(getAllMembers());
    }, [dispatch]);

  
  return (
     <div 
        style={{
            display: isVisible? 'block':'none'
        }}
        className='w-[40%] text-left absolute z-10 top-16 left-0 right-0 m-auto bg-white p-6 shadow-2xl'>
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
                        <input className='w-fit py-2 px-8 rounded-full text-white bg-sky-500 cursor-pointer' type='submit' value="Add" />
                    </div>

                </form>
            </div>
                
    </div>
  )
}

export default AddMemberModal;