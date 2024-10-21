import React from 'react'

const CommunicationDetails = ({handleChange}) => {
  return (
    <div
     className='flex flex-col gap-4'
     >
        <h1 className='text-lg font-semibold text-sky-950'>संपर्क (Communication Details)</h1>
        <div 
        style={{
            display:'grid',
            gridTemplateColumns:"repeat(2, 1fr)",
            gap:"40px"
        }}
        // className='flex flex-col gap-6'
        >
            <div>
                <label className='text-teal-700'>वैयक्तिक संपर्क क्रमांक *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="personalContact" 
                type="number"
                placeholder='वैयक्तिक संपर्क क्रमांक' 
                />
            </div>
            <div>
                <label className='text-teal-700'>ईमेल आयडी *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 
                text-md w-[100%]
                focus:outline-none
                '
                name="email" 
                type="email"
                placeholder='ईमेल आयडी' 
                />
            </div>
            <div>
                <label className='text-teal-700'>वडिलांचा/पालकांचा संपर्क क्रमांक *</label>
                <input
                className='
                border-b border-b-sky-800 p-2 
                text-md w-[100%]
                focus:outline-none
                '
                name="parentsContact" 
                type="number"
                placeholder='वडिलांचा/पालकांचा संपर्क क्रमांक' 
                />
            </div>
            <div>
                <label className='text-teal-700'>भावाचा/काकांचा संपर्क क्रमांक *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="uncleContact" 
                type="number"
                placeholder='भावाचा/काकांचा संपर्क क्रमांक ' 
                />
            </div>
            <div>
                <label className='text-teal-700'>पत्ता *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="currentAddress" 
                type="text"
                placeholder='पत्ता' 
                />
            </div>
           
        </div>           
    </div>
  )
}

export default CommunicationDetails;