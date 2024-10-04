import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


const members = [
    {name:"Krishna khaire", image: "", position:"Sachiv"},
    {name:"mahendra palase", image: "", position:"Voice President"},
    {name:"raghunath savant", image: "", position:"Sachiv"},
    {name:"kailas hadge", image: "", position:"President"},
    {name:"Mahesh Pawar", image: "", position:"Sachiv"},
]

const MembersTable = () => {
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
                            <td className='p-4 flex items-center gap-4'>
                                <div className='w-fit flex items-center gap-2
                                 text-white bg-sky-400 hover:bg-sky-500 p-2 rounded-md
                                    cursor-pointer' >
                                    <FaRegEdit />
                                    <p>Edit</p>
                                </div>
                                <div
                                className=' w-fit flex items-center gap-2
                                text-white bg-red-400 hover:bg-red-500 p-2 rounded-md
                                cursor-pointer'
                                >
                                    <MdDeleteOutline />
                                    <p>Delete</p>
                                </div>
                            </td>
                            <td className='p-4'>
                                <img className='w-[150px] h-[150px] object-cover border' src={member.image} alt="Member photo" />
                            </td>
                            <td className='p-4'>{member.name}</td>
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