import React, { useEffect, useState } from "react";
import StartIcon from "../../assets/Icons/feature-sec-2-dollar.png";
import dollarBag from "../../assets/Icons/dollar_bag.png";
import ReactPlayer from "react-player";

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
          <svg style={{marginRight:'25px'}} width="41" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.2659 15.7826C26.2659 13.4348 30.6776 6.97826 30.6776 4.43478C30.8982 2.86957 29.5747 1.69565 27.81 1.5C27.5894 1.5 27.5894 1.5 27.3688 1.5C24.5012 1.5 25.6041 3.45652 24.06 3.45652C22.5159 3.45652 22.7365 1.5 19.6482 1.5C16.56 1.5 15.2365 5.41304 15.2365 5.41304C15.2365 5.41304 10.8247 5.02174 10.8247 7.36957C10.8247 9.71739 15.2365 13.4348 15.2365 15.7826" fill="white"/>
<path d="M26.2659 15.7826C26.2659 13.4348 30.6776 6.97826 30.6776 4.43478C30.8982 2.86957 29.5747 1.69565 27.81 1.5C27.5894 1.5 27.5894 1.5 27.3688 1.5C24.5012 1.5 25.6041 3.45652 24.06 3.45652C22.5159 3.45652 22.7365 1.5 19.6482 1.5C16.56 1.5 15.2365 5.41304 15.2365 5.41304C15.2365 5.41304 10.8247 5.02174 10.8247 7.36957C10.8247 9.71739 15.2365 13.4348 15.2365 15.7826" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.75 46.5006C27.8088 46.5006 39.5 45.718 39.5 41.6093C39.5 37.5006 35.0882 31.8267 35.0882 31.8267C35.0882 20.6746 32 15.1963 20.75 15.1963C9.5 15.1963 6.41176 20.6746 6.41176 31.8267C6.41176 31.8267 2 37.5006 2 41.6093C2 45.718 13.6912 46.5006 20.75 46.5006Z" fill="white" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8191 25.25V24" stroke="#00B5B4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8191 35.25V36.5" stroke="#00B5B4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6373 25.25H19.8186C18.1275 25.25 17 26.25 17 27.75C17 29.25 18.1275 30.25 19.8186 30.25C21.5098 30.25 22.6373 31.25 22.6373 32.75C22.6373 34.25 21.5098 35.25 19.8186 35.25H17" fill="white"/>
<path d="M22.6373 25.25H19.8186C18.1275 25.25 17 26.25 17 27.75C17 29.25 18.1275 30.25 19.8186 30.25C21.5098 30.25 22.6373 31.25 22.6373 32.75C22.6373 34.25 21.5098 35.25 19.8186 35.25H17" stroke="#00B5B4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <div className="text text-modify-price">Set Price</div>
        </div>
        <p>
          Setting prices for Text and Video responses determines the amount you
          will receive.
        </p>
        <div className="heading-2">
          When you Set Prices, the following will happen:
        </div>
        <ul className="set-price">
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
