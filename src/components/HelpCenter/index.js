import React, { useEffect, useState } from "react";
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
import AccountSettingsFaqs from "./accountSettings";
import UsingPaaqFaqs from "./usingPaaq";
import SafetySecurityFaqs from "./safetySecurity";
import MessagesFaqs from "./messagesFaqs";
import NotificationsFaqs from "./notificationsFaqs";
import WalletFaqs from "./walletFaqs";
import InvestorsTop from "components/Investors/top";
import { apiClientContentFul } from "services/apiClient";

const HelpCenterMain = () => {

  const [values, setValues] = useState(null);

const checkCategory = (type) => {
  const result = values.filter(function checkMain(data) {
    return data.fields.category === type;
  });
    return result;
}


  useEffect(() => {
         
    apiClientContentFul("helpCenter", 0, 100).then((res) => {
      setValues(
              res?.items?.map((item) => {
                   return item;
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
            <AccountSettingsFaqs items={checkCategory('settings')} />
            <UsingPaaqFaqs marginTop={'2rem'} items={checkCategory('usage')} />
          </div>
          <div className="right">
            <SafetySecurityFaqs items={checkCategory('security')} />
            <MessagesFaqs marginTop={'2rem'} items={checkCategory('messages')} />
            <NotificationsFaqs marginTop={'2rem'} items={checkCategory('notifications')} />
            <WalletFaqs marginTop={'2rem'} items={checkCategory('wallet')} />
          </div>

        </div> : null
      }
      <AppAndPlayStoreFooter />
    </div>
  );
};

export default HelpCenterMain;
 