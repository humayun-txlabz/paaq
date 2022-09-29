import React from "react";
import image1 from '../../assets/Icons/investors/1.png';
import image2 from '../../assets/Icons/investors/2.png';
import image3 from '../../assets/Icons/investors/3.png';
import image4 from '../../assets/Icons/investors/4.png';
import image5 from '../../assets/Icons/investors/5.png';
import image6 from '../../assets/Icons/investors/6.png';
import image7 from '../../assets/Icons/investors/7.png';

const InvestorsTop = () => {
  return (
    <div className="job-insights-main investors-page-top">
      <div className="center-content">
        <h1>Did you know?</h1>
        <p>
          An average person asks between 20 - 30 questions per day. You can
          never go a day without using words like; Why …? Who …? What …? When …?
          Where …? How ….? Could …?{" "}
        </p>
      </div>
      <img src={image1} className='image1' />
      <img src={image2} className='image2' />
      <img src={image3} className='image3' />
      <img src={image4} className='image4' />
      <img src={image5} className='image5' />
      <img src={image6} className='image6' />
      <img src={image7} className='image7' />
    </div>
  );
};

export default InvestorsTop;
