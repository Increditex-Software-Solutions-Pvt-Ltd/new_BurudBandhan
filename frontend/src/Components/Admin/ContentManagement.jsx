import React, { useState } from 'react'
import Heading from './Heading';
import SuccessVideos from './SuccessVideos';
import SuccessStories from './SuccessStories';
import AboutUs from './AboutUs';

const ContentManagement = () => {
  const [content, setContent] = useState('about_us');

  const handleClick = (value)=>{
    setContent(value);
  }

  return (
    <div>
      {/* <Heading innerText='Content Management' /> */}

      <div className='text-left flex items-center gap-6 p-6 border-b border-b-red-200'>
        <button
        style={{
          backgroundColor: (content == "about_us") ? "#ea580c": "white",
          color:(content == "about_us") ? "white": "#ea580c"
        }}
         className='border border-orange-400 rounded-xl px-6 py-4 text-[18px]' onClick={()=>handleClick('about_us')}>About page</button>
        <button 
        style={{
          backgroundColor: (content == "success_stories") ? "#ea580c": "white",
          color:(content == "success_stories") ? "white": "#ea580c"
        }}
         className='border border-orange-400 rounded-xl px-6 py-4 text-[18px] ' onClick={()=>handleClick('success_stories')}>Success stories</button>
        <button 
        style={{
          backgroundColor: (content == "success_videos") ? "#ea580c": "white",
          color:(content == "success_videos") ? "white": "#ea580c"
        }}
         className='border border-orange-400 rounded-xl px-6 py-4 text-[18px]' onClick={()=>handleClick('success_videos')}>Success Videos</button>
      </div>

      {
        (content == 'success_stories')? <SuccessStories />
        : (content == 'success_videos')? <SuccessVideos />
        : <AboutUs />
      }
    </div>
  )
}

export default ContentManagement;