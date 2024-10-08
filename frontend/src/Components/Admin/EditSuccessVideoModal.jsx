import React, { useState } from 'react';
import { MdClose } from "react-icons/md";


const EditSuccessVideoModal = ({video, selectedVideo, isVisible, onClose, handleUpdate}) => {
    const [updatedVideo, setUpdatedVideo] = useState(selectedVideo);

    const handleChange = (e)=>{
        const {name, value } = e.target;
        setUpdatedVideo({...updatedVideo, [name]:value});
    }

  
  return (
     <div 
        style={{
            display: (video.id == selectedVideo.id) && isVisible? 'block':'none'
        }}
        className='min-w-[400px] text-left absolute z-10 top-16 bg-white p-6  shadow-2xl'>
            <div className='border-b pb-2 flex justify-between items-center'>
                <p className='text-xl font-bold text-sky-950'>Update Success Video</p>
                {/* close icon */}
                <MdClose onClick={onClose} className='text-2xl font-bold text-sky-950 cursor-pointer' />
            </div>

            {/* form */}
            <div className='my-6'>
                <form onSubmit={handleUpdate} className='flex flex-col gap-4 rounded-2xl'>
                    <div >
                        <label className='text-lg  font-semibold text-sky-950'>लग्नाचा व्हिडिओ</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="url" placeholder='Enter wedding url'
                        value={updatedVideo.videoURL}
                        name='videoURL'
                        onChange={handleChange}
                         />
                    </div>

                    
                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>लग्नाचे वर्ष</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter year"
                        value={updatedVideo.year}
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
                        value={updatedVideo.description}
                        name='description'
                        onChange={handleChange}
                         />
                    </div>
                    
                    <div className='mt-4'>
                        <input className='w-fit py-2 px-8 rounded-full text-white bg-sky-500' type='submit' value="अपडेट करा" />
                    </div>

                </form>
            </div>
                
    </div>
  )
}

export default EditSuccessVideoModal;