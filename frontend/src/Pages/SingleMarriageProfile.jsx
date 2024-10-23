import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getMarriageProfileByProfileId } from '../Redux/Profiles/profiles.actions';

const SingleMarriageProfile = () => {
    const dispatch = useDispatch();
    const {profile, loading, error} = useSelector(store=>store.profile);
    const { profileId } = useParams();

    useEffect(()=>{
        
        dispatch(getMarriageProfileByProfileId(profileId));
        // console.log(profile);
    },[dispatch]);

  return (
    <div>
        <div className='text-left'>
            <div className='border text-center'>
                <img className='w-[200px] h-[200px] m-auto' src={profile?.photo} />
            </div>
            {/* Personal details */}
            <div>
                <div className='flex items-center gap-6'>
                    <p>Full Name:</p>
                    <p>{profile?.fullName}</p>
                </div>

                <div className='flex items-center gap-6'>
                    <p>Gender:</p>
                    <p>{profile?.gender}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Birth Name:</p>
                    <p>{profile?.birthName}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Birth Place:</p>
                    <p>{profile?.birthPlace}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Date of Birth:</p>
                    <p>{profile?.dateOfBirth}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Time of Birth:</p>
                    <p>{profile?.timeOfBirth}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Age:</p>
                    <p>{profile?.age}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Height:</p>
                    <p>{profile?.height}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Color:</p>
                    <p>{profile?.color}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Date of Birth:</p>
                    <p>{profile?.dateOfBirth}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Blood Group:</p>
                    <p>{profile?.bloodGroup}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Date of Birth:</p>
                    <p>{profile?.dateOfBirth}</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p>Category:</p>
                    <p>{profile?.category}</p>
                </div>

            </div>

            {/* Professional details */}
            {/* Family details */}
            {/* Communication details */}


            

            
            
            
            
        </div>
        
    </div>
  )
}

export default SingleMarriageProfile;