import React from 'react'

const FamilyDetails = ({handleChange}) => {
  return (
    <div
     className='flex flex-col gap-4'
     >
        <h1 className='text-lg font-semibold text-sky-950'>कौटुंबिक माहिती</h1>
        <div 
        style={{
            display:'grid',
            gridTemplateColumns:"repeat(2, 1fr)",
            gap:"40px"
        }}
        // className='flex flex-col gap-6'
        >
            <div>
                <label className='text-teal-700'>कायम पत्ता (Permanent address) *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="permenantAddress" 
                type="text"
                placeholder='कायम पत्ता' 
                />
            </div>
            <div>
                <label className='text-teal-700'>वडिलांचे नाव *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 
                text-md w-[100%]
                focus:outline-none
                '
                name="fatherName" 
                type="text"
                placeholder='वडिलांचे नाव' 
                />
            </div>
            <div>
                <label className='text-teal-700'>वडिलांचा पेशा (Father's occupation) *</label>
                <input
                className='
                border-b border-b-sky-800 p-2 
                text-md w-[100%]
                focus:outline-none
                '
                name="fatherOccupation" 
                type="text"
                placeholder='वडिलांचा पेशा' 
                />
            </div>
            <div>
                <label className='text-teal-700'>आईचे माहेरकडील पूर्ण नाव *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="motherName" 
                type="text"
                placeholder='आईचे माहेरकडील पूर्ण नाव ' 
                />
            </div>
            <div>
                <label className='text-teal-700'>परिवारामधिल सदस्यांची संख्या *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="totalFamilyMembers" 
                type="number"
                placeholder='परिवारामधिल सदस्यांची संख्या' 
                />
            </div>
            <div>
                <label className='text-teal-700'>मामांचे पूर्ण नाव *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="maternalUncleName" 
                type="text"
                placeholder='मामांचे पूर्ण नाव' 
                />
            </div>
            <div>
                <label className='text-teal-700'>सम्बंधितांचे नाव (आडनाव) *</label>
                <input
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                placeholder='सम्बंधितांचे नाव (आडनाव)'
                name='relativesSurnameList' onChange={handleChange} />
                    
                
            </div>
        </div>           
    </div>
  )
}

export default FamilyDetails;