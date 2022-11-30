import React, { useEffect, useState } from "react";
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
import InvestorsTop from "components/Investors/top";
import { apiClientContentFul, apiClientContentFulCategory } from "services/apiClient";

const HelpCenterMain = () => {

  const [values, setValues] = useState(null);

const checkCategory = (type) => {
  const result = values.filter(function checkMain(data) {
    return data.category === type;
  });
    return result;
}


  useEffect(() => {
         
    apiClientContentFul("helpCenter", 0, 100).then((res) => {
      setValues(
              res?.items?.map((item) => {
                   return item.fields;
                 })
                 );
      });
  }, []);

  return (
    <div className="help-center-page-main-container">
      {/* <div className="bg-container-for-all">
        <img className="web-img" src={BgImage} />
        <img className="mobile-img" src={BgMobileImage} />
        <MediaPageTop />
        
      </div> */}
      <InvestorsTop />
      {
        values ? 
      <div className="paaq-all-faq-center">
          <div className="left">
            <AccountSettingsFaqs items={checkCategory('settings')} tag={'settings'} />
            <UsingPaaqFaqs marginTop={'2rem'} items={checkCategory('usage')} tag={'usage'} />
          </div>
          <div className="right">
            <SafetySecurityFaqs items={checkCategory('security')} tag={'security'} />
            <MessagesFaqs marginTop={'2rem'} items={checkCategory('messages')} tag={'messages'} />
            <NotificationsFaqs marginTop={'2rem'} items={checkCategory('notifications')} tag={'notifications'} />
            <WalletFaqs marginTop={'2rem'} items={checkCategory('wallet')} tag={'wallet'} />
          </div>

        </div> : null
      }
      <AppAndPlayStoreFooter />
    </div>
  );
};

export default HelpCenterMain;
 