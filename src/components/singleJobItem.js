import React, { useEffect, useState } from "react";
import tagBlack from "../assets/Icons/jobs/tag-black.png";
import heartBlack from "../assets/Icons/jobs/heart-black.png";
import locationBlack from "../assets/Icons/jobs/location-black.png";
import heartWhite from '../assets/Icons/jobs/heart-white.png';
import { savedJobsInLocal } from "services/savedJobsLocalStorage";
const SingleJobItem = ({title, id, key}) => {
     const [isGrad, setIsGrad] = useState(false);
     useEffect(() => {
          const value = savedJobsInLocal.getSelected(id);
          console.log(id, value);
          setIsGrad(value);
     }, []);
     const changeIsSaved = () => {
          savedJobsInLocal.setSelectJob(id);
          const d = savedJobsInLocal.getSelected(id);
          setIsGrad(!isGrad);
     }
     return (
          <div key={key} className="single-job-item">
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
                                   isGrad ? `save-button-gradient` : `save-button`
                              }
                         >
                              <div onClick={() => {
                                   changeIsSaved(id)
                              }} style={{cursor: 'pointer'}} className="text">
                                   <img src={isGrad ? heartWhite : heartBlack} />
                                   Save
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingleJobItem;
