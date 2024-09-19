import React, { useState } from 'react';
import kailasHadge from "../../Assets/kailsahadage_2.jpg";
import mahendraPalse from "../../Assets/mahendra_palase.jpg";

const data = [
    {image: kailasHadge, member: "श्री.कैलास दत्तात्रय हादगे", position:"अध्यक्ष"},
    {image: mahendraPalse, member: "श्री. महेंद्र रामचंद्र पळसे", position: "उपाध्यक्ष "},
]




const MidSection = () => {
    const [workingTeam, setWorkingTeam] = useState(data);

  return (
    <div className='my-[100px]'>
        <h1 className='text-3xl font-bold text-orange-600'>अखिल महाराष्ट्र बुरूड समाज कार्यकारिणी मंडळ</h1>

        <div className='mt-[50px] flex justify-center gap-[100px]'>
            {
                workingTeam.map((item, indx) => (
                    <div key={indx}>
                        <div>
                            <img className='border border-red-700 w-[200px] h-[250px] rounded-lg' src={item.image} alt={item.member} />
                        </div>
                        <p className='mt-4 text-lg text-sky-950'>{item.member}</p>
                        <p className='font-bold mt-2 bg-red-500 w-fit m-auto px-6 py-2 text-white'>{item.position}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MidSection