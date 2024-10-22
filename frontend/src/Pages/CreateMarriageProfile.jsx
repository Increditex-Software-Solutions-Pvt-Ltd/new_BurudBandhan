import React from 'react'
import TopSection from '../Components/Profile/TopSection';
import MarriageForm from '../Components/CreateMarriageProfile/MarriageForm';

const CreateMarriageProfile = () => {
  return (
    <div>
      <TopSection content={'तुमची विवाह प्रोफाइल तयार करा आणि तुमचा परिपूर्ण जोडीदार शोधा'} />
      <MarriageForm />
    </div>
  )
}

export default CreateMarriageProfile;