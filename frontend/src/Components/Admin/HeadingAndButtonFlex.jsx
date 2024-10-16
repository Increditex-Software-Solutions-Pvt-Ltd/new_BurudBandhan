import React, { useState } from 'react';
import { MdAdd } from "react-icons/md";
import AddStoryModal from './AddStoryModal';
import AddVideoModal from './AddVideoModal';
import AddMemberModal from './AddMemberModal';


const HeadingAndButtonFlex = ({heading, buttonInnerText}) => {
  const [modalName, setModalName] = useState(buttonInnerText);
  const [isVisible, setIsVisible] = useState (false);

  const onOpen = (story)=>{
    setIsVisible(true);
  }
  const onClose = ()=>{
    setIsVisible(false);
  }


  return (
    <div className='p-6 flex justify-between items-center relative'>
            <h1 className='text-left text-3xl font-bold text-sky-950'>{heading}</h1>
            <div 
            onClick={onOpen}
            className='
            flex gap-2
            justify-center 
            items-center 
            border rounded-full
            bg-green-600 hover:bg-green-700 text-white
            py-4 px-6
            cursor-pointer
            text-[18px]
            '>
                {/* add icon */}
                <MdAdd />
                <p>{buttonInnerText}</p>
                
            </div>

            {/* open modal based on inner text of button */}
            {
              (modalName == "Add New Story") ? <AddStoryModal isVisible={isVisible} onClose={onClose} />
              :(modalName == "Add New Video")?<AddVideoModal isVisible={isVisible} onClose={onClose} />
              :<AddMemberModal isVisible={isVisible} onClose={onClose} />
            }

            
    </div>
  )
}

export default HeadingAndButtonFlex;