import React, { useEffect, useState } from "react";
import StartIcon from '../../assets/Icons/feature-sec-3-video.png';
// import Sec11 from '../../assets/Images/feature-sec-3-1.png';
// import InApp from '../../assets/InApp.gif';
// import inAppVideo from '../../../public/gifs/inApp.mov';
import ReactPlayer from "react-player";

// svg
import camera from '../../assets/inApp/camera.png'
import InAppAnimation from "components/InAppAnimation";

function SectionInApp() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="section-3 section-3-modify" id="IntroductionVideo">

      <div className="right in-web-left">
        {/* <img src={InApp} className="image" /> */}
        <div className="in-app-video">
          {domLoaded && (
            <ReactPlayer
              className="react-player-question"
              url="gifs/inApp.mov"
              width="100%"
              height="100%"
              loop={true}
              playing={true}
              muted={true}
            />
          )}
          <div className="in-app-video-abs">
            {/* <div className="in-app-video-abs-cross-parent">
              <div className="in-app-video-abs-cross" style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M0.159323 7.03734C-0.0489679 7.24562 -0.0588865 7.61754 0.164283 7.83573C0.382493 8.05392 0.754441 8.04896 0.962732 7.84069L3.99783 4.80087L7.03789 7.84069C7.25114 8.05392 7.61813 8.05392 7.83634 7.83573C8.04959 7.61258 8.05455 7.25058 7.83634 7.03734L4.80124 3.99752L7.83634 0.962657C8.05455 0.749423 8.05455 0.382463 7.83634 0.16427C7.61317 -0.0489641 7.25114 -0.053923 7.03789 0.159311L3.99783 3.19913L0.962732 0.159311C0.754441 -0.0489641 0.377533 -0.0588819 0.164283 0.16427C-0.0539272 0.382463 -0.0489679 0.754382 0.159323 0.962657L3.19938 3.99752L0.159323 7.03734Z" fill="white" />
                </svg>
              </div>
            </div> */}
            <div className="in-app-video-abs-camera" style={{paddingTop:'150px'}}>
              <div>
              <img src={camera} alt="" />
              </div>
            </div>
            <p className="in-app-video-abs-header-1">Introduction Video</p>
            <p className="in-app-video-abs-header-2">Create an introduction video and receive a <br/> verification badge as long as the person in <br/> the video matches your profile picture. </p>
          <InAppAnimation/>
          {/* <div className="in-app-video-abs-btn">
            <button>Get Started</button>
          </div> */}
          </div>
        </div>
      </div>
      <div className="left in-app-text">
        <div className="heading">

          <div className="text"><img src={StartIcon} className="icon" />In-App Video</div>
        </div>
        <p>This feature allows users to make an introduction video so that other PAAQ users can get to know them.
          <br />
          <br />
          The introduction video feature also serves as a verification tool because it can not be uploaded to prevent account impersonation.</p>
     
      </div>
      <div className="right in-mobile-right">
        {/* <img src={InApp} className="image" /> */}
        <div className="in-app-video">
          {domLoaded && (
            <ReactPlayer
              className="react-player-question"
              url="gifs/inApp.mov"
              width="100%"
              height="100%"
              loop={true}
              playing={true}
              muted={true}
            />
          )}
          <div className="in-app-video-abs" style={{paddingTop:'35px'}}>
            {/* <div className="in-app-video-abs-cross-parent">
              <div className="in-app-video-abs-cross" style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M0.159323 7.03734C-0.0489679 7.24562 -0.0588865 7.61754 0.164283 7.83573C0.382493 8.05392 0.754441 8.04896 0.962732 7.84069L3.99783 4.80087L7.03789 7.84069C7.25114 8.05392 7.61813 8.05392 7.83634 7.83573C8.04959 7.61258 8.05455 7.25058 7.83634 7.03734L4.80124 3.99752L7.83634 0.962657C8.05455 0.749423 8.05455 0.382463 7.83634 0.16427C7.61317 -0.0489641 7.25114 -0.053923 7.03789 0.159311L3.99783 3.19913L0.962732 0.159311C0.754441 -0.0489641 0.377533 -0.0588819 0.164283 0.16427C-0.0539272 0.382463 -0.0489679 0.754382 0.159323 0.962657L3.19938 3.99752L0.159323 7.03734Z" fill="white" />
                </svg>
              </div>
            </div> */}
            <div className="in-app-video-abs-camera">
              <div>
              <img src={camera} alt="" />
              </div>
            </div>
            <p className="in-app-video-abs-header-1">Introduction Video</p>
            <p className="in-app-video-abs-header-2">Create an introduction video and receive a <br/> verification badge as long as the person in <br/> the video matches your profile picture. </p>
          <InAppAnimation/>
          {/* <div className="in-app-video-abs-btn">
            <button>Get Started</button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionInApp;
