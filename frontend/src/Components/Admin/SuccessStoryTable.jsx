import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditStoryModal from './EditStoryModal';
import { deleteSuccessStory, getAllSuccessStories, updateSuccessStory } from '../../Redux/SuccessStories/successStories.actions';


const SuccessStoryTable = () => {
    const [isVisible, setIsVisible] = useState (false);
    const [selectedStory, setSelectedStory] = useState(null);
    const dispatch = useDispatch();
    const {stories, loading, error, message} = useSelector(store=> store.successStories);

    const onOpen = (story)=>{
        setSelectedStory(story);
        setIsVisible(true);
    }
    const onClose = ()=>{
        setIsVisible(false);
        setSelectedStory(null);

    }

    

    const handleDelete = (id)=>{
        // add delete logic here
        dispatch(deleteSuccessStory(id));
        
    }

    useEffect(()=>{
        dispatch(getAllSuccessStories());
    }, [dispatch]);

  return (
    <div className='m-6'>
        <table className='border text-left text-lg w-[100%]'>
            <thead>
                <tr className='border-b text-sky-950 bg-gray-100'>
                    <th className='p-4'>Action</th>
                    <th className='p-4'>Wedding Photo</th>
                    <th className='p-4 border'>Bride Name</th>
                    <th className='p-4'>Groom Name</th>
                    <th className='p-4'>City</th>
                    <th className='p-4 w-[40%]'>Wedding Information</th>
                </tr>
            </thead>
            <tbody>
                {/* all members will see here */}
                {
                    stories.map((story, index)=>(
                        <tr className='border-b' key={index}>
                            {/* action */}
                            <td className='p-4 flex items-center gap-4 relative'>
                                <div
                                onClick={()=>onOpen(story)}
                                className='w-fit flex items-center gap-2
                                 text-white bg-sky-400 hover:bg-sky-500 p-2 rounded-md
                                    cursor-pointer' >
                                    <FaRegEdit />
                                    <p>Edit</p>
                                </div>
                                <div
                                onClick={()=>handleDelete(story._id)}
                                className=' w-fit flex items-center gap-2
                                text-white bg-red-400 hover:bg-red-500 p-2 rounded-md
                                cursor-pointer'
                                >
                                    <MdDeleteOutline />
                                    <p>Delete</p>
                                </div>

                                {/* edit modal */}
                                {   selectedStory && (
                                    <EditStoryModal
                                    story = {story}  
                                    selectedStory={selectedStory} 
                                    isVisible={isVisible} 
                                    onClose={onClose} 
                                     
                                    />)
                                }

                            </td>
                            {/* wedding photo */}
                            <td className='p-4'>
                                <img className='w-[150px] h-[150px] object-cover border' src={story.weddingPicture} alt="Wedding photo" />
                            </td>
                            {/* bride name */}
                            <td className='p-4'>{story.brideName}</td>
                            {/* grrom name */}
                            <td className='p-4'>{story.groomName}</td>
                            {/* city */}
                            <td className='p-4'>{story.city}</td>
                            {/* wedding information */}
                            <td className='p-4'>{story.description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default SuccessStoryTable;