import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllMarriageProfiles } from '../../Redux/Profiles/profiles.actions';
import ProfilesNotFound from './ProfilesNotFound';
import ProfileCard from './ProfileCard';


const Profiles = () => {
    const dispatch = useDispatch();
    const {profiles, loading, error, message} = useSelector(store=>store.profile);
    
    useEffect(()=>{
        dispatch(getAllMarriageProfiles());
        console.log(profiles);
    }, [dispatch]);

    return (
    <div>
        {   
            (profiles.length == 0)?<ProfilesNotFound />
            :<div>
                {
                    profiles && profiles?.map((data, index)=>(
                        <ProfileCard key={data._id} profile={data} />
                    ))
                }
            </div>
        }
    </div>
  )
}

export default Profiles