import React from 'react'

const ProfileCard = ({profile}) => {
  return (
    <div >
        <div >
            <img className='w-[180px] h-[180px] m-auto border border-red-400' src={profile.photo} alt='photo' />
        </div>
        <div>
            <p>{profile.fullName}</p> 
            <p>{profile.age} Years | {profile.height} ft</p>
            <p>{profile.qualification}</p>
            <p>{profile.presentlyWorking?.designation}</p>
            <p>{profile.city}, {profile.dist}</p>   
        </div>                   
    </div>
  )
}

export default ProfileCard