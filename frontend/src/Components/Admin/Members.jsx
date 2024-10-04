import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineSearch } from "react-icons/md";

const members = [
    {name:"Krishna khaire", image: "", position:"Sachiv"},
    {name:"mahendra palase", image: "", position:"Voice President"},
    {name:"raghunath savant", image: "", position:"Sachiv"},
    {name:"kailas hadge", image: "", position:"President"},
    {name:"Mahesh Pawar", image: "", position:"Sachiv"},
]
const Members = () => {
  return (
    <div>
        <h1>Members</h1>

        {/* add filters */}
        <div className='flex justify-between items-center m-6'>
            {/* search here */}
            <div className='w-1/4 flex items-center gap-4 p-2 text-lg border rounded-xl'>
                <MdOutlineSearch className='text-gray-400 text-2xl' />
                <input className='focus:outline-none' placeholder='search here' />
            </div>

            {/* select your position */}
            <div className='w-1/4'>
                <select>
                    <option value="">All</option>
                    <option value="">President</option>
                    <option value="">Voice President</option>
                    <option value="">Sachiv</option>
                </select>
            </div>
            
        </div>

        {/* all members are here table */}
        <table>
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Member Photo</th>
                    <th>Member Name</th>
                    <th>Member Position</th>
                </tr>
            </thead>
            <tbody>
                {/* all members will see here */}
                {
                    members.map((member, index)=>(
                        <tr key={index}>
                            <td>
                                <div>
                                    <FaRegEdit />
                                    <p>Edit</p>
                                </div>
                                <div>
                                    <MdDeleteOutline />
                                    <p>Delete</p>
                                </div>
                            </td>
                            <td>
                                <img src={member.image} alt="Member photo" />
                            </td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Members