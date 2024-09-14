import React, { useEffect, useRef, useState } from 'react'
import { MdAdd, MdMinimize } from 'react-icons/md';

const QuestionAndAnswer = ({data}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [divHeight, setDivHeight] = useState(0);
    const divRef = useRef(null);
    
    const handleAnswer = ()=>{
        setShowAnswer((prev) => !prev); // toggle the answer visibility
    }

    useEffect(()=>{
        if(showAnswer && divRef.current){
            // set height dynamically when answer is showing
            setDivHeight(divRef.current.scrollHeight); 
        } else {
            // collapse the div when hidden
            setDivHeight(0);
        }
    }, [showAnswer]);
    
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
        rounded shadow
        ' 
        onClick={handleAnswer}>
            <p>{data.que}</p>
            {/* Add icon */}
            {showAnswer? <MdMinimize /> : <MdAdd />  }
        </div>

        {/* Answer section */}
        <div 
        className='
        transition-all duration-500 ease-in-out overflow-hidden
        p-[10px]
        border
        font-semibold
        text-sky-800'
        style={{
            display:showAnswer?"block":"none",
            height: `${divHeight}px` // Dynamically set height based on state
        }}

        ref={divRef}
        >
            <div className='mt-2'>
            <p>{data.ans}</p>
            </div>
            
        </div>
    </div>
  )
}

export default QuestionAndAnswer