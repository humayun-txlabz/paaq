import React from "react";

import CareersTopMain from "./top";
import CareerMain from "components/Career";

const CareersMain = ({ totalFeaturedJobs, totalJobs }) => {
  return (
    <>
      <CareersTopMain />
      <CareerMain totalFeaturedJobs={totalFeaturedJobs} totalJobs={totalJobs} />
    </>
  );
};

export default CareersMain;
