import React from "react";
import tagBlack from "../assets/Icons/jobs/tag-black.png";
import heartBlack from "../assets/Icons/jobs/heart-black.png";
import locationBlack from "../assets/Icons/jobs/location-black.png";
import heartWhite from '../assets/Icons/jobs/heart-white.png';
const SingleJobItem = ({isGradBtn, title}) => {
     return (
          <div className="single-job-item">
               <div className="inner-container">
                    <div className="left">
                         <h1>{title}</h1>
                         <div className="bottom-flex-row">
                              <div className="left">
                                   <p>
                                        <img src={locationBlack} />
                                        Remote
                                   </p>
                                   <p style={{marginLeft: '2rem'}}>
                                        <img src={tagBlack} />
                                        Engineering
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="right">
                         <div
                              className={
                                   isGradBtn ? `save-button-gradient` : `save-button`
                              }
                         >
                              <div className="text">
                                   <img src={isGradBtn ? heartWhite : heartBlack} />
                                   Save
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingleJobItem;
