import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllSuccessStories } from '../Redux/SuccessStories/successStories.actions';
import SuccessStoryCard from '../Components/SuccessStories/SuccessStoryCard';

const SuccessStories = () => {
  const dispatch = useDispatch();
  const {stories, error, loading, message} = useSelector(store=>store.successStories);

  useEffect(()=>{
    dispatch(getAllSuccessStories());
    console.log(stories);
  }, [dispatch]);

  return (
    <div className='py-[60px]'>
      <h1 className='text-5xl text-sky-800 font-bold'>Success Stories</h1>
        <div className='w-[70%] m-auto my-[60px] flex flex-col gap-8'>
          {
            stories?.map((data, index)=>(
              <SuccessStoryCard index={index} key={data._id} story={data} />
            ))
          }
        </div>
    </div>
  )
}

export default SuccessStories