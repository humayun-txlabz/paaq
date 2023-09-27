import React, { useEffect, useState } from "react";
import StartIcon from "../../assets/Icons/feature-sec-2-dollar.png";
import ReactPlayer from "react-player";

const SectionSetPrice = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="section-2" id="SectionSetPrice">
      <div className="left">
        <div className="heading">
          <img src={StartIcon} className="icon" />
          <div className="text">Set Price</div>
        </div>
        <p>
          Setting prices for Text and Video responses determines the amount you
          will receive.
        </p>
        <div className="heading-2">
          When you Set Prices, the following will happen:
        </div>
        <ul>
          <li>
            {" "}
            Anyone contacting you using the Ask button will be required to pay
            the price you have entered.
          </li>
          <li>
            {" "}
            You must respond to their message/question in the format they choose
            (Text or Video).
          </li>
          <li>
            {" "}
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
