import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { updateSuccessStory } from '../../Redux/SuccessStories/successStories.actions';


const EditStoryModal = ({story, selectedStory, isVisible, onClose}) => {
    const [updatedStory, setUpdatedStory] = useState(selectedStory);
    const dispatch = useDispatch();


    const handleChange = (e)=>{
        const {name, value } = e.target;
        setUpdatedStory({...updatedStory, [name]:value});
    }

    const handleUpdate = (e)=>{
        // add update logic here
        e.preventDefault();
        if(updatedStory){
            dispatch(updateSuccessStory(updatedStory, updatedStory._id));
            // onClose();
        }
    }

    useEffect(()=>{
        if(selectedStory){
            setUpdatedStory(selectedStory);
        }
    }, [selectedStory]);

  
  return (
     <div 
        style={{
            display: (story._id == selectedStory._id) && isVisible? 'block':'none'
        }}
        className='min-w-[400px] text-left absolute z-10 top-16 bg-white p-6  shadow-2xl'>
            <div className='border-b pb-2 flex justify-between items-center'>
                <p className='text-xl font-bold text-sky-950'>Update Success Story</p>
                {/* close icon */}
                <MdClose onClick={onClose} className='text-2xl font-bold text-sky-950 cursor-pointer' />
            </div>

            {/* form */}
            <div className='my-6'>
                <form onSubmit={handleUpdate} className='flex flex-col gap-4 rounded-2xl'>
                    <div >
                        <label className='text-lg  font-semibold text-sky-950'>लग्नाचा फोटो</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder='Enter wedding photo url'
                        value={updatedStory.weddingPicture}
                        name='weddingPicture'
                        onChange={handleChange}
                         />
                    </div>

                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>वधुचे नाव</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter bride name"
                        value={updatedStory.brideName}
                        name='brideName'
                        onChange={handleChange}
                         />

                    </div>
                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>वराचे नाव</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter groom name"
                        value={updatedStory.groomName}
                        name='groomName'
                        onChange={handleChange}
                         />

                    </div>
                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>शहर</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter city"
                        value={updatedStory.city}
                        name='city'
                        onChange={handleChange}
                         />
                    </div>
                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>वर्णन</label><br/>
                        <textarea
                        rows='3' cols='50' 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter description"
                        value={updatedStory.description}
                        name='description'
                        onChange={handleChange}
                         />
                    </div>
                    
                    <div className='mt-4'>
                        <input className='w-fit py-2 px-8 rounded-full text-white bg-sky-500 cursor-pointer' type='submit' value="अपडेट करा" />
                    </div>

                </form>
            </div>
                
    </div>
  )
}

export default EditStoryModal;