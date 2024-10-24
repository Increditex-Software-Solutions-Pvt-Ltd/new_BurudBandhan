import React, { useEffect } from 'react'
import TopSection from '../Components/Profile/TopSection'
import Profiles from '../Components/Profile/Profiles'
import CreateProfile from '../Components/Profile/CreateProfile'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/User/user.actions'

const Profile = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, user} = useSelector(store=>store.user);

  useEffect(()=>{
    if(isAuthenticated)
      dispatch(getUser());
  },[dispatch]);
  
  return (
    <div>
      <TopSection content={'जुळुन येती रेशीम गाठी...'} />
      {user && (user.role !== 'admin') && <CreateProfile />}
      <Profiles />
    </div>
  )
}

export default Profile