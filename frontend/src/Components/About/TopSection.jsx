import React from 'react';
import ringCeremony from "../../Assets/ring_ceremony.jpg";
import burudBandhan_logo from "../../Assets/burudBandhan_logo.jpeg";

const TopSection = () => {
  return (
    <div>
        <div 
        style={{
            backgroundImage: `url(${ringCeremony})`,
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'invert(40%)'
        }}
        className='h-[500px]'
        >
            {/* <img className='w-full' src={marriageHandImage} alt='image_1' /> */}

            <div>
                {/* logo image */}
                <img className='w-[150px] h-[150px] m-auto' src={burudBandhan_logo} alt='logo' />
            </div>
        </div>
       
    </div>
  )
}

export default TopSection