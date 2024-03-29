import PaginationComponent from "components/pagination";
import SingleJobItem from "components/singleJobItem";
import React from "react";
import { savedJobsInLocal } from "services/savedJobsLocalStorage";

const AllJobsList = ({ jobs, totalPages, goToPage, currentPage, totalCount }) => {
 
  return (
    <div className="all-jobs-list-with-pagination">
      <p className="total-jobs-count">Showing <strong>1</strong> to <strong>{jobs?.length}</strong> of <strong>{totalCount}</strong> Jobs
      </p>
      {/* <div className="light-text">
        Showing <span>1</span> to <span>20</span> of <span>36</span> jobs
      </div> */}
      {jobs?.map((item, index) => (
        <SingleJobItem
          key={index}
          item={item}
        />
      ))}
      <div className="pagination-container">
        <PaginationComponent currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
      </div>
    </div>
  );
};

export default AllJobsList;
