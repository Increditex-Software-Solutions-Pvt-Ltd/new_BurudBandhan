import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getMarriageProfileByProfileId } from '../Redux/Profiles/profiles.actions';
import PersonalDetails from '../Components/SingleMarriageProfile/PersonalDetails';
import ProfessionalDetails from '../Components/SingleMarriageProfile/ProfessionalDetails';
import FamilyDetails from '../Components/SingleMarriageProfile/FamilyDetails';
import CommunicationDetails from '../Components/SingleMarriageProfile/CommunicationDetails';

const SingleMarriageProfile = () => {
    const dispatch = useDispatch();
    const {profile, loading, error} = useSelector(store=>store.profile);
    const { profileId } = useParams();

    useEffect(()=>{
        
        dispatch(getMarriageProfileByProfileId(profileId));
        // console.log(profile);
    },[dispatch]);

  return (
    <div className='bg-gray-50 py-[80px]'>
        <div className='border 
        w-[50%] m-auto  
        p-6 py-10 text-left
        flex flex-col gap-6
        bg-white
         '>
            <div className='text-center'>
                <img className='border border-gray-200 w-[200px] h-[200px] m-auto' src={profile?.photo} />
            </div>
            {/* Personal details */}
            <h1 className='text-xl text-sky-800 font-bold'>वैयक्तिक माहिती (Personal Details)</h1>
            <PersonalDetails profile={profile} />

            {/* Professional details */}
            <h1 className='text-xl text-sky-800 font-bold'>व्यावसायिक माहिती (Professional Details)</h1>
            <ProfessionalDetails profile={profile} />

            {/* Family details */}
            <h1 className='text-xl text-sky-800 font-bold'>कौटुंबिक माहिती</h1>
            <FamilyDetails profile={profile} />

            {/* Communication details */}
            <h1 className='text-xl text-sky-800 font-bold'>Communication Details</h1>
            <CommunicationDetails profile={profile} />


            

            
            
            
            
        </div>
        
    </div>
  )
}

export default SingleMarriageProfile;