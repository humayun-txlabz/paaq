import React from 'react'
import searchIcon from "../../assets/Icons/jobs/search.png";
import downArrow from "../../assets/Icons/jobs/down-arrow.png";

const LeftForm = () => {
  return (
       <>
            <h1>Jobs</h1>
            <div className="form-container">
                 <h1>Filter Jobs</h1>
                 <div style={{ marginTop: "1rem" }} className="h-line" />
                 <p style={{ marginTop: "1rem" }}>Keywords</p>
                 <div className="input-container">
                      <input className="input" />
                      <img src={searchIcon} />
                 </div>
                 <div style={{ marginTop: "1rem" }} className="h-line" />
                 <div className="text-width-icon">
                      <p style={{ marginTop: "1rem" }}>Location</p>
                      <img src={downArrow} />
                 </div>
                 <div className="h-line" />
                 <div className="text-width-icon">
                      <p style={{ marginTop: "1rem" }}>Job Categories</p>
                      <img src={downArrow} />
                 </div>
                 <div className="h-line" />
                 <div className="button">Search</div>
            </div>
       </>
  );
}

export default LeftForm;