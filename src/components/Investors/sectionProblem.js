import React from "react";
import HIcon from "../../assets/Icons/investors-section-1-1.png";

const SectionProblem = () => {
  return (
    <>
      <div className="section-problem-container">
        <div className="header">
          <h1>
            Problem
            <img src={HIcon} />
          </h1>
        </div>
        <div className="h-line" />
        <div className="section-problem-grid-container">
          <div className="left">
            <p>
              In the age of normalisation of global social and professional
              interactions between individuals through various platforms.
            </p>
          </div>
          <div className="right">
            <p>
              People are increasingly interested in receiving intentional and
              exclusive structured knowledge from specified individuals whom
              people may deem to be experts in that field of expertise. In this
              case, social or professional knowledge is valuable to the person
              seeking information from such experts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionProblem;
