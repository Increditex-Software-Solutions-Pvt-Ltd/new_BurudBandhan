import React from 'react'

const ProfessionalDetails = ({profile}) => {
  return (
    <div>
        <table >
            <tbody className='capitalize'>
                <tr >
                    <td className='p-2 font-semibold'>शिक्षण:</td>
                    <td className='p-2'>{profile?.qualification}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>सध्या कार्यरत आहे का? (Presently Working?):</td>
                    <td className='p-2'>{(profile?.presentlyWorking.status === 'Yes') ? 'Yes' : 'No'}</td>
                </tr>
                {(profile?.presentlyWorking.status === 'Yes') && <tr>
                    <td className='p-2 font-semibold'>साधन:</td>
                    <td className='p-2'>{profile?.presentlyWorking.category}</td>
                </tr>}

                {(profile?.presentlyWorking.status === 'Yes') && <tr>
                    <td className='p-2 font-semibold'>पदनाम (Designation):</td>
                    <td className='p-2'>{profile?.presentlyWorking.designation}</td>
                </tr>}

                {(profile?.presentlyWorking.status === 'Yes') && <tr>
                    <td className='p-2 font-semibold'>कामाबद्दल अधिक माहिती (Work details):</td>
                    <td className='p-2'>{profile?.presentlyWorking.details}</td>
                </tr>}

                <tr>
                    <td className='p-2 font-semibold'>वार्षिक उत्पन्न:</td>
                    <td className='p-2'>{profile?.annualIncome} Rs.</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>तुमच्या जोडीदाराकडून अपेक्षा:</td>
                    <td className='p-2'>{profile?.expectation}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>छंद:</td>
                    <td className='p-2'>{profile?.hobbies.join(', ')}</td>
                </tr>
              
            </tbody>
        </table>

    </div>
  )
}

export default ProfessionalDetails;