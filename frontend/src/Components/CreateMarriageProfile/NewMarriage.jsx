import React from 'react'
import PersonalDetails from './PersonalDetails'
import ProfessionalDetails from './ProfessionalDetails'

const NewMarriage = ({handleChange}) => {
  return (
    <div className=''>
      {/* <h1>New Marriage</h1> */}
      <PersonalDetails handleChange={handleChange} />
      <ProfessionalDetails handleChange = {handleChange} />
    </div>
  )
}

export default NewMarriage