import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createSuccessStory, getAllSuccessStories } from '../../Redux/SuccessStories/successStories.actions';


const iniStory = {
    weddingPicture:"",
    brideName:"",
    groomName:"",
    city:"",
    description:"",

}

const AddStoryModal = ({isVisible, onClose}) => {
    const [newStory, setNewStory] = useState(iniStory);
    const dispatch = useDispatch();
    // const {story, loading, error, message} = useSelector(store=>store.successStory);

    const handleChange = (e)=>{
        const {name, value } = e.target;
        setNewStory({...newStory, [name]:value});
    }

    const handleAdd = (e)=> {
        // add newStory logic here
        e.preventDefault();
        dispatch(createSuccessStory(newStory));
        setNewStory(iniStory);
        onClose();
    }

    useEffect(()=>{
        dispatch(getAllSuccessStories());
    }, [dispatch])

  
  return (
     <div 
        style={{
            display: isVisible? 'block':'none'
        }}
        className='w-[40%] text-left absolute z-10 top-16 left-0 right-0 m-auto bg-white p-6  shadow-2xl'>
            <div className='border-b pb-2 flex justify-between items-center'>
                <p className='text-xl font-bold text-sky-950'>Add Success Story</p>
                {/* close icon */}
                <MdClose onClick={onClose} className='text-2xl font-bold text-sky-950 cursor-pointer' />
            </div>

            {/* form */}
            <div className='my-6'>
                <form onSubmit={handleAdd} className='flex flex-col gap-4 rounded-2xl'>
                    <div >
                        <label className='text-lg  font-semibold text-sky-950'>लग्नाचा फोटो</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder='Enter wedding photo url'
                        value={newStory.weddingPicture}
                        name='weddingPicture'
                        onChange={handleChange}
                         />
                    </div>

                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>वधुचे नाव</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter bride name"
                        value={newStory.brideName}
                        name='brideName'
                        onChange={handleChange}
                         />

                    </div>
                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>वराचे नाव</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter groom name"
                        value={newStory.groomName}
                        name='groomName'
                        onChange={handleChange}
                         />

                    </div>
                    <div>
                        <label className='text-lg  font-semibold text-sky-950'>शहर</label><br/>
                        <input 
                        className='focus:outline-none w-full border p-2 mt-2' 
                        type="text" placeholder="Enter city"
                        value={newStory.city}
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
                        value={newStory.description}
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

export default AddStoryModal;