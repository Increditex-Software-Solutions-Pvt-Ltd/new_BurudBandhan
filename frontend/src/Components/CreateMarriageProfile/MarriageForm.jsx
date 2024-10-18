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
    <div>
        <form>
            <div>
                <select onChange={handleGender}>
                    <option value="">Please select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                {/* select form by category */}
                <div>
                    <div>
                        <input 
                        className='cursor-pointer'
                        type='radio' 
                        id='new_marriage'
                        name='category'
                        value='new_marriage'
                        onChange={handleChange}
                        />
                        <label htmlFor='new_marriage'>New Marriage</label>
                    </div>

                    <div>
                        <input
                        className='cursor-pointer' 
                        type='radio' 
                        id='physically_disabled'
                        name='category'
                        value='physically_disabled'
                        onChange={handleChange}
                        />
                        <label htmlFor='physically_disabled'>Physically Disabled</label>
                    </div>

                    <div>
                        <input 
                        className='cursor-pointer'
                        type='radio' 
                        id='remarriage'
                        name='category'
                        value='remarriage'
                        onChange={handleChange}
                        />
                        <label htmlFor='remarriage'>Re-marriage</label>
                    </div>
                </div>

                { 
                    (marriageProfile.category == 'new_marriage') && <NewMarriage handleChange={handleChange} /> 
                }
                  { (marriageProfile.category == 'remarriage') && <Remarriage />}
                   {(marriageProfile.category == 'physically_disabled') && <PhysicallyDisabled />}
                     
                
            </div>
        </form>
    </div>
  )
}

export default MarriageForm;