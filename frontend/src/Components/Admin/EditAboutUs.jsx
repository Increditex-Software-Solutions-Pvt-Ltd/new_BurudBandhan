import React, { useEffect, useState } from 'react';
import HeadingAndparagraph from './HeadingAndparagraph';
import { FaRegEdit } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getAboutUsContent, updateAboutUsContent } from '../../Redux/AboutUs/aboutus.actions';


const iniContent = {
    aboutus:"",
    presidentSpeech:"",
    sachivSpeech:""
}

const EditAboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [updateContent, setUpdateContent] = useState(iniContent);
    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector(store=>store.user);
    const { content, loading, error, message  } = useSelector(store=>store.aboutus);

    const onOpen = ()=>{
        setIsVisible(true);
    }
    const onClose = ()=>{
        setIsVisible(false);
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUpdateContent({...updateContent, [name]:value});
    }

    const handleUpdate = (e)=>{
        // add update logic here
        e.preventDefault();
        dispatch(updateAboutUsContent(updateContent));
        setUpdateContent(iniContent);
       
    }
    

     // Fetch "About Us" content when component mounts
     useEffect(() => {
        dispatch(getAboutUsContent());
    }, [dispatch]);

    // Set content to state when it's fetched from Redux store
    useEffect(() => {
        if (content) {
            setUpdateContent(content);
        }
    }, [content]);
   
  return (
    <div className='flex '>
        {/* edit button */}
        <div className='p-4 w-[10%] relative'>
            <div
            onClick = {onOpen} 
            className=' w-fit flex items-center gap-2
            text-white bg-sky-400 hover:bg-sky-500 p-2 rounded-md
            cursor-pointer
            '>
                <FaRegEdit />
                <p>Edit</p>
            </div>

            {/* edit modal */}
            <div 
            style={{
                display: isVisible? 'block':'none'
            }}
            className='min-w-[400px] text-left absolute top-16 bg-white p-6  shadow-2xl'>
                <div className='border-b pb-2 flex justify-between items-center'>
                    <p className='text-xl font-bold text-sky-950'>Edit Content</p>
                    {/* close icon */}
                    <MdClose onClick={onClose} className='text-2xl font-bold text-sky-950 cursor-pointer' />
                </div>

                {/* form */}
                <div className='my-6'>
                    <form onSubmit={handleUpdate} className='flex flex-col gap-4 rounded-2xl'>
                        <div >
                            <label className='text-lg  font-semibold text-sky-950'>आमच्याबद्दल माहिती</label><br/>
                            {/* <input type="text" placeholder='आमच्याबद्दल माहिती लिहा' /> */}
                            <textarea 
                            name='aboutus' 
                            value={updateContent.aboutus}
                            onChange={handleChange}
                            className='border p-4 mt-2' 
                            placeholder='आमच्याबद्दल माहिती लिहा' rows='2' cols='50' />
                        </div>

                        <div>
                            <label className='text-lg  font-semibold text-sky-950'>अध्यक्षांचे मनोगत</label><br/>
                            {/* <input type="text" placeholder="अध्यक्षांचे मनोगत लिहा" /> */}
                            <textarea
                             name='presidentSpeech' 
                             value={updateContent.presidentSpeech}
                             onChange={handleChange} 
                            className='border p-4 mt-2' 
                            placeholder='अध्यक्षांचे मनोगत लिहा' rows='2' cols='50' />

                        </div>

                        <div>
                            <label className='text-lg  font-semibold text-sky-950'> सचिवांचे मनोगत</label><br/>
                            {/* <input type="text" placeholder=" सचिवांचे मनोगत लिहा" /> */}
                            <textarea 
                             name='sachivSpeech' 
                             value={updateContent.sachivSpeech}
                             onChange={handleChange}
                            className='border p-4 mt-2' 
                            placeholder='सचिवांचे मनोगत लिहा' 
                            rows='2' cols='50' />
                        </div>

                        <div className='mt-4'>
                            <input className='w-fit py-2 px-8 rounded-full text-white bg-sky-500' type='submit' value="अपडेट करा" />
                        </div>

                    </form>
                </div>
                
            </div>
        </div>
        
        {/* you can see all content here */}
        <div className='w-[80%] p-4 flex flex-col gap-4'>
            <div>
                <HeadingAndparagraph title="About Website" content={content?.aboutus}  />
            </div>

            <div className='flex gap-4'>
                <div className='w-[50%]'>
                    <HeadingAndparagraph title="President Speech" content={content?.presidentSpeech} />
                </div>
                <div className='w-[50%]'>
                    <HeadingAndparagraph title="Sachiv Speech" content={content?.sachivSpeech} />
                </div>
            </div>
        </div>
</div>
  )
}

export default EditAboutUs