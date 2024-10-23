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
            :<div className='
             w-[80%] m-auto my-[80px] p-4 text-left
            grid 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            gap-10
            '>
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