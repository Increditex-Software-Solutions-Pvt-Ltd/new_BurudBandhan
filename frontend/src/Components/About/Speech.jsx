import React from 'react'

const Speech = ({member, position, speech_type, speech}) => {
  return (
    <div className='lg:w-[80%]'>
        <h1 className='text-2xl font-bold text-sky-950 mb-8'>{speech_type}</h1>

        <div className='text-justify text-[15px] bg-red-500 text-white p-[30px] rounded-tr-[80px] rounded-bl-[80px]'>
            <p>नमस्कार ,</p>
            <p>
              {speech}
            </p>
            <p className='text-right'>- {member} ( {position} )</p>
            
        </div>
    </div>
  )
}

export default Speech