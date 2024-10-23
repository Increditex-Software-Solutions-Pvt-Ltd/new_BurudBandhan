import React, { useState } from 'react'


const ProfessionalDetails = ({marriageProfile, setMarriageProfile, handleChange}) => {

    // set presently working object values like status, category, details
    const handlePresentlyWorking = (e)=>{
        const {name, value} = e.target;
        setMarriageProfile({...marriageProfile, presentlyWorking:{...marriageProfile.presentlyWorking, [name]:value}});
    }

    // handle hobbies
    const handleHobbiesBlur = (e) => {
        const { value } = e.target;

        // Split, trim, and filter out empty items only when the input loses focus
        const hobbiesArr = value.split(',').map(item => item.trim()).filter(item => item);
        setMarriageProfile({ ...marriageProfile, hobbies: hobbiesArr });
        // console.log(hobbiesArr); // Check the result in the console
    }

    const handleHobbiesChange = (e) => {
        // Update the state with the raw input value to allow commas
        const { value } = e.target;
        setMarriageProfile({ ...marriageProfile, hobbies: value.split(',') });
    }

  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-lg font-semibold text-sky-950'>व्यावसायिक माहिती</h1>
        <div
        style={{
            display:'grid',
            gridTemplateColumns:"repeat(2, 1fr)",
            gap:"40px"
        }}
        >
            <div>
                <label className='text-teal-700'>शिक्षण *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 
                text-md w-[100%]
                focus:outline-none
                '
                name="qualification"
                onChange={handleChange}
                value={marriageProfile.qaulification} 
                type="text"
                placeholder='शिक्षण' 
                />
            </div>

            {/* presently working */}
            {/* check if yes or no */}
            <div>
                <label className='text-teal-700'>सध्या कार्यरत आहे का? (Presently Working?) *</label>
                <div className='flex gap-4 text-lg items-center'>
                    <div className='flex gap-2 items-center'>
                        <input 
                        className='cursor-pointer'
                        name="status" 
                        type="radio"
                        value='Yes'
                        onChange={handlePresentlyWorking}
                        id='yes'
                        />
                        <label htmlFor='yes'>Yes</label>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input 
                        className='cursor-pointer'
                        name="status" 
                        type="radio"
                        onChange={handlePresentlyWorking}
                        value='No'
                        id='no'
                        />
                        <label htmlFor='no'>No</label>
                    </div>
                </div>
                
            </div>
            
            {(marriageProfile?.presentlyWorking.status == 'Yes') && <div>
                <label className='text-teal-700'>साधन *</label>
                <select
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name='category'
                onChange={handlePresentlyWorking}
                value={marriageProfile.presentlyWorking.category}
                >
                    <option value="">कृपया योग्य पर्याय निवडा</option>
                    <option value='Government'>सरकारी नोकरी</option>
                    <option value='Private'>खाजगी नोकरी</option>
                    <option value='Business'>व्यवसाय</option>
                </select>
            </div>}

            {(marriageProfile?.presentlyWorking.status == 'Yes') && <div>
                <label className='text-teal-700'>पदनाम (Designation) *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="designation" 
                onChange={handlePresentlyWorking}
                value={marriageProfile.presentlyWorking.designation}
                type="text"
                placeholder='पदनाम' 
                />
            </div>}

            {(marriageProfile?.presentlyWorking.status == 'Yes') && <div>
                <label className='text-teal-700'>कामाबद्दल अधिक माहिती (Work details) *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="details" 
                onChange={handlePresentlyWorking}
                value={marriageProfile.presentlyWorking.details}
                type="text"
                placeholder='कामाबद्दल अधिक माहिती' 
                />
            </div>}
                 
            <div >
                <label className='text-teal-700'>वार्षिक उत्पन्न *</label>
                <div className='flex items-center'>
                    <input 
                    className='border-b border-b-sky-800 
                    p-2 text-md w-[100%]
                    focus:outline-none
                    '
                    name="annualIncome"
                    onChange={handleChange}
                    value={marriageProfile.annualIncome} 
                    type="number"
                    placeholder='वार्षिक उत्पन्न' 
                    />
                    <p>Rs.</p>
                </div>
            </div>
            <div>
                <label className='text-teal-700'>तुमच्या जोडीदाराकडून अपेक्षा *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="expectation"
                onChange={handleChange}
                value={marriageProfile.expectation} 
                type="text"
                placeholder='तुमच्या जोडीदाराकडून अपेक्षा' 
                />
            </div>
            <div>
                <label className='text-teal-700'>छंद</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="hobbies"
                onChange={handleHobbiesChange}
                onBlur={handleHobbiesBlur} 
                value={marriageProfile.hobbies.join(',')}
                type="text"
                placeholder='छंद' 
                />
            </div>
            
        </div>     
    </div>
  )
}

export default ProfessionalDetails
