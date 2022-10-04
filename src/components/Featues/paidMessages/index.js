import React from 'react'
import paidMiniProfile from '../../../assets/Icons/featuresPage/paid-mini-left.png';
import AskButtonComponent from './askBtn';
import bottomImage from '../../../assets/Icons/featuresPage/bottom-image.png';
import MiniCardWithIdentity from 'components/miniCardWithIdentity';
import miniVideoIcon from '../../../assets/Icons/featuresPage/mini-video-icon.png';
const PaidMessagesComponent = () => {
  
  const miniVideoComp = () => {
          return (
               <div style={{ padding: "1rem", background: "##E5F3F7" , borderRadius: '50%', width: '3rem', height: '3rem'}}>
                    <img src={miniVideoIcon} />
               </div>
          );
  }
  return (
       <div style={{position: 'relative', marginTop: '3rem'}}>
            <div className="left-paid-messages-component">
                 <h1>Dalsy Huang</h1>
                 <img className="profile-pic" src={paidMiniProfile} />
                 <h3>@daisyh</h3>
                 <p>Founder & CEO of Tesla </p>
                 <div className="followers-info">
                      <div className="inner">
                           <h1>102</h1>
                           <p>Following</p>
                      </div>
                      <div className="inner">
                           <h1>102</h1>
                           <p>Following</p>
                      </div>
                      <div className="inner">
                           <AskButtonComponent />
                      </div>
                 </div>
                 <img className="bottom-img" src={bottomImage} />
            </div>
            <div className="left-card-mini-image-feature-paid-messages">
                 <div className="img-bg">
                      <img src={miniVideoIcon} />
                 </div>
                 <p>Video</p>
            </div>
            <div className="right-card-mini-image-feature-paid-messages">
                 <div className="img-bg">
                      <img src={miniVideoIcon} />
                 </div>
                 <p>Video</p>
            </div>
       </div>
  );
}

export default PaidMessagesComponent