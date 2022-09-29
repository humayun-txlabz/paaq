import React from "react";
const startIcon  = require('../../assets/Icons/feature-sec-4-breif.png');
const sec11 = require('../../assets/Images/feature-sec-4-1.png');

function SectionFour() {
  return (
    <div className="section-4">
      <div className="left">
          <div className="heading">
            <img src={startIcon} className="icon" />
            <div className="text">My Profession</div>
          </div>
          <p>This feature makes the connection of users effective within the PAAQ community. Other users will be able to see your expertise and what you do for a living. Upon filling out your profile and describing what you do and sharing your achievements, our algorithm will suggest relevant contents and like-minded individuals within your field of specialisation. i.e., Photography, filmmaker, sculptor & artists of different kinds.</p>
      </div>
      <div className="right">
      <img src={sec11} className="image" />
      </div>
    </div>
  );
}

export default SectionFour;
