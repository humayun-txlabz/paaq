import React from "react";
import MediaPageTop from "./top";
import BgImage from '../../assets/webbg.png';
import BgMobileImage from '../../assets/mobilebg.png';
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
import AccountSettingsFaqs from "./accountSettings";
import UsingPaaqFaqs from "./usingPaaq";
import SafetySecurityFaqs from "./safetySecurity";
import MessagesFaqs from "./messagesFaqs";
import NotificationsFaqs from "./notificationsFaqs";
import WalletFaqs from "./walletFaqs";

const HelpCenterMain = () => {
  return (
    <div className="help-center-page-main-container">
      <div className="bg-container-for-all">
        <img className="web-img" src={BgImage} />
        <img className="mobile-img" src={BgMobileImage} />
        <MediaPageTop />
        
      </div>
      <div className="paaq-all-faq-center">
          <div className="left">
            <AccountSettingsFaqs />
            <UsingPaaqFaqs marginTop={'2rem'} />
          </div>
          <div className="right">
            <SafetySecurityFaqs />
            <MessagesFaqs marginTop={'2rem'} />
            <NotificationsFaqs marginTop={'2rem'} />
            <WalletFaqs marginTop={'2rem'} />
          </div>

        </div>
      <AppAndPlayStoreFooter />
    </div>
  );
};

export default HelpCenterMain;
 