import React, { useState } from 'react';
import { ImProfile } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";

const stepsData = [
    {id:1, title: "वैयक्तिक माहिती", icon: <ImProfile className="text-[100px] text-orange-400"/>},
    {id:2, title: "जोडीदाराबाबतच्या अपेक्षा", icon: <BsPeopleFill className="text-[100px] text-orange-400"/>},
    {id:3, title: "कागदपत्रांची पडताळणी ", icon: <HiDocumentMagnifyingGlass className="text-[100px] text-orange-400"/>},
]

const Steps = () => {
    const [steps, setSteps] = useState(stepsData);

  return (
    <div className='mb-[80px]'>
        <p className='text-red-700 text-[20px] font-bold'>आता सोप्या पद्धतीने तुमचा परिपूर्ण जोडीदार शोधा</p>
        <p className='text-[25px] font-bold text-sky-950'>अगदी सरळ व सोप्या ३ टप्प्यांमधे बुरूड समाज वधु वर प्लॅटफाॅर्म वर </p>

        <div className='w-[70%] m-auto flex  justify-between '>
          {
            steps.map((item, i)=>(
              <div className='py-[30px] ' key={item.id}>
                {/* icon */}
                <div className='mb-[30px] flex items-center justify-center'>
                  {item.icon}
                </div>
                <div className=' font-bold flex justify-between items-center gap-[25px]'>
                  <p className=' text-white bg-sky-950 p-[5px] px-[8px] text-[12px] rounded-full'>0{i+1}</p>
                  <p className='text-sky-950 '>{item.title}</p>
                  
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Steps;