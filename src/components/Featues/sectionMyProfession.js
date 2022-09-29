import React from "react";
import startIcon from "../../assets/Icons/feature-sec-4-breif.png";

import image1 from "../../assets/Icons/featureSecLast/0.png";
import image2 from "../../assets/Icons/featureSecLast/1.png";
import image3 from "../../assets/Icons/featureSecLast/2.png";
import image4 from "../../assets/Icons/featureSecLast/3.png";
import image5 from "../../assets/Icons/featureSecLast/4.png";
import image6 from "../../assets/Icons/featureSecLast/5.png";
import image7 from "../../assets/Icons/featureSecLast/6.png";
import image8 from "../../assets/Icons/featureSecLast/7.png";
import logo from "../../assets/Icons/featureSecLast/logo.png";

const SectionMyProfession =() => {
  return (
    <div className="section-4">
      <div className="left">
        <div className="heading">
          <img src={startIcon} className="icon" />
          <div className="text">My Profession</div>
        </div>
        <p>
          This feature makes the connection of users effective within the PAAQ
          community. Other users will be able to see your expertise and what you
          do for a living. Upon filling out your profile and describing what you
          do and sharing your achievements, our algorithm will suggest relevant
          contents and like-minded individuals within your field of
          specialisation. i.e., Photography, filmmaker, sculptor & artists of
          different kinds.
        </p>
      </div>
      <div className="right">
        <div className="uDiv1">
          <img src={image1} className="icon" />
          <div>Dancer</div>
        </div>
        <div className="uDiv2">
          <img src={image2} className="icon" />
          <div>Student</div>
        </div>
        <div className="uDiv3">
          <img src={image3} className="icon" />
          <div>HR Manager</div>
        </div>
        <div className="uDiv4">
          <img src={image4} className="icon" />
          <div>Yoga Instructor</div>
        </div>
        <div className="uDiv5">
          <img src={image5} className="icon" />
          <div>Artist</div>
        </div>
        <div className="uDiv6">
          <img src={image6} className="icon" />
          <div>Venture Capitalist</div>
        </div>
        <div className="uDiv7">
          <img src={image7} className="icon" />
          <div>3D Designer</div>
        </div>
        <div className="uDiv8">
          <img src={image8} className="icon" />
          <div>Accountant</div>
        </div>
        <div className="logo">
          <img src={logo} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default SectionMyProfession;