import SingleJobItem from "components/singleJobItem";
import React from "react";

const FeaturedJobs = ({ jobs, saveThisJob }) => {
  return (
    <div className="jobs-page-featured-jobs">
      <h1>Featured Jobs</h1>
      {jobs?.map((item) => (
        <SingleJobItem
          id={item.id}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default FeaturedJobs;
