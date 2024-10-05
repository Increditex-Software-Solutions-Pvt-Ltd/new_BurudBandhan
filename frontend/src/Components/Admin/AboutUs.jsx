import React from 'react';

import EditAboutUs from './EditAboutUs';
import Members from './Members';
import HeadingAndButtonFlex from './HeadingAndButtonFlex';



const AboutUs = () => {
  return (
    <div>
        {/* top section */}
        <HeadingAndButtonFlex heading={"About us"} buttonInnerText={"Add Member"} />

        {/* edit about us page */}
        <EditAboutUs />

        {/* Members */}
        <Members />
    </div>
  )
}

export default AboutUs;
