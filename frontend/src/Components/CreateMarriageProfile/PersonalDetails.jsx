import React from 'react'

const PersonalDetails = ({marriageProfile, handleChange}) => {
  return (
    <div
     className='flex flex-col gap-4'
     >
        <h1 className='text-lg font-semibold text-sky-950'>वैयक्तिक माहिती</h1>
        <div 
        style={{
            display:'grid',
            gridTemplateColumns:"repeat(2, 1fr)",
            gap:"40px"
        }}
        // className='flex flex-col gap-6'
        >
            <div>
                <label className='text-teal-700'>लिंग *</label>

                <select
                 className='border-b border-b-sky-800 
                 p-2 text-md w-[100%]
                 focus:outline-none
                 ' 
                name='gender'
                onChange={handleChange}
                >
                        <option value="">कृपया लिंग निवडा</option>
                        <option value="male">पुरुष</option>
                        <option value="female">स्त्री</option>
                </select>
            </div>

            <div>
                <label className='text-teal-700'>वधू/वराचे नाव *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="fullName" 
                onChange={handleChange}
                type="text"
                placeholder='पूर्ण नाव' 
                />
            </div>
            <div>
                <label className='text-teal-700'>जन्म नाव *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 
                text-md w-[100%]
                focus:outline-none
                '
                name="birthName" 
                onChange={handleChange}
                type="text"
                placeholder='जन्म नाव' 
                />
            </div>
            <div>
                <label className='text-teal-700'>जन्म ठिकाण *</label>
                <input
                className='
                border-b border-b-sky-800 p-2 
                text-md w-[100%]
                focus:outline-none
                '
                name="birthPlace" 
                onChange={handleChange}
                type="text"
                placeholder='जन्म ठिकाण' 
                />
            </div>
            <div>
                <label className='text-teal-700'>जन्मतारीख *</label>
                <input 
                
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="dateOfBirth"
                onChange={handleChange}
                type="date"
                />
            </div>
            <div>
                <label className='text-teal-700'>जन्म वेळ *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="timeOfBirth"
                onChange={handleChange} 
                type="text"
                placeholder='जन्म वेळ' 
                />
            </div>
            <div>
                <label className='text-teal-700'>वय *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="age" 
                onChange={handleChange}
                type="text"
                placeholder='वय' 
                />
            </div>
            <div>
                <label className='text-teal-700'>उंची *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="height"
                onChange={handleChange} 
                type="text"
                placeholder='उंची' 
                />
            </div>
            <div>
                <label className='text-teal-700'>वर्ण *</label>
                <select 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name='color' onChange={handleChange}>
                    <option value="">तुमचा वर्ण निवडा</option>
                    <option value="fair">गोरा</option>
                    <option value="medium">सावळा</option>
                    <option value="dark">काळा</option>
                </select>
            </div>
            <div>
                <label className='text-teal-700'>रक्त गट *</label>
                <select 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name='bloodGroup' onChange={handleChange}>
                    <option value="">रक्त गट</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="O-">O-</option>
                </select>
            </div>
            <div>
                <label className='text-teal-700'>फोटो</label>
                <input 
                className='border-b border-b-sky-800 p-2 text-md w-[100%]'
                name="photo" 
                onChange={handleChange}
                type="text"
                placeholder='फोटो' 
                />
            </div>

            {/* marriage category */}
            <div>
                <label className='text-teal-700'>विवाह प्रकार </label>
                <div className='
                    flex 
                    items-center 
                    gap-2
                '   
                >
                    <div className='
                    flex items-center gap-2 w-1/3
                    '>
                        <input 
                        className='cursor-pointer'
                        type='radio' 
                        id='new_marriage'
                        name='category'
                        value='new_marriage'
                        onChange={handleChange}
                        />
                        <label htmlFor='new_marriage'>नवीन विवाह (New Marriage)</label>
                    </div>

                    <div className='
                    flex items-center gap-2 w-1/3
                    '>
                        <input
                        className='cursor-pointer' 
                        type='radio' 
                        id='physically_disabled'
                        name='category'
                        value='physically_disabled'
                        onChange={handleChange}
                        />
                        <label htmlFor='physically_disabled'>शारीरिकदृष्ट्या अक्षम (Physically disabled)</label>
                    </div>

                    <div className='
                    flex items-center gap-2 w-1/3
                        
                    '>
                        <input 
                        className='cursor-pointer'
                        type='radio' 
                        id='remarriage'
                        name='category'
                        value='remarriage'
                        onChange={handleChange}
                        />
                        <label htmlFor='remarriage'>पुनर्विवाह (Re-marriage)</label>
                    </div>
                </div>



            </div>

            {/* if category is physically  disabled */}
            {(marriageProfile?.category == 'physically_disabled') && <div>
                <label className='text-teal-700'>शारीरिकदृष्ट्या अक्षम (Details of physically disability)</label>
                <input 
                className='border-b border-b-sky-800 p-2 text-md w-[100%]'
                name="details_of_physically_disability"
                onChange={handleChange} 
                type="text"
                placeholder='Part affected/Type of disability/percent of disability' 
                />
 
            </div>}

            {/* if category is re-marriage */}
            {(marriageProfile?.category == 'remarriage') && <div>
                <label className='text-teal-700'>पुनर्विवाह (Details of Previous Marriage)</label>
                
                <div>
                    <div className='
                        flex items-center gap-2 w-1/2    
                    '>
                        <input 
                        className='cursor-pointer'
                        type='radio' 
                        id='sudden_demise_of_partner'
                        name='details_of_previous_marriage'
                        value='sudden_demise_of_partner'
                        onChange={handleChange}
                        />
                        <label htmlFor='sudden_demise_of_partner'>The sudden demise of partner</label>
                    </div>
                    <div className='
                    flex items-center gap-2 w-1/2
                        
                    '>
                        <input 
                        className='cursor-pointer'
                        type='radio' 
                        id='divorced'
                        name='details_of_previous_marriage'
                        value='divorced'
                        onChange={handleChange}
                        />
                        <label htmlFor='divorced'>Divorced</label>
                    </div>
                </div>
            </div>}
           

        </div>           
    </div>
  )
}

export default PersonalDetails;