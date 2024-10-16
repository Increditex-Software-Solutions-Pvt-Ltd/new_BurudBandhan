import React from 'react';
import { useDispatch } from "react-redux";
import { createMarriageProfile } from '../../Redux/Profiles/profiles.actions';

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
    const dispatch = useDispatch();

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
                <input 
                onChange={handleChange}
                value={marriageProfile.fullName}
                name='fullName' 
                type='text' 
                placeholder='Full Name'
                />
            </div>
        </form>
    </div>
  )
}

export default MarriageForm;