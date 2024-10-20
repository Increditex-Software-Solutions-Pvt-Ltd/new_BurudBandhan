import React from 'react'

const HeadingAndparagraph = ({title, content}) => {
  return (
    <div className='text-justify border rounded-xl p-6 bg-gray-50'>
        <h1 className='text-xl font-bold text-sky-950'>{title}</h1>
        <p className='mt-4 text-gray-500'>{content}</p>
    </div>
  )
}

export default HeadingAndparagraph