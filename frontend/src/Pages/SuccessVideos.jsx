import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import SuccessVideoCard from '../Components/SuccessVideos/SuccessVideoCard';
import { getAllSuccessVideos } from '../Redux/SuccessVideos/successVideos.actions';

const SuccessVideos = () => {
  const dispatch = useDispatch();
  const {videos, error, loading, message} = useSelector(store=>store.successVideos);

  useEffect(()=>{
    dispatch(getAllSuccessVideos());
    console.log(videos);
  }, [dispatch]);

  return (
    <div className='py-[60px]'>
      <h1 className='text-5xl text-sky-800 font-bold'>Success Videos</h1>
        <div className='w-[70%] m-auto my-[60px] flex flex-col gap-8'>
          {
            videos?.map((data, index)=>(
              <SuccessVideoCard index={index} key={data._id} video={data} />
            ))
          }
        </div>
    </div>
  )
}

export default SuccessVideos