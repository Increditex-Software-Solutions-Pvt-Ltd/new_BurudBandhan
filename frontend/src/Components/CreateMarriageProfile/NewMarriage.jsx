import React from 'react'
import PersonalDetails from './PersonalDetails'

const NewMarriage = ({handleChange}) => {
  return (
    <div>
      <h1>New Merriage</h1>
      <PersonalDetails handleChange={handleChange} />

    </div>
  )
}

export default NewMarriage