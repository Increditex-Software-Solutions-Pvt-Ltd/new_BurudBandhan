import React from 'react'
import Heading from './Heading';

const data = [
  {title:"Users created", total:8},
  {title:"Profiles created", total:8},
  {title:"Brides", total:8},
  {title:"Grooms", total:8},
]

const Dashboard = () => {
  return (
    <div>
        <Heading innerText='Dashboard' />

        {/* See relevant data here */}
        <div className='m-6 flex justify-between items-center gap-[50px]'>
            {
              data.map((item, index)=>(
                <div className='
                w-1/4 p-4 py-14 
                rounded-xl
                cursor-pointer
                bg-gradient-to-br from-red-700 to-red-400 hover:bg-gradient-to-tl
                ' key={index}>
                  <p className='text-2xl text-white'>{item.title}: <span>{item.total}</span></p>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Dashboard;