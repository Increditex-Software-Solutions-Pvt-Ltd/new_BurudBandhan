import React, { useRef, useState } from 'react'
import { MdAdd, MdMinimize } from 'react-icons/md';

const QuestionAndAnswer = ({data}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    
    const handleAnswer = ()=>{
        setShowAnswer(!showAnswer); // toggle the answer visibility
    }
    
  return (
    <div className='text-left '>
        {/* question section */}
        <div 
        className='flex 
        justify-between items-center 
        cursor-pointer
        p-[10px]
        border
        font-semibold
        text-sky-950
        ' 
        onClick={handleAnswer}>
            <p>{data.que}</p>
            {/* Add icon */}
            {showAnswer? <MdMinimize /> : <MdAdd />  }
        </div>

        {/* Answer section */}
        <div 
        className='
        p-[10px]
        border
        font-semibold
        text-sky-800'
        style={{
            display:showAnswer?"block":"none"
            }}
            >
            <p>{data.ans}</p>
        </div>
    </div>
  )
}

export default QuestionAndAnswer