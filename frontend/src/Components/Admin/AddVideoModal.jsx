import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createSuccessStory, getAllSuccessStories } from '../../Redux/SuccessStories/successStories.actions';
import { addSuccessVideo, getAllSuccessVideos } from '../../Redux/SuccessVideos/successVideos.actions';


const iniVideo = {
    videoURL:"",
    year:"",
    description:""
}

const AddVideoModal = ({isVisible, onClose}) => {
    const [newVideo, setNewVideo] = useState(iniVideo);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const {name, value } = e.target;
        setNewVideo({...newVideo, [name]:value});
    }

    const handleAdd = (e)=> {
        // add newVideo logic here
        e.preventDefault();
        dispatch(addSuccessVideo(newVideo));
        setNewVideo(iniVideo);
        onClose();
    }

    useEffect(()=>{
        dispatch(getAllSuccessVideos());
    }, [dispatch])

  
  return (
     <div 
        style={{
            display: isVisible? 'block':'none'
        }}
        className='w-[40%] text-left absolute z-10 top-16 left-0 right-0 m-auto bg-white p-6  shadow-2xl'>
            <div className='border-b pb-2 flex justify-between items-center'>
                <p className='text-xl font-bold text-sky-950'>Add Success Video</p>
                {/* close icon */}
                <MdClose onClick={onClose} className='text-2xl font-bold text-sky-950 cursor-pointer' />
            </div>

            {/* form */}
            <div className='my-6'>
                <form onSubmit={handleAdd} className='flex flex-col gap-4 rounded-2xl'>
                <div >
                        <label className='text-lg  font-semibold text-sky-950'>लग्नाचा व्हिडिओ</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="url" placeholder='Enter wedding url'
                        value={newVideo.videoURL}
                        name='videoURL'
                        onChange={handleChange}
                         />
                    </div>

                    
                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>लग्नाचे वर्ष</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter year"
                        value={newVideo.year}
                        name='year'
                        onChange={handleChange}
                         />
                    </div>
                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>वर्णन</label><br/>
                        <textarea
                        rows='3' cols='50' 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter description"
                        value={newVideo.description}
                        name='description'
                        onChange={handleChange}
                         />
                    </div>
                   
                    <div className='mt-4'>
                        <input 
                        className='w-fit py-2 px-10 rounded-full 
                        text-white bg-sky-500 cursor-pointer
                        font-bold
                        ' 
                        type='submit' value="Add" />
                    </div>

                </form>
            </div>
                
    </div>
  )
}

export default AddVideoModal;