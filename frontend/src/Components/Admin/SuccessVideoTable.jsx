import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditSuccessVideoModal from './EditSuccessVideoModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSuccessVideo, getAllSuccessVideos } from '../../Redux/SuccessVideos/successVideos.actions';


const SuccessVideoTable = () => {
    const [isVisible, setIsVisible] = useState (false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const dispatch = useDispatch();
    const {videos, loading, error, message} = useSelector(store=>store.successVideos);

    const onOpen = (video)=>{
        setSelectedVideo(video);
        setIsVisible(true);
    }
    const onClose = ()=>{
        setIsVisible(false);
        setSelectedVideo(null);

    }


    const handleDelete = (id)=>{
        // add delete logic here
        dispatch(deleteSuccessVideo(id));
    }

    useEffect(()=>{
        dispatch(getAllSuccessVideos());
    }, [dispatch]);

  return (
    <div className='m-6'>
        <table className='border text-left text-lg w-[100%]'>
            <thead>
                <tr className='border-b text-sky-950 bg-gray-100'>
                    <th className='p-4'>Action</th>
                    <th className='p-4'>Youtube URL</th>
                    <th className='p-4'>Year</th>
                    <th className='p-4 w-[40%]'>Description</th>
                </tr>
            </thead>
            <tbody>
                {/* all members will see here */}
                {
                    videos.map((video, index)=>(
                        <tr className='border-b' key={index}>
                            {/* action */}
                            <td className='p-4 flex items-center gap-4 relative'>
                                <div 
                                onClick={()=>onOpen(video)}
                                className='w-fit flex items-center gap-2
                                 text-white bg-sky-400 hover:bg-sky-500 p-2 rounded-md
                                    cursor-pointer' >
                                    <FaRegEdit />
                                    <p>Edit</p>
                                </div>
                                <div
                                onClick={()=>handleDelete(video._id)}
                                className=' w-fit flex items-center gap-2
                                text-white bg-red-400 hover:bg-red-500 p-2 rounded-md
                                cursor-pointer'
                                >
                                    <MdDeleteOutline />
                                    <p>Delete</p>
                                </div>


                                {/* edit video modal */}
                                {   selectedVideo && (
                                    <EditSuccessVideoModal
                                    video = {video}  
                                    selectedVideo={selectedVideo} 
                                    isVisible={isVisible} 
                                    onClose={onClose} 
                                    />)
                                }
                            </td>
                            
                            {/* Youtube url */}
                            <td className='p-4'>{video.videoURL}</td>
                            {/* year */}
                            <td className='p-4'>{video.year}</td>
                          
                            {/* Description*/}
                            <td className='p-4'>{video.description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default SuccessVideoTable;