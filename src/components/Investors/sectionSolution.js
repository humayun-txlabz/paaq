import React from "react";
import Image1 from "../../assets/Images/investors-section-solution-1-1.png";
import BigImg from "../../assets/Images/investors-section-solution-1.png";
import MiniRectangle from "../../assets/Icons/investors-section-2-1.png";

const SectionSolution = () => {
  return (
    <div className="investors-page-section-solution-container">
      <div className="img-mobile">
        <img className="img" src={Image1} />
        <div className="main-img">
          <img className="bigImg" src={BigImg} />
        </div>
      </div>
      <img className="web-arrow-img" src={Image1} />

      <div className="solution-section-content">
        <div className="left">
          <div className="header">
            <h1>
            Solution
              <img src={MiniRectangle} />
            </h1>
          </div>
          <p>
            Due to the increasing need for exclusivity and tailor-made knowledge
            from individuals deem as experts.
          </p>
          <p>
            PAAQ provides a platform where users will be able to acquire direct
            information from people they would have never been able to obtain it
            from because experts may be non-responsive and discouraged to
            respond due to high volume requests they receive.
          </p>
        </div>
           
        <div className="right">
          <div className="img-web">
            <div className="main-img">
              <img className="bigImg" src={BigImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSolution;
