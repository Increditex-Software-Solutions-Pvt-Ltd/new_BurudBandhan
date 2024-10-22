import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllMarriageProfiles } from '../../Redux/Profiles/profiles.actions';


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
            (profiles.length == 0)?<div>Not found</div>
            :profiles && profiles?.map((data, index)=>(
                <div key={data._id}>
                    <div>
                        <img src={data.photo} alt='photo' />
                    </div>
                    <div>
                        <p>{data.fullName}</p> 
                        <p>{data.age} Years | {data.height} ft</p>
                        <p>{data.qualification}</p>
                        <p>{data.city}, {data.dist}</p>   
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Profiles