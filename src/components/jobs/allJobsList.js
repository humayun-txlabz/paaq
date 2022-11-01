import PaginationComponent from "components/pagination";
import SingleJobItem from "components/singleJobItem";
import React from "react";
import { savedJobsInLocal } from "services/savedJobsLocalStorage";

const AllJobsList = ({ jobs, savedJobs, saveThisJob }) => {
  return (
    <div className="all-jobs-list-with-pagination">
      <div className="light-text">
        Showing <span>1</span> to <span>20</span> of <span>36</span> jobs
      </div>
      {jobs?.map((item) => (
        <SingleJobItem
          title={item.title}
          id={item?.id}
        />
      ))}
      <div className="pagination-container">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default AllJobsList;
