import React, { useState } from 'react'
import TopSection from '../Components/Home/TopSection';
import Steps from '../Components/Home/Steps';
import Footer from '../Components/Footer';
import LatestProfiles from '../Components/Home/LatestProfiles';




const Home = () => {

  return (
    <div className=''>
      {/* <TopSection /> */}

      <Steps/>
      <LatestProfiles />

      <Footer/>

    </div>
  )
}

export default Home