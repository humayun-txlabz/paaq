import { Image } from "theme-ui";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

import Waveform from "./waveform";
import InteractionCard from "./interactionCard";
import ClapEmoji from "assets/about/clap-emoji.png";
import DirectMessagesCard from "./directMessagesCard";
import AboutImage6 from "assets/about/about-image6.png";
import AboutImage3 from "assets/about/about-image3.png";
import AboutImage1 from "assets/about/about-image1.png";
import AboutImage7 from "assets/about/about-image77.png";
import AboutImage2 from "assets/about/about-image22.png";
import AboutImage4 from "assets/about/about-image44.png";
import AboutImage5 from "assets/about/about-image55.png";
import ThumbsupEmoji from "assets/about/thumbsup-emoji.png";
import IntImage from "../../assets/about/Imege-yellow3x.png";
import IntImage2 from "../../assets/about/Imege-green3x.png";
import IntImage3 from "../../assets/about/Imege-white3x.png";
import AppAndPlayStoreFooter from "../appAndPlayStoreFooter";

const AboutUsMain = () => {
  const [isPlay, setIsPlay] = useState(false);

  const poppingOutAnimation = (delay) =>
    useSpring({
      from: { x: 0, y: 0, zoom: 0, scale: 0 },
      to: { x: 0, y: 0, zoom: 1, scale: 1 },
      delay: delay,
    });

  const TEST_PEAKS = [
    0.04, 0.99, 0.54, 0.74, 0.76, 0.52, 0.79, 0.72, 0.83, 0.67, 0.88, 0.99,
    0.95, 0.9399999999999999, 0.91, 0.82, 0.96, 0.91, 0.93, 0.93, 0.98, 0.99,
    0.98, 0.99, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.85, 0.82,
  ];

  const draw = (context) => {
    // Insert your canvas API code to draw an image
    var width = 10; //bar width
    var X = 50; // first bar position
    var base = 200;

    var values = [100, 200, 250, 300];

    let canvasHeight = 300;

    let canvasWidth = 300;

    var transX = canvasWidth * 0.5,
      transY = canvasHeight * 0.5;

    context.translate(transX, transY);

    for (var i = 0; i < values.length; i++) {
      // context.setTransform(1, 0, 0, 1, canvasWidth / 2, canvasHeight / 2);
      context.fillStyle = "#008080";
      var h = values[i];
      console.log("X-AXIS--->>", X);
      context.fillRect(X, canvasHeight - h, width, h);

      // X += width+15 ;
      X += i % 2 == 0 ? width + 15 : -200;
      /* text to display Bar number */
      // context.fillStyle = '#4da6ff';
      // context.fillText('Bar '+i,X-50,canvasHeight - h -10);
    }
    /* Text to display scale */
    // context.fillStyle = '#000000';
    // context.fillText('Scale X : '+canvasWidth+' Y : '+canvasHeight,800,10);
  };

  // console.log('this is serverrrr', server);

  const handleClickPlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <>
      <div className="background-image-main">
        {/* <BackgroundImage /> */}
        {/* <h1> THIS IS HEADING</h1> */}
        <div className="aboutus-left-section">
          <p className="aboutus-left-section-heading">About Us</p>
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
            <Image className="about-section-emoji" src={ClapEmoji} />
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
            <Image className="about-section-emoji" src={ThumbsupEmoji} />
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
            <div>
              <Image className="main-section-inner" src={AboutImage6} />
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

      <DirectMessagesCard />
      <InteractionCard
        alignImageRight={true}
        image={IntImage}
        imageWidth={600}
        imageHeight={567}
        leftAbsolute={"23%"}
        count={"02"}
        heading={
          "Human interaction is at the core of PAAQ - the more people connect"
        }
        detail={
          "The more vast knowledge is accessed through the app & community, with users getting information directly from the relevant source or individuals they deem credible - Bridging the knowledge market"
        }
      />
      <InteractionCard
        alignImageRight={false}
        image={IntImage2}
        imageWidth={476}
        imageHeight={510}
        leftAbsolute={"63%"}
        count={"03"}
        heading={"PAAQ allows users to engage directly with individuals"}
        detail={
          "Who can help them make better life choices & advance their skills within their designated professions - enabling them to make money for collaborating and contributing positively to global economic development."
        }
      />
      <InteractionCard
        alignImageRight={true}
        image={IntImage3}
        imageWidth={500}
        imageHeight={500}
        // leftAbsolute={'23%'}
        // count={'02'}
        heading={"Our ultimate goal is to create a diverse community"}
        detail={
          "Where everyone can gain knowledge and build relationships without feeling isolated or ignored."
        }
      />
      <AppAndPlayStoreFooter />
    </>
  );
};

export default AboutUsMain;
