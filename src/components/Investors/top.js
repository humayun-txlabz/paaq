import React from "react";
import image1 from '../../assets/Icons/investors/1.png';
import image2 from '../../assets/Icons/investors/2.png';
import image3 from '../../assets/Icons/investors/3.png';
import image4 from '../../assets/Icons/investors/4.png';
import image5 from '../../assets/Icons/investors/5.png';
import image6 from '../../assets/Icons/investors/6.png';
import image7 from '../../assets/Icons/investors/7.png';
import TextPillComponent from './../textPillComp';

const InvestorsTop = () => {
  return (
       <div className="job-insights-main investors-page-top">
            <div className="center-content">
                 <h1>Did you know?</h1>
                 <p>
                      An average person asks between 20 - 30 questions per day. You can
                      never go a day without using words like; Why …? Who …? What …? When
                      …? Where …? How ….? Could …?{" "}
                 </p>
            </div>
            <div className="image1 pill1">
                <div className="p1"><TextPillComponent text="Could ?" /></div>
                 <img src={image1} className="image1" />
            </div>
            <div className="image2 pill2">
                 <div className="p2"><TextPillComponent text="Why ?" /></div>
                 <img src={image2} className="image2" />
            </div>
            <div className="image3 pill3">
             <div className="p3"><TextPillComponent text="What ?" /></div>
                 <img src={image3} className="image3" />
            </div>
            <div className="image4 pill4">
             <div className="p4"><TextPillComponent textSize={'0.9vw'} text="Who ?" /></div>
                 <img src={image4} className="image4" />
            </div>
            <div className="image5 pill5">
             <div className="p5"><TextPillComponent text="When ?" /></div>
                 <img src={image5} className="image5" />
            </div>
            <div className="image6 pill6">
             <div className="p6"><TextPillComponent text="How ?" /></div>
                 <img src={image6} className="image6" />
            </div>
            <div className="image7 pill7">
             <div className="p7"><TextPillComponent text="Where ?" /></div>
                 <img src={image7} className="image7" />
            </div>
       </div>
  );
};

export default InvestorsTop;
