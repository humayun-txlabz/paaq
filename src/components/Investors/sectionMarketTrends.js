import React, { useState } from "react";
import StartMini from "../../assets/Images/market-trends-investors-page/startMini.png";
// import BigImg from "../../assets/Images/market-trends-investors-page/bigImg.png";
import Logo from "../../assets/Images/market-trends-investors-page/logo.png";
import CircleImg from "../../assets/Images/market-trends-investors-page/circle1.png";

const SectionMarketTrends = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const readMoreContent = `Since the boom of social media more than two decades ago,
  virtual interaction has become a norm. People could only
  engage with people physically accessible or ones they
  already know. However, social media provided a platform for
  people across the world to interact anywhere and anytime.
  
  Moving from interactions with people you know, to meeting
  new people, to interacting with celebrities or people they look
  up to. People interested in these social media platforms gain
  a large following as people are increasingly interested in
  these personalities, from musicians and speakers to business
  people and politicians.`;
  return (
    <div className="investors-page-section-market-trends">
      <h1>Market Trend</h1>
      <div className="main-content">
        <div className="left">
          {/* <img src={BigImg} /> */}
        </div>
        <div className="right">
          <div className="topContent">
            <img src={StartMini} />
            <p>
              Since the boom of social media more than two decades ago, virtual
              interaction has become a norm.
            </p>
          </div>
          <div className="circles">
            <div className="cir1">
              <img src={CircleImg} />
            </div>
            <div className="cir2">
              <img src={Logo} />
            </div>
          </div>
          <p className="bottom-content" style={isReadMore ? {marginTop: '2rem'} : {}}>
            People could only engage with people physically accessible or ones
            they already know. However, social media provided a platform for
            people across the world to interact anywhere and anytime.{" "}
            {isReadMore ? readMoreContent : ``}
            <span onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? 'Read Less' : 'Read More'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionMarketTrends;
