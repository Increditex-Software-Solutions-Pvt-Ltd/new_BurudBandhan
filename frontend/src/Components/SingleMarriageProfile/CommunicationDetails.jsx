import React from 'react'

const CommunicationDetails = ({profile}) => {
  return (
    <div>
        <table >
            <tbody className='capitalize'>
                <tr >
                    <td className='p-2 font-semibold'>वैयक्तिक संपर्क क्रमांक:</td>
                    <td className='p-2'>{profile?.personalContact}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>ईमेल आयडी:</td>
                    <td className='p-2'>{profile?.email}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>वडिलांचा/पालकांचा संपर्क क्रमांक:</td>
                    <td className='p-2'>{profile?.parentsContact}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>भावाचा/काकांचा संपर्क क्रमांक:</td>
                    <td className='p-2'>{profile?.uncleContact}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>सध्याचा पत्ता (Current Address):</td>
                    <td className='p-2'>{profile?.currentAddress}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>शहर:</td>
                    <td className='p-2'>{profile?.city}</td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold'>जिल्हा:</td>
                    <td className='p-2'>{profile?.dist}</td>
                </tr>
              
            </tbody>
        </table>

    </div>
  )
}

export default CommunicationDetails;