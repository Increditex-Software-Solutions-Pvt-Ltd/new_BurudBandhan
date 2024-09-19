import React, { useState } from 'react'
import TopSection from '../Components/Home/TopSection';
import Steps from '../Components/Home/Steps';
import Footer from '../Components/Footer';
import LatestProfiles from '../Components/Home/LatestProfiles';
import FaQ from '../Components/FaQ';




const Home = () => {

  return (
    <div className=''>
      <TopSection />

      <Steps/>
      <LatestProfiles />
      <FaQ />

    </div>
  )
}

export default Home