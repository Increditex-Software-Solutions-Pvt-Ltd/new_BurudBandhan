import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createMarriageProfile, getMarriageProfile } from '../../Redux/Profiles/profiles.actions';
import NewMarriage from './NewMarriage';
import PhysicallyDisabled from './PhysicallyDisabled';
import Remarriage from './Remarriage';
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
    const [gender, setGender] = useState("");

    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.user);
    const {profiles, profile, loading, error, message} = useSelector(store=>store.profile);

    const handleGender = (e)=>{
        setGender(e.target.value);
        console.log(gender);
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setMarriageProfile({...marriageProfile, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createMarriageProfile(marriageProfile));
        
    }

    // useEffect(()=>{
    //     dispatch(getMarriageProfile())

    // }, [dispatch]);

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
                

                <PersonalDetails marriageProfile={marriageProfile} handleChange={handleChange} handleGender={handleGender}/>
                <ProfessionalDetails handleChange={handleChange} />
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


                {/* select form by category */}
                {/* <div className='
                flex 
                items-center 
                gap-6
                text-xl
                
                '>
                    <div className='
                    flex items-center gap-2
                    rounded-full py-2 px-4 bg-sky-50
                    '>
                        <input 
                        className='cursor-pointer'
                        type='radio' 
                        id='new_marriage'
                        name='category'
                        value='new_marriage'
                        onChange={handleChange}
                        />
                        <label htmlFor='new_marriage'>नवीन विवाह (New Marriage)</label>
                    </div>

                    <div className='
                    flex items-center gap-2
                    rounded-full py-2 px-4 bg-sky-50
                    '>
                        <input
                        className='cursor-pointer' 
                        type='radio' 
                        id='physically_disabled'
                        name='category'
                        value='physically_disabled'
                        onChange={handleChange}
                        />
                        <label htmlFor='physically_disabled'>शारीरिकदृष्ट्या अक्षम (Physically disabled)</label>
                    </div>

                    <div className='
                    flex items-center gap-2
                    rounded-full py-2 px-4 bg-sky-50
                    '>
                        <input 
                        className='cursor-pointer'
                        type='radio' 
                        id='remarriage'
                        name='category'
                        value='remarriage'
                        onChange={handleChange}
                        />
                        <label htmlFor='remarriage'>पुनर्विवाह (Re-marriage)</label>
                    </div>
                </div> */}
            </div>    

            {/* { 
                (marriageProfile.category == 'new_marriage') && <NewMarriage handleChange={handleChange} /> 
            }
            { 
                (marriageProfile.category == 'remarriage') && <Remarriage handleChange={handleChange} />
            }
            {
                (marriageProfile.category == 'physically_disabled') && <PhysicallyDisabled handleChange={handleChange} />
            }
                      */}
                
            
        </form>
    </div>
  )
}

export default MarriageForm;