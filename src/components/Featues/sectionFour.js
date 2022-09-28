import React from "react";
const startIcon  = require('../../assets/Icons/feature-sec-4-breif.png');
const sec11 = require('../../assets/Images/feature-sec-1-1.png');

function SectionFour() {
  return (
    <div className="section-4">
      <div className="left">
          <div className="heading">
            <img src={startIcon} className="icon" />
            <div className="text">My Profession</div>
          </div>
          <p>Having a delicious meal with a chilled cocktail on a sunny day or travelling the world with family and friends to our favourite locations is beautiful, but being rewarded for socialising and sharing your unique skills on PAAQ is even more attractive.</p>
      </div>
      <div className="right">
      <img src={sec11} className="image" />
      </div>
    </div>
  );
}

export default SectionFour;
