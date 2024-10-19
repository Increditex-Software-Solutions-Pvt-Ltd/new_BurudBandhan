import React from 'react'

const PersonalDetails = ({handleChange}) => {
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
                <label className='text-teal-700'>वधू/वराचे नाव *</label>
                <input 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name="fullName" 
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
                type="date"
                placeholder='जन्मतारीख' 
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
                type="text"
                placeholder='जन्म वेळ' 
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
                type="text"
                placeholder='उंची' 
                />
            </div>
            <div>
                <label className='text-teal-700'>त्वचेचा रंग *</label>
                <select 
                className='border-b border-b-sky-800 
                p-2 text-md w-[100%]
                focus:outline-none
                '
                name='color' onChange={handleChange}>
                    <option value="">आपल्या त्वचेचा रंग निवडा</option>
                    <option value="fair">गोरा</option>
                    <option value="medium">गहु वर्नीय</option>
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
                type="text"
                placeholder='फोटो' 
                />
            </div>
        </div>           
    </div>
  )
}

export default PersonalDetails;