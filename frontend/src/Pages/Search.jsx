import React, { useEffect } from 'react'
import Sidebar from '../Components/Search/Sidebar';
import SearchNavbar from '../Components/Search/SearchNavbar';
import Profiles from '../Components/Profile/Profiles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMarriageProfiles, getMarriageProfilesBySearch } from '../Redux/Profiles/profiles.actions';

const Search = () => {
  const dispatch = useDispatch();
  const {profiles, loading, error, message} = useSelector(store=>store.profile);


  const handleSearch = (e)=>{
      dispatch(getMarriageProfilesBySearch(e.target.value));
  }

  useEffect(()=>{
    dispatch(getAllMarriageProfiles());
    console.log(profiles);
  }, [dispatch]);

  return (
    <div>
      <SearchNavbar handleSearch={handleSearch}  />
      <div className=''>
        {/* <Sidebar/> */}
        {profiles && <Profiles profiles={profiles} />}
      </div>

    </div>
  )
}

export default Search;