import React from 'react'
import PersonalDetails from './PersonalDetails'
import ProfessionalDetails from './ProfessionalDetails'

const NewMarriage = ({handleChange}) => {
  return (
    <div className='flex flex-col gap-10 
     rounded-[10px] p-10 bg-white shadow-lg
    '>
      <h1 className='text-center font-bold text-sky-800 text-2xl'>नवीन विवाह (New Marriage)</h1>
      <PersonalDetails handleChange={handleChange} />
      <ProfessionalDetails handleChange = {handleChange} />
    </div>
  )
}

export default NewMarriage