import React, { useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";
import StartIcon from "../../assets/Icons/feature-sec-4-breif.png";

import Image1 from "../../assets/Icons/featureSecLast/0.png";
import Image2 from "../../assets/Icons/featureSecLast/1.png";
import Image3 from "../../assets/Icons/featureSecLast/2.png";
import Image4 from "../../assets/Icons/featureSecLast/3.png";
import Image5 from "../../assets/Icons/featureSecLast/4.png";
import Image6 from "../../assets/Icons/featureSecLast/5.png";
import Image7 from "../../assets/Icons/featureSecLast/6.png";
import Image8 from "../../assets/Icons/featureSecLast/7.png";
import Logo from "../../assets/Icons/featureSecLast/logo.png";

const SectionMyProfession =() => {
  const [isInViewport, targetRef] = useIsInViewport();

  const [isShow, setIsShow] = useState(1);

  useEffect(() => {
     if(isInViewport == true) {
          setIsShow(isShow+1);
     } 
  }, [isInViewport])

  return (
       <div ref={targetRef} className="section-4 section-4-modify" id="MyProfession">
            <div className="left">
                 <div className="heading">
                      <img src={StartIcon} className="icon" />
                      <div className="text">My Profession</div>
                 </div>
                 <p>
                 Through this feature, users can connect effectively within PAAQ. Your profile will suggest relevant content and other like-minded people in your field of expertise once you've filled out your profile and described what you do.
                 </p>
            </div>
            <div className="right">
                 <div
                      className={`uDiv1 ${
                           isShow >= 2 ? "uDiv1Anim" : ""
                      }`}
                 >
                      <img src={Image1} className="icon" />
                      <div className="profession-pill-text">Dancer</div>
                 </div>
                 <div
                      className={`uDiv2 ${
                           isShow >= 2 ? "uDiv2Anim" : ""
                      }`}
                 >
                      <img src={Image2} className="icon" />
                      <div className="profession-pill-text">Student</div>
                 </div>
                 <div
                      className={`uDiv3 ${
                           isShow >= 2 ? "uDiv3Anim" : ""
                      }`}
                 >
                      <img src={Image3} className="icon" />
                      <div className="profession-pill-text">HR Manager</div>
                 </div>
                 <div
                      className={`uDiv4 ${
                            isShow >= 2 ? "uDiv4Anim" : ""
                      }`}
                 >
                      <img src={Image4} className="icon" />
                      <div className="profession-pill-text">Yoga Instructor</div>
                 </div>
                 <div
                      className={`uDiv5 ${
                            isShow >= 2 ? "uDiv5Anim" : ""
                      }`}
                 >
                      <img src={Image5} className="icon" />
                      <div className="profession-pill-text">Artist</div>
                 </div>
                 <div
                      className={`uDiv6 ${
                           isShow >= 2 ? "uDiv6Anim" : ""
                      }`}
                 >
                      <img src={Image6} className="icon" />
                      <div className="profession-pill-text">Venture Capitalist</div>
                 </div>
                 <div
                      className={`uDiv7 ${
                          isShow >= 2 ? "uDiv7Anim" : ""
                      }`}
                 >
                      <img src={Image7} className="icon" />
                      <div className="profession-pill-text">3D Designer</div>
                 </div>
                 <div
                      className={`uDiv8 ${
                            isShow >= 2 ? "uDiv8Anim" : ""
                      }`}
                 >
                      <img src={Image8} className="icon" />
                      <div className="profession-pill-text">Accountant</div>
                 </div>
                 <div className="logo" >
                      <img src={Logo} className="icon" />
                 </div>
            </div>
       </div>
  );
}

export default SectionMyProfession;
