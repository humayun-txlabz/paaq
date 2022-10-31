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
                                Ask Button
                           </div>
                           {/* <img src={askIcon} className="icon" /> */}
                           
                           <br />
                           (Paid Message)
                      </div>
                 </div>
                 <p> 
                 A key feature of PAAQ is Ask. You can use this feature to interact with anyone by paying a fee to receive a reply to your message or question within 24 hours. In case a response is not received within the stipulated time, you will receive a refund.
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
