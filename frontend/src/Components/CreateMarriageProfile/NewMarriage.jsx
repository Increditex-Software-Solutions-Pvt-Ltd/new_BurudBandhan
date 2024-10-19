import React from 'react'
import PersonalDetails from './PersonalDetails'
import ProfessionalDetails from './ProfessionalDetails'

const NewMarriage = ({handleChange}) => {
  return (
    <div>
      <h1>New Merriage</h1>
      <PersonalDetails handleChange={handleChange} />
      <ProfessionalDetails handleChange = {handleChange} />
    </div>
  )
}

export default NewMarriage