import React from 'react';
import { GoHeartFill } from "react-icons/go"; 

const SuccessVideoCard = ({video, index}) => {

  return (
    <div className=' border-gray-300'>
        <div className=''>
           
            <iframe width="100%" height="600px"
            className='rounded-2xl' 
            src={video.videoURL} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
            
        </div>
        <div className='
        p-4
        flex flex-col gap-4
        rounded-tr-[100px]
        rounded-bl-[100px]
        text-left
        '> 
            
            <div className='text-sky-800 font-bold text-xl'>
                <p>Marriage Year: {video.year}</p>
            </div>
            <div>
                <p className=' text-yellow-800 text-[18px]'>"{video.description}"</p>
            </div>
        </div>
        
    </div>
  )
}

export default SuccessVideoCard;