import React from 'react'

const PersonalDetails = ({profile}) => {
  return (
    <div>
        <table >
            <tbody className='capitalize'>
                <tr >
                    <td className='p-2 font-semibold'>वधू/वराचे नाव:</td>
                    <td className='p-2'>{profile?.fullName}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>लिंग:</td>
                    <td className='p-2'>{profile?.gender}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>जन्म नाव:</td>
                    <td className='p-2'>{profile?.birthName}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>जन्म ठिकाण:</td>
                    <td className='p-2'>{profile?.birthPlace}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>जन्मतारीख:</td>
                    <td className='p-2'>{profile?.dateOfBirth}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>जन्म वेळ:</td>
                    <td className='p-2'>{profile?.timeOfBirth}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>वय:</td>
                    <td className='p-2'>{profile?.age}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>उंची:</td>
                    <td className='p-2'>{profile?.height}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>वर्ण:</td>
                    <td className='p-2'>{profile?.color}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>रक्त गट:</td>
                    <td className='p-2'>{profile?.bloodGroup}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>विवाह प्रकार:</td>
                    <td className='p-2'>{
                    (profile?.category == 'remarriage') ? "Remarriage"
                    : (profile?.category === 'physically_disabled') ? "Physically Disabled"
                    : "New Marriage"
                    }</td>
                </tr>

                {/* if category is physically disabled */}
                {
                    (profile?.category == 'physically_disabled') && <tr>
                        <td className='p-2 font-semibold'>शारीरिकदृष्ट्या अक्षम (Details of physically disability):</td>
                        <td className='p-2'>{profile?.details_of_physically_disability}</td>
                    </tr>
                }

                {
                    (profile?.category == 'remarriage')&&<tr>
                        <td className='p-2 font-semibold'>पुनर्विवाह (Details of Previous Marriage):</td>
                        <td className='p-2'>{profile?.details_of_previous_marriage}</td>
                    </tr>
                }
               
            
            </tbody>
        </table>



 

        

        


    </div>
  )
}

export default PersonalDetails