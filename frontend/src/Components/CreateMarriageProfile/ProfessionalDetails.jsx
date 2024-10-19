import React from 'react'

const ProfessionalDetails = ({handleChange}) => {
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
                        id='status'
                        />
                        <label htmlFor='status'>Yes</label>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input 
                        className='cursor-pointer'
                        name="status" 
                        type="radio"
                        value='No'
                        id='status'
                        />
                        <label htmlFor='status'>No</label>
                    </div>
                </div>
                
            </div>
            
            <div>
                <label className='text-teal-700'>साधन *</label>
                <select
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                >
                    <option value="">कृपया योग्य पर्याय निवडा</option>
                    <option value='Government'>सरकारी नोकरी</option>
                    <option value='Private'>खाजगी नोकरी</option>
                    <option value='Business'>व्यवसाय</option>
                </select>
            </div>

            <div>
                <label className='text-teal-700'>कामाबद्दल अधिक माहिती (Work details) *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="details" 
                type="text"
                placeholder='कामाबद्दल अधिक माहिती' 
                />
            </div>
                 
            <div >
                <label className='text-teal-700'>वार्षिक उत्पन्न *</label>
                <div className='flex items-center'>
                    <input 
                    className='border-b border-b-sky-800 
                    p-2 text-md w-[100%]
                    focus:outline-none
                    '
                    name="annualIncome" 
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
                type="text"
                placeholder='छंद' 
                />
            </div>
            
        </div>     
    </div>
  )
}

export default ProfessionalDetails
