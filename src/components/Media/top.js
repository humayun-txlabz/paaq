import Link from 'next/link';
import RightImage from '../../assets/Images/media-right-11.png';
import React, { useEffect, useState } from 'react'
import Shimmer from "react-shimmer-effect";
// img
import CareersImage1 from "assets/careers/careers-main0.png";
import CareersImage2 from "assets/Images/main9.png";
import CareersImage3 from "assets/Images/main6.png";
import CareersImage4 from "assets/Images/main22.png";
import CareersImage5 from "assets/careers/careers-left.png";
import CareersImage55 from "assets/careers/careers-left1.png";
import CareersImage6 from "assets/careers/careers-right.png";
import CareersImage66 from "assets/careers/careers-right1.png";

const MediaPageTop = () => {

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

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 960);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='grid-container-media-page-top'>
        <div className='left'>
            <h1>Press & Media</h1>
            <p>PAAQ is a knowledge based social media application designed to facilitate people's exchange of valuable insights and knowledge as well as earn money from answering questions.</p>
            <p style={{marginTop: '3%'}}>Contact us for all media and press inquiries.</p>
            <Link href={"/contactUs"}>
              <div style={{marginTop: '3%'}} className='btn'>
              Contact us
              </div>
            </Link>
        </div>
        <div className="right">
            <img src={CareersImage1} />
            <div className="absolute-images">
              <div className="image2 image2-modify">
                <img style={{ opacity: 0, animation: 'bounceIn2 2s forwards 1s' }} className="circleImg" src={CareersImage2} />
                <div className="chatImg chat-img-modify">
                  <img className="chatImg" src={ !isSmallScreen ?  CareersImage6 : CareersImage66} />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={StyleSheet.line1} className="shimmer-1st1 shimmer-1st1-modify" />
                      <div style={StyleSheet.line2} className="shimmer-2nd1 shimmer-2nd1-modify"/>
                    </Shimmer>
                  </div>
                </div>
              </div>
              <div className="image3 image3-modify">
                <div className="chatImg chat-img-modify" >
                  <img className="chatImg" src={ !isSmallScreen ?  CareersImage5 : CareersImage55}  />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={{ ...StyleSheet.line1, }} className="shimmer-1st2 shimmer-1st2-modify" />
                      <div style={{ ...StyleSheet.line2,  }} className="shimmer-2nd2 shimmer-2nd2-modify" />
                    </Shimmer>
                  </div>
                </div>
                <img style={{ opacity: 0, animation: 'bounceIn2 2s forwards 1s' }} className="circleImg" src={CareersImage3} />
              </div>
              <div className="image4">
                <div className="chatImg chat-img-modify">
                  <img className="chatImg" src={ !isSmallScreen ?  CareersImage5 : CareersImage55}  />
                  <div style={StyleSheet.container}>
                    <Shimmer>
                      <div style={StyleSheet.line1} className="shimmer-1st3 shimmer-1st2-modify" />
                      <div style={StyleSheet.line2} className="shimmer-2nd3 shimmer-2nd2-modify" />
                    </Shimmer>
                  </div>
                </div>
                <img style={{ opacity: 0, animation: 'bounceIn2 2s forwards 1s' }} className="circleImg" src={CareersImage4} />
              </div>
            </div>
          </div>
    </div>
  )
}

export default MediaPageTop