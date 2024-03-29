import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
import React, { useEffect, useState } from "react";
import AllJobsList from "./allJobsList";
import FeaturedJobs from "./featuredJobs";
import LeftForm from "./leftForm";
import { apiClientContentFul } from "../../services/apiClient";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import JobSkeleton from "./jobSkeleton";
import { savedJobsInLocal } from "../../services/savedJobsLocalStorage";
const JobsMain = () => {
  const [featuredJobs, setFeaturedJobs] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const resultsPerPage = 10;

  const saveThisJob = (id) => {
    savedJobsInLocal.setSelectJob(id);
  };
  const goToPage = (page) => {
     setCurrentPage(page);
     window.scrollTo(0, 0);
  };
  useEffect(() => {
       
       apiClientContentFul("featuredJobs").then((res) => {
            setFeaturedJobs(
                 res?.items?.map((item) => {
                  
                      return {
                           ...item.fields,
                           id: item?.sys?.id,
                         };
                    })
                    );
               });
               
  }, []);

  useEffect(() => {
     var skip = (currentPage - 1 ) * resultsPerPage;

    apiClientContentFul("jobs", Math.ceil(skip), resultsPerPage).then((res) => {
      const totalP = Math.round(res?.total / resultsPerPage);
      // console.log("totalP", res?.total)
      setTotalCount(res?.total)
      setTotalPages(totalP);
      setJobs(
        res?.items?.map((item) => {
          console.log("res?.items", res?.items)
          return {
            ...item.fields,
            id: item?.sys?.id,
          };
        })
      );
    });
  }, [currentPage])
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
          {/* {!featuredJobs ? (
            <Skeleton height={75} count={5} wrapper={JobSkeleton} />
          ) : featuredJobs?.length > 0 ? (
            <FeaturedJobs
              saveThisJob={(id) => saveThisJob(id)}
              jobs={featuredJobs}
            />
          ) : null} */}
          {!jobs ? (
            <Skeleton height={75} count={10} wrapper={JobSkeleton} />
          ) : jobs?.length > 0 ? (
            <AllJobsList
              totalPages={totalPages}
              saveThisJob={(id) => saveThisJob(id)}
              jobs={jobs}
              goToPage={goToPage}
              currentPage={currentPage}
              totalCount={totalCount}
            />
          ) : null}
        </div>
      </div>
      <AppAndPlayStoreFooter />
    </div>
  );
};

export default JobsMain;
