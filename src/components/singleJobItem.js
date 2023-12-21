import React, { useEffect, useState } from "react";
import tagBlack from "../assets/Icons/jobs/tag-black.png";
import heartBlack from "../assets/Icons/jobs/heart-black.png";
import locationBlack from "../assets/Icons/jobs/location-black.png";
import heartWhite from '../assets/Icons/jobs/heart-white.png';
import { savedJobsInLocal } from "services/savedJobsLocalStorage";
import Link from "next/link";

const SingleJobItem = ({item, key, type}) => {
     const [isGrad, setIsGrad] = useState(false);

     useEffect(() => {
          const value = savedJobsInLocal.getSelected(item.id);
          setIsGrad(value);
     }, []);

     const changeIsSaved = () => {
          savedJobsInLocal.setSelectJob(item.id);
          const d = savedJobsInLocal.getSelected(item.id);
          setIsGrad(!isGrad);
     }

     return (
          <Link href={type ? "featuredJobs/[id]" : "/jobs/[id]"} as={type ? `/featuredJobs/${item.id}` : `/jobs/${item.id}`}>
          <div key={key} className="single-job-item">
               <div className="inner-container">
                    <div className="left">
                         <h1>{item.title}</h1>
                         <div className="bottom-flex-row">
                              <div className="left">
                                   <p>
                                        <img src={locationBlack} />
                                        {item.jobType ?? 'Job Type'}
                                   </p>
                                   <p style={{marginLeft: '2rem'}}>
                                        <img src={tagBlack} />
                                        {item.jobCategory ?? 'Category'}
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
                                   <span>
                                   Save
                                   </span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          </Link>
     );
};

export default SingleJobItem;
