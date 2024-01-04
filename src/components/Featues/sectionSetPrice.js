import React, { useEffect, useState } from "react";
import StartIcon from "../../assets/Icons/feature-sec-2-dollar.png";
import dollarBag from "../../assets/Icons/dollar_bag.png";
import ReactPlayer from "react-player";
import Svgs from "assets/Icons/Svgs";

const SectionSetPrice = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="section-2 section-2-modify" id="SectionSetPrice">
      <div className="left">
        <div className="heading">
          {/* <img src={dollarBag} className="icon" /> */}
          <div>
            <Svgs.MoneyBag />
          </div>

          <div className="text text-modify-price">Set Price</div>
        </div>
        <p style={{color:'#4B5157'}}>
          Setting prices for Text and Video responses determines the amount you
          will receive.
        </p>
        <div className="heading-2" style={{color:'#4B5157'}}>
          When you Set Prices, the following will happen:
        </div>
        <ul className="set-price" style={{color:'#4B5157'}}>
          <li>
            {" "}
            <div><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#E8EDED"/>
<path d="M20.4009 11.3123L13.9152 18.0557L11.3365 15.3746C11.1477 15.1783 10.8917 15.068 10.6247 15.068C10.3577 15.068 10.1016 15.1783 9.91279 15.3746C9.72399 15.5709 9.61792 15.8371 9.61792 16.1148C9.61792 16.3924 9.72399 16.6586 9.91279 16.8549L13.2018 20.2738C13.2952 20.371 13.4062 20.4481 13.5283 20.5007C13.6505 20.5534 13.7814 20.5805 13.9136 20.5805C14.0458 20.5805 14.1768 20.5534 14.2989 20.5007C14.4211 20.4481 14.532 20.371 14.6255 20.2738L21.8262 12.7869C22.015 12.5906 22.1211 12.3243 22.1211 12.0467C22.1211 11.7691 22.015 11.5029 21.8262 11.3066C21.6374 11.1103 21.3814 11 21.1144 11C20.8474 11 20.5913 11.1103 20.4025 11.3066L20.4009 11.3123Z" fill="#00B5B4"/>
</svg>
</div>
            Anyone contacting you using the Ask button will be required to pay
            the price you have entered.
          </li>
          <li>
            {" "}
            <div><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#E8EDED"/>
<path d="M20.4009 11.3123L13.9152 18.0557L11.3365 15.3746C11.1477 15.1783 10.8917 15.068 10.6247 15.068C10.3577 15.068 10.1016 15.1783 9.91279 15.3746C9.72399 15.5709 9.61792 15.8371 9.61792 16.1148C9.61792 16.3924 9.72399 16.6586 9.91279 16.8549L13.2018 20.2738C13.2952 20.371 13.4062 20.4481 13.5283 20.5007C13.6505 20.5534 13.7814 20.5805 13.9136 20.5805C14.0458 20.5805 14.1768 20.5534 14.2989 20.5007C14.4211 20.4481 14.532 20.371 14.6255 20.2738L21.8262 12.7869C22.015 12.5906 22.1211 12.3243 22.1211 12.0467C22.1211 11.7691 22.015 11.5029 21.8262 11.3066C21.6374 11.1103 21.3814 11 21.1144 11C20.8474 11 20.5913 11.1103 20.4025 11.3066L20.4009 11.3123Z" fill="#00B5B4"/>
</svg>
</div>
            You must respond to their message/question in the format they choose
            (Text or Video).
          </li>
          <li>
            {" "}
            <div><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#E8EDED"/>
<path d="M20.4009 11.3123L13.9152 18.0557L11.3365 15.3746C11.1477 15.1783 10.8917 15.068 10.6247 15.068C10.3577 15.068 10.1016 15.1783 9.91279 15.3746C9.72399 15.5709 9.61792 15.8371 9.61792 16.1148C9.61792 16.3924 9.72399 16.6586 9.91279 16.8549L13.2018 20.2738C13.2952 20.371 13.4062 20.4481 13.5283 20.5007C13.6505 20.5534 13.7814 20.5805 13.9136 20.5805C14.0458 20.5805 14.1768 20.5534 14.2989 20.5007C14.4211 20.4481 14.532 20.371 14.6255 20.2738L21.8262 12.7869C22.015 12.5906 22.1211 12.3243 22.1211 12.0467C22.1211 11.7691 22.015 11.5029 21.8262 11.3066C21.6374 11.1103 21.3814 11 21.1144 11C20.8474 11 20.5913 11.1103 20.4025 11.3066L20.4009 11.3123Z" fill="#00B5B4"/>
</svg>
</div>
            You may choose to reject their message/question if it goes against
            PAAQ's community guidelines or without any reason.
          </li>
        </ul>
      </div>
      <div className="right" style={{ overflow: "hidden" }}>
        {domLoaded && (
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player-question"
              url="gifs/SetQuestions.mov"
              width="100%"
              height="100%"
              loop={true}
              playing={true}
              muted={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionSetPrice;
