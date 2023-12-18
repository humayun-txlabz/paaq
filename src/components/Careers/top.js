import React from "react";
import Shimmer from "react-shimmer-effect";
import BgImage from "../../assets/webbg.png";
import BgMobileImage from "../../assets/mobilebg.png";
import CareersImage1 from "assets/careers/careers-main.png";
import CareersImage2 from "assets/careers/careers-main1.png";
import CareersImage3 from "assets/careers/careers-main2.png";
import CareersImage4 from "assets/careers/careers-main3.png";
import CareersImage5 from "assets/careers/careers-left.png";
import CareersImage6 from "assets/careers/careers-right.png";



const CareersTopMain = (props) => {
  const StyleSheet = {
    container: {
      boxShadow: "none",
      borderRadius: "4px",
      backgroundColor: "transparent",
      display: "flex",
      padding: "7px 1px",
      width: "110px",
      position: "absolute",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "10%",
      marginTop: "2px",
    },
    line1: {
      width: "100px",
      height: "8px",
      borderRadius: "8px"
    },
    line2: {
      width: "80px",
      height: "8px",
      borderRadius: "8px",
      marginTop: "5px",
    }
  }

  return (
    <div className="careers-top-main-page">

      <div className="careers-top-main-page-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="59" viewBox="0 0 42 59" fill="none">
          <path d="M7.32764 47.4417C6.09868 44.9905 5.09807 42.7145 4.2729 40.7807C2.61908 36.9002 1.64446 34.4086 1.12016 34.5352C0.595869 34.6618 0.721584 37.4225 1.78258 41.6426C2.41345 44.142 3.23269 46.5901 4.23331 48.9659C4.80398 50.3145 5.44061 51.701 6.18232 53.115C6.54015 53.8254 6.93358 54.5124 7.33743 55.2384C7.82211 56.1121 8.42681 56.914 9.13409 57.6209C9.61106 58.0824 10.1818 58.4367 10.808 58.6599C11.2426 58.8045 11.6998 58.8703 12.158 58.8543C12.3095 58.9457 12.4898 58.9776 12.6639 58.9438C12.838 58.91 12.9934 58.8129 13.0998 58.6714C14.0007 58.3428 14.8135 57.811 15.4745 57.1175C16.5645 55.9774 17.448 55.0039 18.3766 53.9905C20.1757 52.0069 21.7647 50.177 23.0499 48.5675C25.6378 45.4133 27.0548 43.2541 26.6953 42.85C26.3358 42.4458 24.2432 43.8546 21.1795 46.4828C19.6477 47.7969 17.8755 49.4118 15.9236 51.2416C15.8454 51.331 15.7604 51.4142 15.6693 51.4905C16.214 49.565 16.8558 47.1687 17.6484 44.1897C18.7941 39.9761 20.2807 34.7953 22.2439 29.5702C24.1362 24.3899 26.5416 19.4095 29.4245 14.703C31.72 10.9399 34.403 7.42536 37.43 4.21647C39.7385 1.79058 41.3051 0.397631 41.1175 0.114231C40.9299 -0.169165 39.0212 0.675936 36.236 2.72906C32.6068 5.51375 29.4049 8.81197 26.732 12.5189C23.3414 17.1982 20.5144 22.258 18.3092 27.5938C16.2726 32.473 14.5656 37.482 13.1999 42.5872C11.7949 47.7601 11.0753 51.22 10.7009 53.5725C10.2319 52.864 9.73686 51.954 9.28959 51.1701C8.56615 49.8764 7.89221 48.6111 7.28076 47.3708" fill="white" />
        </svg>
      </div>

      <div className="help-center-page-main-container">
        <div className="bg-container-for-all">
          <img className="web-img" src={BgImage} />
          <img className="mobile-img" src={BgMobileImage} />
        </div>
        <div className="careers-top-main-inner-content">
          <div className="left">
            <h1>Who We Are</h1>
            <p>
              At PAAQ, we strive to make people's lives easier by providing easy
              access to expert’s tailor-made knowledge that would otherwise be
              unavailable.
            </p>
            <p>
              Everyone is capable of achieving their goals if only they have the
              right expert to guide them. In this way, PAAQ contributes to human
              progress.
            </p>
          </div>
          <div className="right">
            <img src={CareersImage1} />
            <div className="absolute-images">
              <div className="image2">
                <img style={{ opacity: 0, animation: 'bounceIn2 2s forwards 1s' }} className="circleImg" src={CareersImage2} />
                <div className="chatImg">
                  <img className="chatImg" src={CareersImage6} />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={StyleSheet.line1} className="shimmer-1st1" />
                      <div style={StyleSheet.line2} className="shimmer-2nd1"/>
                    </Shimmer>
                  </div>
                </div>
              </div>
              <div className="image3">
                <div className="chatImg">
                  <img className="chatImg" src={CareersImage5} />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={{ ...StyleSheet.line1, }} className="shimmer-1st2" />
                      <div style={{ ...StyleSheet.line2,  }} className="shimmer-2nd2" />
                    </Shimmer>
                  </div>
                  {/* <Skeleton className="shimEff" count={1} height={25} borderRadius={'0.1rem'} /> */}
                </div>
                <img style={{ opacity: 0, animation: 'bounceIn2 2s forwards 1s' }} className="circleImg" src={CareersImage3} />
              </div>
              <div className="image4">
                <div className="chatImg">
                  <img className="chatImg" src={CareersImage5} />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={StyleSheet.line1} className="shimmer-1st3" />
                      <div style={StyleSheet.line2} className="shimmer-2nd3" />
                    </Shimmer>
                  </div>
                  {/* <Skeleton className="shimEff" count={1} height={25} borderRadius={'0.1rem'} /> */}
                </div>
                <img style={{ opacity: 0, animation: 'bounceIn2 2s forwards 1s' }} className="circleImg" src={CareersImage4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersTopMain;
