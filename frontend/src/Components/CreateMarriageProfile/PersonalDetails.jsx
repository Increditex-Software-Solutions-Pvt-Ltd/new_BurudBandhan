import React from 'react'

const PersonalDetails = ({handleChange}) => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-lg font-semibold text-sky-950'>वैयक्तिक माहिती</h1>
        <div>
            <div>
                <input 
                className='border p-2 text-md w-[100%]'
                name="fullName" 
                type="text"
                placeholder='पूर्ण नाव' 
                />
            </div>
            <div>
                <input 
                name="birthName" 
                type="text"
                placeholder='जन्म नाव' 
                />
            </div>
            <div>
                <input 
                name="birthPlace" 
                type="text"
                placeholder='जन्म ठिकाण' 
                />
            </div>
            <div>
                <input 
                name="dateOfBirth" 
                type="date"
                placeholder='जन्मतारीख' 
                />
            </div>
            <div>
                <input 
                name="timeOfBirth" 
                type="text"
                placeholder='जन्म वेळ' 
                />
            </div>
            <div>
                <input 
                name="height" 
                type="text"
                placeholder='उंची' 
                />
            </div>
            <div>
                {/* <input 
                name="color" 
                type="text"
                placeholder='Color' 
                /> */}

                <select name='color' onChange={handleChange}>
                    <option value="">आपल्या त्वचेचा रंग निवडा</option>
                    <option value="fair">गोरा</option>
                    <option value="medium">गहु वर्नीय</option>
                    <option value="dark">काळा</option>
                </select>
            </div>
            <div>
                {/* <input 
                name="fullName" 
                type="text"
                placeholder='Blood Group' 
                /> */}

                <select name='bloodGroup' onChange={handleChange}>
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
                <input 
                name="photo" 
                type="text"
                placeholder='Photo' 
                />
            </div>
        </div>           
    </div>
  )
}

export default PersonalDetails;