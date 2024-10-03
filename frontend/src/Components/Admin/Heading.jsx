import React from 'react'

const Heading = ({innerText}) => {
  return (
    <div>
        <h1 className='p-[20px] text-left text-4xl border-b border-b-red-200 font-bold text-gray-600 bg-red-50'>{innerText}</h1>

    </div>
  )
}

export default Heading