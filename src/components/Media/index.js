import React from "react";
import MediaPageTop from "./top";
import BgImage from '../../assets/webbg.png';
import BgMobileImage from '../../assets/mobilebg.png';
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";

const MediaMain = () => {
  return (
    <div className="media-page-main-container">
      <div className="bg-container-for-all">
        <img className="web-img" src={BgImage} />
        <img className="mobile-img" src={BgMobileImage} />
        <MediaPageTop />
      </div>
      <AppAndPlayStoreFooter />
    </div>
  );
};

export default MediaMain;
 