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
       <div ref={targetRef} className="section-4">
            <div className="left">
                 <div className="heading">
                      <img src={StartIcon} className="icon" />
                      <div className="text">My Profession</div>
                 </div>
                 <p>
                      This feature makes the connection of users effective within the PAAQ
                      community. Other users will be able to see your expertise and what
                      you do for a living. Upon filling out your profile and describing
                      what you do and sharing your achievements, our algorithm will
                      suggest relevant contents and like-minded individuals within your
                      field of specialisation. i.e., Photography, filmmaker, sculptor &
                      artists of different kinds.
                 </p>
            </div>
            <div className="right">
                 <div
                      className={`uDiv1 ${
                           isInViewport && isShow <= 2 ? "uDiv1Anim" : ""
                      }`}
                 >
                      <img src={Image1} className="icon" />
                      <div>Dancer</div>
                 </div>
                 <div
                      className={`uDiv2 ${
                           isInViewport && isShow <= 2 ? "uDiv2Anim" : ""
                      }`}
                 >
                      <img src={Image2} className="icon" />
                      <div>Student</div>
                 </div>
                 <div
                      className={`uDiv3 ${
                           isInViewport && isShow <= 2 ? "uDiv3Anim" : ""
                      }`}
                 >
                      <img src={Image3} className="icon" />
                      <div>HR Manager</div>
                 </div>
                 <div
                      className={`uDiv4 ${
                           isInViewport && isShow <= 2 ? "uDiv4Anim" : ""
                      }`}
                 >
                      <img src={Image4} className="icon" />
                      <div>Yoga Instructor</div>
                 </div>
                 <div
                      className={`uDiv5 ${
                           isInViewport && isShow <= 2 ? "uDiv5Anim" : ""
                      }`}
                 >
                      <img src={Image5} className="icon" />
                      <div>Artist</div>
                 </div>
                 <div
                      className={`uDiv6 ${
                           isInViewport && isShow <= 2 ? "uDiv6Anim" : ""
                      }`}
                 >
                      <img src={Image6} className="icon" />
                      <div>Venture Capitalist</div>
                 </div>
                 <div
                      className={`uDiv7 ${
                           isInViewport && isShow <= 2 ? "uDiv7Anim" : ""
                      }`}
                 >
                      <img src={Image7} className="icon" />
                      <div>3D Designer</div>
                 </div>
                 <div
                      className={`uDiv8 ${
                           isInViewport && isShow <= 2 ? "uDiv8Anim" : ""
                      }`}
                 >
                      <img src={Image8} className="icon" />
                      <div>Accountant</div>
                 </div>
                 <div className="logo">
                      <img src={Logo} className="icon" />
                 </div>
            </div>
       </div>
  );
}

export default SectionMyProfession;
