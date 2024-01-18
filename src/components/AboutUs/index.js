import { Image } from "theme-ui";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

import Waveform from "./waveform";
import InteractionCard from "./interactionCard";
import ClapEmoji from "assets/about/clap-emoji.png";
import ClapEmojiMobile from "assets/about/clap-emoji-mobile.png";
import DirectMessagesCard from "./directMessagesCard";
import AboutImage6 from "assets/about/about-image6.png";
import AboutImage3 from "assets/about/about-image3.png";
import AboutImage1 from "assets/about/about-image1.png";
import AboutImage7 from "assets/about/about-image77.png";
import AboutImage2 from "assets/about/about-image22.png";
import AboutImage4 from "assets/about/about-image44.png";
import AboutImage5 from "assets/about/about-image55.png";
import AboutImage8 from "assets/about/about-image88.png";
import ThumbsupEmoji from "assets/about/thumbsup-emoji.png";
import ThumbsupEmojiMobile from "assets/about/thumbsup-emoji-mobile.png";
import IntImage from "../../assets/about/Imege-yellow3x.png";
import IntImage2 from "../../assets/about/Imege-green3x.png";
// import IntImage3 from "../../assets/about/Imege-white3x.png";
import IntImage4 from "../../assets/about/community.png";
import AppAndPlayStoreFooter from "../appAndPlayStoreFooter";
import useWindowSize from 'Hooks/windowSize';

const AboutUsMain = () => {
  const [width] = useWindowSize();
  const [isPlay, setIsPlay] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    function handleResize() {
      // Update state based on screen width
      setIsSmallScreen(window.innerWidth <= 567);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize on initial mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const poppingOutAnimation = (delay) =>
    useSpring({
      from: { x: 0, y: 0, zoom: 0, scale: 0 },
      to: { x: 0, y: 0, zoom: 1, scale: 1 },
      delay: delay,
    });

  const handleClickPlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <>
      <div className={width > 760 ? "background-image-main" : "background-image-main-mobile"}>
        <div className="aboutus-left-section">
          <p className="aboutus-left-section-heading">About us</p>
          <p className="aboutus-left-section-detail">
            The widespread use of social media and professional platforms has
            made people more willing to accept intentionally structured
            knowledge from those they deem to be experts. Information sought can
            be either social, professional, or any other specialized information
            deemed valuable by the person seeking it.
          </p>
        </div>
        <div className="about-section-image1">
          <animated.div style={poppingOutAnimation(0)}>
            <Image className="about-section-emoji" src={width > 760 ? ClapEmoji : ClapEmojiMobile} />
            <Image className="main-section-inner" src={AboutImage1} />
          </animated.div>
        </div>
        <div className="about-section-image2">
          <animated.div style={poppingOutAnimation(400)}>
            <Image
              className="main-section-inner"
              src={AboutImage2}
              width={93}
              height={93}
            />
          </animated.div>
        </div>
        <div className="about-section-image3">
          <animated.div style={poppingOutAnimation(1800)}>
            <Image className="main-section-inner" src={AboutImage3} />
          </animated.div>
        </div>
        <div className="about-section-image4">
          <animated.div style={poppingOutAnimation(1000)}>
            <Image
              className="main-section-inner"
              src={AboutImage4}
              width={81}
              height={81}
            />
          </animated.div>
        </div>
        <div className="about-section-image5">
          <animated.div style={poppingOutAnimation(2000)}>
            <Image className="about-section-emoji" src={width > 760 ? ThumbsupEmoji : ThumbsupEmojiMobile} />
            <Image
              className="main-section-inner"
              src={AboutImage5}
              width={93}
              height={93}
            />
          </animated.div>
        </div>
        <div className="about-section-image6">
          <animated.div style={poppingOutAnimation(700)}>
            <div className="main-section-inner-img6">
              <Image className="main-section-inner" src={AboutImage6} />
              <div class="main-section-inner-circle" style={{animationDelay: '0s'}}></div>
              <div class="main-section-inner-circle" style={{animationDelay: '0.1s'}}></div>
              <div class="main-section-inner-circle" style={{animationDelay: '0.2s'}}></div>
              <div class="main-section-inner-circle" style={{animationDelay: '0.3s'}}></div>
              <div class="main-section-inner-circle" style={{animationDelay: '0.4s'}}></div>
            </div>

          </animated.div>
        </div>
        <div className={isPlay ? "spinner-wrap" : "spinner-off"}>
          <div className="spinner-item"></div>
          <div className="spinner-item spinner-item--2"></div>
          <div className="spinner-item spinner-item--3"></div>
        </div>
        <div className="about-section-image7">
          <animated.div style={poppingOutAnimation(0)}>
            <Image
              className="main-section-inner"
              src={AboutImage7}
              width={93}
              height={93}
            />
          </animated.div>
        </div>

        <Waveform handleClickPlay={handleClickPlay} />
      </div>
      {
        width > 760 ? (
          <DirectMessagesCard />
        ) : (
         <>
          <InteractionCard
            alignImageRight={'center'}
            image={AboutImage8}
            imageWidth={327}
            imageHeight={346}
            heading={"Millions of direct messages are sent daily"}
            detail={
              `Millions of direct messages are sent daily to people on social media
                asking for information about various topics. However, it has become
                increasingly challenging to respond to every one of these messages,
                especially if the question is technical.`
            }
            mobileclass='millions-img'
          /> 
         </>
        )
      }

      <InteractionCard
        alignImageRight={'end'}
        image={IntImage}
        imageWidth={600}
        imageHeight={567}
        leftAbsolute={width > 760 ? "23%" : "13%"}
        count={"02"}
        heading={
          "Human interaction is at the core of PAAQ - the more people connect"
        }
        detail={
          "The more vast knowledge is accessed through the app & community, with users getting information directly from the relevant source or individuals they deem credible - Bridging the knowledge market"
        }
        mobileclass='human-interaction'
      />
      <InteractionCard
        image={IntImage2}
        imageWidth={476}
        imageHeight={510}
        leftAbsolute={width > 760 ? "63%" : "3%"}
        topAbsolute={width > 760 ? "20%" : "11%"}
        count={"03"}
        heading={"PAAQ allows users to engage directly with individuals"}
        detail={
          "Who can help them make better life choices & advance their skills within their designated professions - enabling them to make money for collaborating and contributing positively to global economic development."
        }
      />
      <div className="">
        <InteractionCard
          alignImageRight={true}
          textSection
          mobileclass="justify-center"
          image={width > 760 ? IntImage4 : IntImage4}
          imageWidth={500}
          imageHeight={500}
          heading={"Our ultimate goal is to create a diverse community"}
          detail={
            "Where everyone can gain knowledge and build relationships without feeling isolated or ignored."
          }
        />
      </div>
      <AppAndPlayStoreFooter />
    </>
  );
};

export default AboutUsMain;
