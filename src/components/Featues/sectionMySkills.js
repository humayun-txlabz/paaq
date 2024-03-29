import React from "react";
import StartIcon  from '../../assets/Icons/features-sec-1-start.png';
import MySkillImageComponent from './mySkillImg';
const SectionMySkills =() => {
  return (
    <div className="section-1" id='SectionMySkills' >
      <div className="left">
          <div className="heading">
            <img src={StartIcon} className="icon" />
            <div className="text">My Skills</div>
          </div>
          <p>Having a delicious meal with a chilled cocktail on a sunny day or travelling the world with family and friends to our favourite locations is beautiful, but being rewarded for socialising and sharing your unique skills on PAAQ is even more attractive.</p>
      </div>
      <div className="right">
      <MySkillImageComponent/>
      {/* <img src={sec11} className="image" /> */}
      </div>
    </div>
  );
}

export default SectionMySkills;
