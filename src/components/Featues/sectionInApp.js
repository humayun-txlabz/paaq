import React from "react";
import StartIcon from '../../assets/Icons/feature-sec-3-video.png';
import Sec11 from '../../assets/Images/feature-sec-3-1.png';

function SectionInApp() {
  return (
    <div className="section-3">

      <div className="right in-web-left">
      <img src={Sec11} className="image" />
      </div>
      <div className="left">
          <div className="heading">
            
            <div className="text"><img src={StartIcon} className="icon" />In-app <br/>Introduction Video</div>
          </div>
          <p>This feature allows users to make an introduction video so that other PAAQ users can get to know them. In addition, the video introduction feature also serves as a verification tool because it can not be uploaded since there is a unique QR code placed on it to prevent account impersonation.</p>
      </div>
      <div className="right in-mobile-right">
      <img src={Sec11} className="image" />
      </div>
    </div>
  );
}

export default SectionInApp;
