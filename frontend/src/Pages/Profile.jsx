import React, { useEffect } from 'react'
import TopSection from '../Components/Profile/TopSection'
import Profiles from '../Components/Profile/Profiles'
import CreateProfile from '../Components/Profile/CreateProfile'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/User/user.actions';
import { getAllMarriageProfiles } from '../Redux/Profiles/profiles.actions'


const Profile = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, user} = useSelector(store=>store.user);
  const {profiles, loading, error, message} = useSelector(store=>store.profile);
    
   
  useEffect(()=>{
    if(isAuthenticated)
      dispatch(getUser());
  },[dispatch]);

  useEffect(()=>{
    dispatch(getAllMarriageProfiles());
    console.log(profiles);
  }, [dispatch]);

  
  return (
    <div>
      <TopSection content={'जुळुन येती रेशीम गाठी...'} />
      {user && (user.role !== 'admin') && <CreateProfile />}
      {profiles && <Profiles profiles={profiles} />}
    </div>
  )
}

export default Profile