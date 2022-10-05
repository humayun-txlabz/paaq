import SingleJobItem from 'components/singleJobItem';
import React from 'react'

const FeaturedJobs = () => {
  return (
       <div className="jobs-page-featured-jobs">
            <h1>Featured Jobs</h1>
            <SingleJobItem title="Principal Full Stack Engineer" />
            <SingleJobItem isGradBtn title="Senior Manager, Product Design" />
            <SingleJobItem title="Data Architect" />
       </div>
  );
}

export default FeaturedJobs