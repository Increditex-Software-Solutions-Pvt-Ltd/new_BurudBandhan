import React, { useState } from 'react'

const FamilyDetails = ({marriageProfile, setMarriageProfile, handleChange}) => {

    const handleListBlur = (e) => {
        const { value } = e.target;

        // Split, trim, and filter out empty items only when the input loses focus
        const listArr = value.split(',').map(item => item.trim()).filter(item => item);
        setMarriageProfile({ ...marriageProfile, relativesSurnameList: listArr });
        // console.log(listArr); // Check the result in the console
    }

    const handleListChange = (e) => {
        // Update the state with the raw input value to allow commas
        const { value } = e.target;
        setMarriageProfile({ ...marriageProfile, relativesSurnameList: value.split(',') });
    }

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
                onChange={handleChange}
                value={marriageProfile?.permenantAddress}
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
                onChange={handleChange}
                value={marriageProfile?.fatherName}
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
                onChange={handleChange}
                value={marriageProfile?.fatherOccupation} 
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
                onChange={handleChange}
                value={marriageProfile?.motherName} 
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
                onChange={handleChange}
                value={marriageProfile?.totalFamilyMembers}
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
                onChange={handleChange}
                value={marriageProfile?.maternalUncleName} 
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
                type='text'
                name='relativesSurnameList'
                value={marriageProfile?.relativesSurnameList.join(',')}
                onChange={handleListChange} // Handle raw input change
                onBlur={handleListBlur} // Handle splitting on blur
                />
                    
                
            </div>
        </div>           
    </div>
  )
}

export default FamilyDetails;