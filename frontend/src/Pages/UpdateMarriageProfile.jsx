import React from 'react'
import TopSection from '../Components/Profile/TopSection';
import MarriageForm from '../Components/CreateMarriageProfile/MarriageForm';
import UpdateMarriageForm from '../Components/UpdateMarriageProfile/UpdateMarriageForm';

const UpdateMarriageProfile = () => {
  return (
    <div>
      <TopSection content={'तुमची विवाह प्रोफाइल अपडेट करा आणि तुमचा परिपूर्ण जोडीदार शोधा'} />
      <UpdateMarriageForm />
    </div>
  )
}

export default UpdateMarriageProfile;