import PaginationComponent from 'components/pagination';
import SingleJobItem from 'components/singleJobItem';
import React from 'react'

const AllJobsList = () => {
  return (
       <div className="all-jobs-list-with-pagination">
            <div className="light-text">
                 Showing <span>1</span> to <span>20</span> of <span>36</span> jobs
            </div>
            <SingleJobItem title="Technical Project Manager II" />
            <SingleJobItem title="Senior Site Reliability Engineer" />
            <SingleJobItem title="Senior DEI Program Manager" />
            <SingleJobItem title="Revenue Analyst III" />
            <SingleJobItem title="Senior Manager, Customer Success" />
            <SingleJobItem title="Senior Product Designer, Enterprise" />
            <SingleJobItem title="Procurement Specialist II" />
            <SingleJobItem title="Data Architect" />
            <div className="pagination-container">
                 <PaginationComponent />
            </div>
       </div>
  );
}

export default AllJobsList