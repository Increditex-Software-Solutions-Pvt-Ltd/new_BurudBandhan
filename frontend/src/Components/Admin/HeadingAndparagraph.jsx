import React from 'react'

const HeadingAndparagraph = ({content}) => {
  return (
    <div className='text-justify'>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
    </div>
  )
}

export default HeadingAndparagraph