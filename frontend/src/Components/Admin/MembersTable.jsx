import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditMemberModal from './EditMemberModal';
import { deleteMember, getAllMembers } from '../../Redux/Members/members.actions';


const membersData = [
    {id: 1, name:"Krishna khaire", image: "", position:"Sachiv"},
    {id: 2, name:"mahendra palase", image: "", position:"Voice President"},
    {id: 3, name:"raghunath savant", image: "", position:"Sachiv"},
    {id: 4, name:"kailas hadge", image: "", position:"President"},
    {id: 5, name:"Mahesh Pawar", image: "", position:"Sachiv"},
]

const MembersTable = () => {
    const [isVisible, setIsVisible] = useState (false);
    const [selectedMember, setSelectedMember] = useState(null);
    const dispatch = useDispatch();
    const { members, loading, error} = useSelector(store=>store.member);

    const onOpen = (member)=>{
        setSelectedMember(member);
        setIsVisible(true);
    }
    const onClose = ()=>{
        setIsVisible(false);
        setSelectedMember(null);

    }


    const handleDelete = (id)=>{
        // add delete logic here
        dispatch(deleteMember(id));
    }

    useEffect(()=>{
        dispatch(getAllMembers());
    }, [dispatch]);

  return (
    <div className='m-6'>
        <table className='border text-left text-lg w-[100%]'>
            <thead>
                <tr className='border-b text-sky-950 bg-gray-100'>
                    <th className='p-4'>Action</th>
                    <th className='p-4'>Member Photo</th>
                    <th className='p-4'>Member Name</th>
                    <th className='p-4'>Member Position</th>
                </tr>
            </thead>
            <tbody>
                {/* all members will see here */}
                {
                    members.map((member, index)=>(
                        <tr className='border-b' key={index}>
                            <td className='p-4 flex items-center gap-4 relative'>
                                <div onClick={()=>onOpen(member)} className='w-fit flex items-center gap-2
                                 text-white bg-sky-400 hover:bg-sky-500 p-2 rounded-md
                                    cursor-pointer' >
                                    <FaRegEdit />
                                    <p>Edit</p>
                                </div>
                                <div
                                onClick={()=>handleDelete(member._id)}
                                className=' w-fit flex items-center gap-2
                                text-white bg-red-400 hover:bg-red-500 p-2 rounded-md
                                cursor-pointer'
                                >
                                    <MdDeleteOutline />
                                    <p>Delete</p>
                                </div>

                                {/* edit modal */}
                                {   selectedMember && (
                                    <EditMemberModal
                                    member = {member}  
                                    selectedMember={selectedMember} 
                                    isVisible={isVisible} 
                                    onClose={onClose}  
                                    />)
                                }
                            </td>
                            <td className='p-4'>
                                <img className='w-[150px] h-[150px] object-cover border' src={member.memberImage} alt="Member photo" />
                            </td>
                            <td className='p-4'>{member.fullName}</td>
                            <td className='p-4'>{member.position}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    
  )
}

export default MembersTable