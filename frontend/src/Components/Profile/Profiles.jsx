import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllUserProfiles } from '../../Redux/Profiles/profiles.actions';


const Profiles = () => {
    const dispatch = useDispatch();
    const {profiles, loading, error, message} = useSelector(store=>store.profile);
    
    useEffect(()=>{
        dispatch(getAllUserProfiles());
    }, [dispatch]);
    return (
    <div>
        {
            (profiles.length == 0)?<div>Not found</div>
            :profiles && profiles?.map((item, index)=>(
                <div>{index}</div>
            ))
        }
    </div>
  )
}

export default Profiles