import React from 'react'

const CommunicationDetails = ({profile}) => {
  return (
    <div>
        <table >
            <tbody className='capitalize'>
                <tr >
                    <td className='p-2 font-semibold'>Full Name:</td>
                    <td className='p-2'>{profile?.fullName}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Gender:</td>
                    <td className='p-2'>{profile?.gender}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Birth Name:</td>
                    <td className='p-2'>{profile?.birthName}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Birth Place:</td>
                    <td className='p-2'>{profile?.birthPlace}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Date of Birth:</td>
                    <td className='p-2'>{profile?.dateOfBirth}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Time of Birth:</td>
                    <td className='p-2'>{profile?.timeOfBirth}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Age:</td>
                    <td className='p-2'>{profile?.age}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Height:</td>
                    <td className='p-2'>{profile?.height}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Color:</td>
                    <td className='p-2'>{profile?.color}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Blood Group:</td>
                    <td className='p-2'>{profile?.bloodGroup}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>Category:</td>
                    <td className='p-2'>{
                    (profile?.category == 'remarriage') ? "Remarriage"
                    : (profile?.category === 'physically_disabled') ? "Physically Disabled"
                    : "New Marriage"
                    }</td>
                </tr>

                {/* if category is physically disabled */}
                {
                    (profile?.category == 'physically_disabled') && <tr>
                        <td className='p-2 font-semibold'>Details of Physically Disability:</td>
                        <td className='p-2'>{profile?.details_of_physically_disability}</td>
                    </tr>
                }

                {
                    (profile?.category == 'remarriage')&&<tr>
                        <td className='p-2 font-semibold'>Details of Previous marriage:</td>
                        <td className='p-2'>{profile?.details_of_previous_marriage}</td>
                    </tr>
                }
               
            
            </tbody>
        </table>

    </div>
  )
}

export default CommunicationDetails;