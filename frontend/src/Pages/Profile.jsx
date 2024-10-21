import React from 'react'
import TopSection from '../Components/Profile/TopSection'
import Profiles from '../Components/Profile/Profiles'
import CreateProfile from '../Components/Profile/CreateProfile'

const Profile = () => {
  return (
    <div>
      <TopSection content={'जुळुन येती रेशीम गाठी...'} />
      <CreateProfile />
      <Profiles />
    </div>
  )
}

export default Profile