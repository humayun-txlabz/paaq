import React, { useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";
import PaidMessagesComponent from "./paidMessages";
 
const SectionPaidMessage =() => {

     const [isInViewport, targetRef] = useIsInViewport();
     const [isShow, setIsShow] = useState(1);

     useEffect(() => {
          if (isInViewport == true) {
               setIsShow(isShow + 1);
          }
     }, [isInViewport]);
  return (
       <div className="section-5">
            <div className="right in-web-left">
                 <PaidMessagesComponent />
                 {/* <img src={sec11} className="image" /> */}
            </div>
            <div className="left">
                 <div className="heading">
                      <div className="text">
                           <div
                                ref={targetRef}
                                className="big-ask-button"
                                
                           >
                                <div className="inner">
                                     <h3>Ask</h3>
                                </div>
                           </div>
                           {/* <img src={askIcon} className="icon" /> */}
                           Ask Button
                           <br />
                           (Paid Message)
                      </div>
                 </div>
                 <p>
                      This feature allows users to make an introduction video so that
                      other PAAQ users can get to know them. In addition, the video
                      introduction feature also serves as a verification tool because it
                      can not be uploaded since there is a unique QR code placed on it to
                      prevent account impersonation.
                 </p>
            </div>
            <div className="right in-mobile-right">
                 <PaidMessagesComponent />
                 {/* <img src={sec11} className="image" /> */}
            </div>
       </div>
  );
}

export default SectionPaidMessage;
