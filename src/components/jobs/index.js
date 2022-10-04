import React from 'react'
import LeftForm from "./leftForm";
const JobsMain = () => {
  return (
       <div className="jobs-page-container-main">
            <p className="link-text">
                 Careers & Culture &gt; <span>Jobs</span>
            </p>
            <div className="inner-main-container">
                 <div className="left">
                      <LeftForm />
                 </div>
                 <div className="right">
                    
                 </div>
            </div>
       </div>
  );
}

export default JobsMain