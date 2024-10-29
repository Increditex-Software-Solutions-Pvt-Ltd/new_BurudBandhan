import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Search/Sidebar';
import SearchNavbar from '../Components/Search/SearchNavbar';
import Profiles from '../Components/Profile/Profiles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMarriageProfiles, getMarriageProfilesByFilter, getMarriageProfilesBySearch } from '../Redux/Profiles/profiles.actions';

const Search = () => {
  const dispatch = useDispatch();
  const {profiles, loading, error, message} = useSelector(store=>store.profile);

  const handleSearch = (e)=>{
      dispatch(getMarriageProfilesBySearch(e.target.value));
  }

  const handleGender = (gender)=>{
    dispatch(getMarriageProfilesByFilter(gender));
  }

  useEffect(()=>{
    dispatch(getAllMarriageProfiles());
    console.log(profiles);
  }, [dispatch]);


  return (
    <div>
      <SearchNavbar handleGender={handleGender} handleSearch={handleSearch}  />
      <div className=''>
        {/* <Sidebar/> */}
        {profiles && <Profiles profiles={profiles} />}
      </div>

    </div>
  )
}

export default Search;