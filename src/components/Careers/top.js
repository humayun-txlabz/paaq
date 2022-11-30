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
                <img style={{opacity: 0,animation: 'bounceIn2 2s forwards 1s'}} className="circleImg" src={CareersImage2} />
                <div className="chatImg">
                  <img className="chatImg" src={CareersImage6} />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={StyleSheet.line1} />
                      <div style={StyleSheet.line2} />
                    </Shimmer>
                  </div>
                </div>
              </div>
              <div className="image3">
              <div className="chatImg">
                  <img className="chatImg" src={CareersImage5} />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={{ ...StyleSheet.line1, width: 86 }} />
                      <div style={{ ...StyleSheet.line2, width: 75 }} />
                    </Shimmer>
                  </div>
                  {/* <Skeleton className="shimEff" count={1} height={25} borderRadius={'0.1rem'} /> */}
                </div>
                <img style={{opacity: 0,animation: 'bounceIn2 2s forwards 1s'}} className="circleImg" src={CareersImage3} />
              </div>
              <div className="image4">
              <div className="chatImg">
                  <img className="chatImg" src={CareersImage5} />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={StyleSheet.line1} />
                      <div style={StyleSheet.line2} />
                    </Shimmer>
                  </div>
                  {/* <Skeleton className="shimEff" count={1} height={25} borderRadius={'0.1rem'} /> */}
                </div>
                <img style={{opacity: 0,animation: 'bounceIn2 2s forwards 1s'}} className="circleImg" src={CareersImage4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersTopMain;
