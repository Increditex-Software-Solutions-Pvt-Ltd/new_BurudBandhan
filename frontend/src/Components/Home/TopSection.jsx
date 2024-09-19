import React from 'react';
import marriageVideo from "../../Assets/marriageVideo.mp4";
import burudLogo from "../../Assets/burudBandhan_logo.jpeg";

const TopSection = () => {
  return (
    <div>
      <div className='relative mb-[80px]'>
        {/* video playing as a background */}
        <video autoPlay muted loop 
        style={{
          filter:'brightness(50%)'
        }}
        className='w-full h-[85vh] object-cover'>
          <source src={marriageVideo} type='video/mp4' />
        </video>

        <div className='rounded-xl absolute top-20 left-0 right-0 m-auto bg-white w-fit p-5'>
          <img className='rotate-image w-[150px] h-[150px] rounded-full m-auto' src={burudLogo} alt='logo' />
          <h1 className='text-[60px] font-bold  text-red-600'>महाराष्ट्रातील</h1>
          <p className='text-2xl text-sky-950 mt-4'>सर्व बुरूड बांधवांसाठी, नामांकित व विश्वसनीय ऑनलाइन विवाह संस्था </p>

          <button className='mt-6 bg-red-600 hover:bg-red-700 px-8 py-4 text-white rounded-full text-2xl font-semibold'>आजच फ्री नोंदणी करा </button>
        </div>
      </div>


    </div>
  )
}

export default TopSection;

