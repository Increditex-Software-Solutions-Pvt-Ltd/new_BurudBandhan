import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


const users = [
    {fullName:"Krishna khaire", email:"user@gmail.com", mobile:"9087654321", status:"approved", image: "", position:"Sachiv"},
    {fullName:"mahendra palase", email:"user@gmail.com", mobile:"9087654321", status:"approved", image: "", position:"Voice President"},
    {fullName:"raghunath savant", email:"user@gmail.com", mobile:"9087654321", status:"approved", image: "", position:"Sachiv"},
    {fullName:"kailas hadge", email:"user@gmail.com", mobile:"9087654321", status:"approved", image: "", position:"President"},
    {fullName:"Mahesh Pawar", email:"user@gmail.com", mobile:"9087654321", status:"approved", image: "", position:"Sachiv"},
]

const UsersTable = () => {
  return (
    <div className='m-6'>
        <table className='border text-left text-lg w-[100%]'>
            <thead>
                <tr className='border-b text-sky-950 bg-gray-100'>
                    <th className='p-4'>Action</th>
                    <th className='p-4'>Full Name</th>
                    <th className='p-4'>Email</th>
                    <th className='p-4'>Mobile Number</th>
                    <th className='p-4'>Status</th>
                </tr>
            </thead>
            <tbody>
                {/* all users will see here */}
                {
                    users.map((user, index)=>(
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
                            
                            <td className='p-4'>{user.fullName}</td>
                            <td className='p-4'>{user.email}</td>
                            <td className='p-4'>{user.mobile}</td>
                            <td className='p-4'>{user.status}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    
  )
}

export default UsersTable;