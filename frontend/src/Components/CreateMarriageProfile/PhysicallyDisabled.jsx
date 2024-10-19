import React from 'react'
import PersonalDetails from './PersonalDetails';
import ProfessionalDetails from './ProfessionalDetails';
import FamilyDetails from './FamilyDetails';

const PhysicallyDisabled = ({handleChange}) => {
  return (
    <div className='flex flex-col gap-10 
    rounded-[10px] p-10 bg-white shadow-lg
    '>
      <h1 className='text-center font-bold text-sky-800 text-2xl'>शारीरिकदृष्ट्या अक्षम (Physically disabled)</h1>
      <PersonalDetails handleChange={handleChange} />
      <ProfessionalDetails handleChange = {handleChange} />
      <FamilyDetails handleChange={handleChange} />

    </div>
  )
}

export default PhysicallyDisabled;