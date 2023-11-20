import React from "react";
import StartIcon from '../../assets/Icons/feature-sec-3-video.png';
import Sec11 from '../../assets/Images/feature-sec-3-1.png';
import InApp from '../../assets/InApp.gif';

function SectionInApp() {
  return (
    <div className="section-3 section-3-modify" id="IntroductionVideo">

      <div className="right in-web-left">
      <img src={InApp} className="image" />
      {/* <video style={{zIndex:'1000000'}} src={InApp}></video> */}
      </div>
      <div className="left">
          <div className="heading">
            
            <div className="text"><img src={StartIcon} className="icon" />In-app <br/>Introduction Video</div>
          </div>
          <p>This feature allows users to make an introduction video so that other PAAQ users can get to know them. 
<br/>
<br/>
The introduction video feature also serves as a verification tool because it can not be uploaded to prevent account impersonation.</p>
      </div>
      <div className="right in-mobile-right">
      <img src={InApp} className="image" />
      </div>
    </div>
  );
}

export default SectionInApp;
