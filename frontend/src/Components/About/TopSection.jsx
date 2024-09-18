import React from 'react';
import marriageHandImage from "../../Assets/marriagehand.jpg";

const TopSection = () => {
  return (
    <div>
        <div 
        style={{
            backgroundImage: `url(${marriageHandImage})`,
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
        className='h-[500px]'
        >
            {/* <img className='w-full' src={marriageHandImage} alt='image_1' /> */}
        </div>
       
    </div>
  )
}

export default TopSection