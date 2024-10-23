import React from 'react'

const FamilyDetails = ({profile}) => {
  return (
    <div>
        <table >
            <tbody className='capitalize'>
                <tr >
                    <td className='p-2 font-semibold'>कायम पत्ता (Permanent address):</td>
                    <td className='p-2'>{profile?.permenantAddress}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>वडिलांचे नाव:</td>
                    <td className='p-2'>{profile?.fatherName}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>वडिलांचा पेशा (Father's occupation):</td>
                    <td className='p-2'>{profile?.fatherOccupation}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>आईचे माहेरकडील पूर्ण नाव:</td>
                    <td className='p-2'>{profile?.motherName}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>परिवारामधिल सदस्यांची संख्या:</td>
                    <td className='p-2'>{profile?.totalFamilyMembers}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>मामांचे पूर्ण नाव:</td>
                    <td className='p-2'>{profile?.maternalUncleName}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>सम्बंधितांचे नाव (आडनाव):</td>
                    <td className='p-2'>{profile?.relativesSurnameList.join(', ')}</td>
                </tr>
              
            </tbody>
        </table>

    </div>
  )
}

export default FamilyDetails;