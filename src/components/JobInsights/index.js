import { GrLocation } from "react-icons/gr";

const JobInsightsMain = () => {
     return (
          <>
               <div className="background-image-main job-insights-main">
                    <div className="job-in-bg-main-left">
                         <h3 className="cac">
                              Career and Culture &gt; <span className="cjobs">jobs</span>
                         </h3>
                         <div className="left-bottom-div">
                              <span className="bold-text">
                                   Principle Full <br />
                                   Stack Engineer
                              </span>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <div className="h-line" />
                    </div>
                         <div className="left-bottom">
                             
                              <h3>  <GrLocation  color="#000" fontSize="1.2rem" />Remote</h3>
                              <h3><GrLocation  color="#fff" fontSize="1.2rem" />  Engineering</h3>
                         </div>
                    </div>
                    <div className="job-in-bg-main-right">
                         <div className="picOuterDiv">

                         </div>
                    </div>
               </div>
          </>
     );
};

export default JobInsightsMain;
