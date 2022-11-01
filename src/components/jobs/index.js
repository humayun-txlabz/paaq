import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import React from 'react'
import AllJobsList from './allJobsList';
import FeaturedJobs from './featuredJobs';
import LeftForm from "./leftForm";
const JobsMain = () => {
  return (
       <div className="jobs-page-container-main">
            <p className="link-text">
                 Careers & Culture &gt; <span>Jobs</span>
            </p>
            <div className="inner-main-container">
                 {/* <div className="left">
                      <LeftForm />
                 </div> */}
                 <div className="right">
                    <FeaturedJobs />
                    <AllJobsList />
                 </div>
            </div>
            <AppAndPlayStoreFooter />
       </div>
  );
}

export default JobsMain