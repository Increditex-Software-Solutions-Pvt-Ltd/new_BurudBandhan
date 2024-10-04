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
        <div>
            <div>
                <MdOutlineSearch />
                <input placeholder='search here' />
            </div>

            <div>
                <select>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
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