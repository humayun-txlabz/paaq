import React from "react";
import startIcon  from '../../assets/Icons/feature-sec-2-dollar.png';
import sec11 from '../../assets/Images/feature-sec-2-1.png';

const SectionSetPrice =() => {
  return (
    <div className="section-2">
      
      <div className="left">
          <div className="heading">
            <img src={startIcon} className="icon" />
            <div className="text">Set Price</div>
          </div>
          <p>Setting prices for Text and Video responses determines the amount you will receive.</p>
          <div className="heading-2">
          When you Set Prices, the following will happen:
          </div>
          <p>01. Anyone contacting you using the Ask button will be required to pay the price you have entered.</p>
          <p>02. You must respond to their message/question in the format they choose (Text or Video).</p>
          <p>03. You may choose to reject their message/question if it goes against PAAQ's community guidelines or without any reason.</p>
      </div>
      <div className="right">
      <img src={sec11} className="image" />
      </div>
    </div>
  );
}

export default SectionSetPrice;
