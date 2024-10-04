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
  )
}

export default MembersTable