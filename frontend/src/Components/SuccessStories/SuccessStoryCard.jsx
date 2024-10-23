import React from 'react';
import { GoHeartFill } from "react-icons/go"; 

const SuccessStoryCard = ({story, index}) => {

  return (
    <div style={{
        display:"flex",
        flexDirection: (index%2 == 0)? "row":"row-reverse",
        gap:"30px"
    }}>
        <div className='w-[35%]'>
            <img className='w-full h-[500px] object-cover' src={story.weddingPicture} alt='wedding picture' />
        </div>
        <div className='w-[65%] 
        bg-yellow-100
        p-10
        flex flex-col gap-4
        rounded-tr-[100px]
        rounded-bl-[100px]
        '> 
            <div className='
            flex justify-center items-center gap-4 
            text-4xl font-bold text-yellow-600
            '>
                <p >{story.brideName}</p>
                <GoHeartFill className='text-red-600' />
                <p>{story.groomName}</p>
            </div>
            <div className='text-sky-800 font-bold text-xl'>
                <p>{story.city}</p>
            </div>
            <div>
                <p className='text-center text-yellow-800'>"{story.description}"</p>
            </div>
        </div>
        
    </div>
  )
}

export default SuccessStoryCard;