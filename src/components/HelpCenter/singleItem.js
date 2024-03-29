import React from "react";
import RightIcon from "../../assets/page2.png";

const SinlgeFaqItem = ({text}) => {
  return (
    <div className="single-faq-question-item">
      {/* <div className="h-line" /> */}
      <div class="inner-container">
        <span className="contact_us_color">{text}</span>
        <img src={RightIcon} />
      </div>
    </div>
  );
};

export default SinlgeFaqItem;
