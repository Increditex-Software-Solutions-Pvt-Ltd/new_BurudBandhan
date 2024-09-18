import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import About from '../Pages/About';
import Search from '../Pages/Search';
import SuccessStories from '../Pages/SuccessStories';
import SuccessVideos from '../Pages/SuccessVideos';
import Profile from '../Pages/Profile';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import SmsVerification from '../Pages/SmsVerification';

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
          <Route path='/success_stories' element={<SuccessStories />} />
          <Route path='/success_videos' element={<SuccessVideos />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sms' element={<SmsVerification />} />
          <Route path='/*' element={<NotFound />} />
          
      </Routes>
  )
}

export default AllRoutes;