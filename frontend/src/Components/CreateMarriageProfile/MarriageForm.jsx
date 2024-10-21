import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createMarriageProfile, getMarriageProfile } from '../../Redux/Profiles/profiles.actions';
import PersonalDetails from './PersonalDetails';
import ProfessionalDetails from './ProfessionalDetails';
import FamilyDetails from './FamilyDetails';
import CommunicationDetails from './CommunicationDetails';

const iniProfile = {
    fullName:"",
    birthName:"",
    birthPlace:"",
    dateOfBirth:null,
    age:null,
    timeOfBirth:null,
    height:null,
    color:"",
    bloodGroup:"",
    photo:"",
    qualification:"",
    presentlyWorking:{
        status:null,
        category:null,
        details:null
    },
    annualIncome:"",
    expectation:"",
    hobbies:[],
    permanantAddress:"",
    fatherName:"",
    fatherOccupation:"",
    motherName:"",
    totalFamilyMembers:null,
    maternalUncleName:"",
    relativesSurnameList:[],
    email:"",
    personalContact:"",
    parentsContact:"",
    uncleContact:"",
    currentAddress:"",
    gender:"",
    category:"",
    details_of_physically_disability:"",
    details_of_previous_marriage:"",
    state:"",
    district:"",
    taluka:"",
    town:"",
    postalCode:""
}

const MarriageForm = () => {
    const [marriageProfile, setMarriageProfile] = useState(iniProfile);

    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.user);
    const {profiles, profile, loading, error, message} = useSelector(store=>store.profile);

   

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setMarriageProfile({...marriageProfile, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createMarriageProfile(marriageProfile));
        
    }


  return (
    <div className='py-[70px] bg-gray-100'>
        <form 
        onSubmit={handleSubmit}
        className='
        w-[60%] m-auto text-left
        bg-white shadow-lg
        '>
            {(error) && <p className='text-red-600'>{error}</p>}
            <div className='
            flex flex-col gap-6
            rounded-[10px]  p-10 '>
                

                <PersonalDetails marriageProfile={marriageProfile} handleChange={handleChange}/>
                <ProfessionalDetails marriageProfile={marriageProfile} handleChange={handleChange} />
                <FamilyDetails handleChange={handleChange} />
                <CommunicationDetails handleChange={handleChange} />

                <div className='mt-6 text-center'>
                    <input 
                    className=' 
                    bg-red-500  hover:bg-red-600
                    py-4 px-8 
                    text-white font-semibold
                    rounded-xl 
                    '
                    type='submit'
                    value='प्रोफाइल तयार करा'
                    />
                </div>

            </div>    

        </form>
    </div>
  )
}

export default MarriageForm;