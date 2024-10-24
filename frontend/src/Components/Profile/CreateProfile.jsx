import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getMarriageProfileByUserId } from '../../Redux/Profiles/profiles.actions';

const CreateProfile = () => {
    const btnRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {myprofile, error, loading} = useSelector(store=>store.profile);

    const handleClick = ()=>{
      if(btnRef.current.innerText === "Create Your Profile")
        navigate("/create-marriage-profile");
      else
        navigate("/update-marriage-profile");
    }

    useEffect(()=>{
      dispatch(getMarriageProfileByUserId());
    },[dispatch]);

  return (
    <div className='text-right px-12 my-[50px]'>
        <button 
        ref={btnRef}
        onClick={handleClick}
        className='p-4 rounded-xl 
        text-white text-lg
        font-semibold 
        bg-red-600 hover:bg-red-500
        '>
          {(myprofile)?"Update Your Profile" : "Create Your Profile"}
        </button>
    </div>
  )
}

export default CreateProfile;