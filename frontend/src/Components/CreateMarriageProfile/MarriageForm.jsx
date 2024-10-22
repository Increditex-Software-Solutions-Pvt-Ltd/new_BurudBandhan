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
    dateOfBirth:"",
    age:0,
    timeOfBirth:"",
    height:0,
    color:"",
    bloodGroup:"",
    photo:"",
    qualification:"",
    presentlyWorking:{
        status:"",
        category:"",
        designation:"",
        details:""
    },
    annualIncome:"",
    expectation:"",
    hobbies:[],
    permenantAddress:"",
    fatherName:"",
    fatherOccupation:"",
    motherName:"",
    totalFamilyMembers:0,
    maternalUncleName:"",
    relativesSurnameList:[],
    email:"",
    personalContact:"",
    parentsContact:"",
    uncleContact:"",
    currentAddress:"",
    gender:"",
    category:"",
    city:"",
    dist:"",
    // details_of_physically_disability:"",
    // details_of_previous_marriage:""
}

const MarriageForm = () => {
    const [marriageProfile, setMarriageProfile] = useState(iniProfile);

    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.user);
    const {profiles, profile, loading, error, message} = useSelector(store=>store.profile);

   

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setMarriageProfile({...marriageProfile, [name]:value});
        console.log(marriageProfile);
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
            
            <div className='
            flex flex-col gap-6
            rounded-[10px]  p-10 '>

                {(error) && <p className='text-red-600'>{error}</p>}
                {(message) && <p className='text-green-600'>{message}</p>}
                
                {/* personal details */}
                <PersonalDetails 
                marriageProfile={marriageProfile} 
                handleChange={handleChange}/>
                
                {/* all profession details */}
                <ProfessionalDetails 
                marriageProfile={marriageProfile} 
                setMarriageProfile={setMarriageProfile} 
                handleChange={handleChange} />

                {/* add family details here */}
                <FamilyDetails 
                marriageProfile={marriageProfile}
                setMarriageProfile={setMarriageProfile} 
                handleChange={handleChange} />

                {/* communication details like contact number, address and so on */}
                <CommunicationDetails 
                marriageProfile={marriageProfile} 
                handleChange={handleChange} />

                {/* submit button */}
                <div className='mt-6 text-center'>
                    <input 
                    className=' 
                    bg-red-500  hover:bg-red-600
                    py-4 px-8 
                    text-white font-semibold
                    rounded-xl 
                    '
                    type='submit'
                    // value={ loading? "loading..." : "प्रोफाइल तयार करा"}
                    value="प्रोफाइल तयार करा"
                    />
                </div>

            </div>    

        </form>
    </div>
  )
}

export default MarriageForm;