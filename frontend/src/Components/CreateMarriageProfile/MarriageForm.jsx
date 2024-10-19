import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createMarriageProfile } from '../../Redux/Profiles/profiles.actions';
import NewMarriage from './NewMarriage';
import PhysicallyDisabled from './PhysicallyDisabled';
import Remarriage from './Remarriage';

const iniProfile = {
    fullName:"",
    birthName:"",
    birthPlace:"",
    dateOfBirth:null,
    timeOfBirth:null,
    height:null,
    color:"",
    bloodGroup:"",
    photo:"",
    qualification:"",
    presentlyWorking:"",
    annualIncome:"",
    expectation:"",
    hobbies:[],
    permanantAddress:"",
    fatherName:"",
    fatherOccupation:"",
    motherName:"",
    familyMembers:null,
    maternalUncleName:"",
    relativesSurnameList:[],
    email:"",
    personalContact:"",
    parentsContact:"",
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

  return (
    <div className='py-[70px] bg-gray-100'>
        <form className=' shadow-xl 
        w-[60%] m-auto text-left
        p-10 bg-white flex flex-col gap-6
        '>
            <div className='border-b pb-6'>
                <select 
                className='text-xl p-4 focus:outline-none cursor-pointer' 
                onChange={handleGender}
                >
                    <option value="">कृपया लिंग निवडा</option>
                    <option value="male">पुरुष</option>
                    <option value="female">स्त्री</option>
                </select>

                {/* select form by category */}
                <div className='
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
                </div>
            </div>    

            { 
                (marriageProfile.category == 'new_marriage') && <NewMarriage handleChange={handleChange} /> 
            }
            { 
                (marriageProfile.category == 'remarriage') && <Remarriage />
            }
            {
                (marriageProfile.category == 'physically_disabled') && <PhysicallyDisabled />
            }
                     
                
            
        </form>
    </div>
  )
}

export default MarriageForm;