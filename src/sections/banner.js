/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, Image } from "theme-ui";
import ReactPlayer from "react-player";

import { Container, Box, Button } from "theme-ui";
import { animated, useSprings, useSpring, to, update } from "react-spring";
import BannerImg from "assets/banner-phone.png";
import MainImage1 from "assets/Images/main1.png";
import MainImage2 from "assets/Images/earn3.png";
import MainImage3 from "assets/Images/main3.png";
import MainImage4 from "assets/Images/main9.png";
import MainImage5 from "assets/Images/main7.png";
import MainImage6 from "assets/Images/main8.png";
import MainImage7 from "assets/Images/main6.png";
import MainImage8 from "assets/Images/main22.png";
import MainImage9 from "assets/Images/main44.png";
import MainImage10 from "assets/Images/main5.png";
import MainImage11 from "assets/Images/main2.png";
// import bann from "assets/bannerMobileView.png";
import SpeakerIcon from "assets/Icons/whitespeaker.png";
import whitespeaker1 from "assets/Icons/whitespeaker1.png";
import FadeAnimation from "components/fadeAnimation";
import homeshowskill from '../assets/home/homeshowskill.png'
import homeaiskill from '../assets/home/homeaiskill.png'
import homelightskill from '../assets/home/homelightskill.png'
import PaaqHomeSlider from "components/PaaqHomeSlider";
import Svgs from "assets/Icons/Svgs";

export default function Banner() {
  const svgRef = React.createRef();
  const [domLoaded, setDomLoaded] = useState(false);
  const [speak, setSpeak] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);

  console.log("isTruncated", isTruncated);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const [style, setStyle] = useSpring(() => ({
    from: { x: 720 },
    to: { x: -350 },
    delay: 0,
    config: { duration: 8000 },
    onRest: () => update(16000),
  }));
  const [style2, setStyle2] = useSpring(() => ({
    from: { x: 420 },
    to: { x: -600 },
    delay: 8000,
    config: { duration: 8000 },
    onRest: () => update2(16000),
  }));

  const update = (delay) => {
    setStyle({
      from: { x: 720 },
      to: { x: -350 },
      delay: delay,
      config: { duration: 8000 },
      loop: true,
    });
  };
  const update2 = (delay) => {
    setStyle2({
      from: { x: 420 },
      to: { x: -600 },
      delay: delay,
      config: { duration: 8000 },
    });
  };

  const style3 = useSpring({
    from: { x: 320 },
    to: { x: -900 },
    delay: 15400,
    config: { duration: 8000 },
    loop: true,
  });

  const textLen =
    "Conversing with an expert will give you a sense of human connection. However, this feeling is absent when using an automated system. With PAAQ, you can ask anyone with experience and expertise for informed and detailed answers to your questions.";

  const poppingOutAnimation = (delay) =>
    useSpring({
      from: { x: 0, y: 0, zoom: 0, scale: 0 },
      to: { x: 0, y: 0, zoom: 1, scale: 1 },
      delay: delay,
    });

  const [anim1, setAnim1] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],

    delay: 2000,
    config: { duration: 500 },

    onRest: () => update3(1),
  }));
  const [anim2, setAnim2] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 2000,
    config: { duration: 500 },

    onRest: () => update3(2),
  }));
  const [anim3, setAnim3] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 5500,
    config: { duration: 500 },

    onRest: () => update3(3),
  }));
  const [anim4, setAnim4] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 5500,
    // delay: 0,
    config: { duration: 500 },

    onRest: () => update3(4),
  }));
  const [anim5, setAnim5] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 9000,
    config: { duration: 500 },

    onRest: () => update3(5),
  }));
  const [anim6, setAnim6] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 9000,
    config: { duration: 500 },

    onRest: () => update3(6),
  }));
  const [anim7, setAnim7] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 13000,
    config: { duration: 500 },

    onRest: () => update3(7),
  }));
  const [anim8, setAnim8] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 13000,
    config: { duration: 500 },

    onRest: () => update3(8),
  }));

  const [anim9, setAnim9] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 16500,
    // delay: 0,
    config: { duration: 500 },

    onRest: () => update3(9),
  }));

  const update3 = (value) => {
    let obj = {
      from: { x: 0, y: 0, opacity: 0, scale: 0 },
      to: [
        { x: 0, y: 0, opacity: 1, scale: 1 },
        { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
      ],
      delay: 16500,
      config: { duration: 500 },
      loop: true,
    };
    switch (value) {
      case 1:
        setAnim1(obj);
        break;
      case 2:
        setAnim2(obj);
        break;
      case 3:
        setAnim3(obj);
        break;
      case 4:
        setAnim4(obj);
        break;
      case 5:
        setAnim5(obj);
        break;
      case 6:
        setAnim6(obj);
        break;
      case 7:
        setAnim7(obj);
        break;
      case 8:
        setAnim8(obj);
        break;
      default:
        setAnim9(obj);
    }
  };

  const handleSpeakerClick = () => {

    if (svgRef.current.paused) {
      svgRef.current.play();
      setSpeak(true)
    } else {
      svgRef.current.pause();
      setSpeak(false)
    }

  };

  const textAnimation = (delay) =>
    useSpring({
      from: { x: 0, y: 0, opacity: 0 },
      to: { x: 0, y: 0, opacity: 1 },
      delay: delay,
      config: { mass: 1, tension: 180, friction: 12 },
      velocity: 10,
    });

  return (
    <section className="home-hero" sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <div
            className="main-section-image1"
            style={{ maxWidth: 60, maxHeight: 60 }}
          >
            <animated.div style={poppingOutAnimation(0)}>
              <Image
                className="main-section-inner main-section-inner-image1"
                src={MainImage1}
              />
            </animated.div>
          </div>

          <div className="main-section-image2">
            <animated.div style={poppingOutAnimation(1100)}>
              <Image
                className="main-section-inner main-section-inner-image2"
                src={MainImage2}
              />
              <animated.div
                style={{ ...anim1, position: "absolute" }}
                className="main-section-image2-nametag-container"
              >
                <div className="main-section-image2-nametag">
                  <span className="nametag-title">Micheal Keen</span>
                  <span className="nametag-designation">
                    <span>
                      Project Manager @ Apex
                    </span>
                    <span>
                      <Svgs.Thumb />
                    </span>
                  </span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div className="main-section-image3">
            <animated.div style={poppingOutAnimation(500)}>
              <Image
                className="main-section-inner main-section-inner-image3"
                src={MainImage3}
              />
              <animated.div
                style={{ position: "absolute", ...anim8 }}
                className="main-section-image2-nametag-containerleft"
              >
                <div className="main-section-image2-nametagleft">
                  <span className="nametag-title">Sandra Lue</span>
                  <span className="nametag-designation">Chief Marketing Officer</span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div className="main-section-image4">
            <animated.div style={poppingOutAnimation(800)}>
              <Image
                className="main-section-inner main-section-inner-image4"
                src={MainImage4}
              />
              <animated.div
                style={{ position: "absolute", ...anim6 }}
                className="main-section-image2-nametag-container"
                id="main-section-image2-nametag-container4"
              >
                <div
                  className="main-section-image2-nametag"
                  id="main-section-image2-nametag4"
                  style={{ minWidth: 193 }}
                >
                  <span className="nametag-title">Franco Landman</span>
                  <span className="nametag-designation">Software Engineer @ Apple</span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div className="main-section-image5">
            <animated.div style={poppingOutAnimation(1200)}>
              <Image
                className="main-section-inner main-section-inner-image5"
                src={MainImage5}
              />
              <animated.div
                style={{ position: "absolute", ...anim3 }}
                className="main-section-image2-nametag-container"
              >
                <div
                  className="main-section-image2-nametag"
                  id="main-section-image2-nametag-container5"
                >
                  <span className="nametag-title">Daniella Fox</span>
                  <span className="nametag-designation">
                    <span>Founder of DF Legal Firm</span>
                    <span>
                      <Svgs.WeighingScale />
                    </span>
                  </span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div className="main-section-image6">
            <animated.div style={poppingOutAnimation(900)}>
              <Image
                className="main-section-inner main-section-inner-image6"
                src={MainImage6}
              />
              <animated.div
                style={{ position: "absolute", ...anim2 }}
                className="main-section-image2-nametag-container"
              >
                <div className="main-section-image2-nametag">
                  <span className="nametag-title">Ben Iyere</span>
                  <span className="nametag-designation">
                    <span>Founder & CEO of Sneaker TLC</span>
                    <span>
                      <Svgs.ThinkTank />
                    </span>
                  </span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div className="main-section-image7">
            <animated.div style={poppingOutAnimation(600)}>
              <Image
                className="main-section-inner main-section-inner-image7"
                src={MainImage7}
              />
              <animated.div
                style={{ position: "absolute", ...anim9 }}
                className="main-section-image2-nametag-container"
                id="main-section-image2-nametag-container7"
              >
                <div
                  className="main-section-image2-nametag"
                  id="main-section-image2-nametag7"
                  style={{ minWidth: 202 }}
                >
                  <span className="nametag-title">Sandra Lue</span>
                  <span className="nametag-designation">
                    <span>
                      Head of finance @ LawrellBell
                    </span>
                    <span>
                      <Svgs.Badge />
                    </span>
                  </span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div className="main-section-image8">
            <animated.div style={poppingOutAnimation(1300)}>
              <Image
                className="main-section-inner main-section-inner-image8"
                id="main-section-inner-image8"
                src={MainImage8}
              />
              <animated.div
                style={{ ...anim4, position: "absolute" }}
                className="main-section-image2-nametag-containerleft"
                id="main-section-image2-nametag-containerleft8"
              >
                <div
                  className="main-section-image2-nametagleft"
                  id="main-section-image2-nametag8"
                >
                  <span className="nametag-title">Aisha Ali</span>
                  <span className="nametag-designation">
                    Philosophy Student
                  </span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div className="main-section-image9">
            <animated.div style={poppingOutAnimation(300)}>
              <Image
                className="main-section-inner main-section-inner-image9"
                src={MainImage9}
              />
              <animated.div
                style={{ position: "absolute", ...anim5 }}
                className="main-section-image2-nametag-container"
                id="main-section-image2-nametag-container9"
              >
                <div className="main-section-image2-nametag">
                  <span className="nametag-title">Fisayo Adenuga</span>
                  <span className="nametag-designation">Founder of Muchmore Holdings</span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div
            className="main-section-image10"
            style={{ maxWidth: 64, maxHeight: 64 }}
          >
            <animated.div style={poppingOutAnimation(700)}>
              <Image
                style={{ minWidth: 64, minHeight: 64 }}
                className="main-section-inner main-section-inner-image10"
                src={MainImage10}
              />
            </animated.div>
          </div>

          <div className="main-section-image11">
            <animated.div style={poppingOutAnimation(1000)}>
              <Image
                className="main-section-inner main-section-inner-image11"
                src={MainImage11}
              />
              <animated.div
                style={{ position: "absolute", ...anim7 }}
                className="main-section-image2-nametag-container"
                id="main-section-image2-nametag-container11"
              >
                <div className="main-section-image2-nametag">
                  <span className="nametag-title">Thabo Khoza</span>
                  <span className="nametag-designation">
                    <span>
                      Award Winning Artist
                    </span>
                    <span>
                      <Svgs.Star />
                    </span>
                  </span>
                </div>
              </animated.div>
            </animated.div>
          </div>

          <div
            // onClick={()=> router.push('/blogs')}
            className="banner-titel-mobile"
            style={styles.bannerTitle}
          >
            {/* <div className="box  title1">PAAQ</div> */}
            <div className="box2" style={{ fontSize: "65px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {/* <animated.div style={textAnimation(4000)}> */}
                  <p className="box3">Please</p>
                {/* </animated.div> */}
                {/* <animated.div style={textAnimation(4500)}> */}
                  <p className="box4">Ask</p>
                {/* </animated.div> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "-18px",
                }}
              >
                {/* <animated.div style={textAnimation(5000)}> */}
                  <p className="box5">Any</p>
                {/* </animated.div> */}
                {/* <animated.div style={textAnimation(5500)}> */}
                  <p className="box6">Question</p>
                {/* </animated.div> */}
              </div>
            </div>
          </div>
          <div style={styles.bannerTitleMobile} className="banner-titel-mobile">
            <span className="banner-titel-mobile-text-1">Answer questions based on your expertise and</span> <br />
            <span className="banner-titel-mobile-text-2"> receive rewards.</span>
          </div>
          <Button
            className="getstarted-button"
            style={{ backgroundColor: "#00B5B4" }}
          >
            <span className="getstarted-button-modify">
              Get Started
            </span>
          </Button>
        </Box>
        <div className="banner-info-box">
          <div
            className="banner-info-text-container"
            style={{
              color: "white",
              width: "60%",
              textAlign: "left",
              overflow: "hidden",
            }}
          >
            <div
              className="main-mobile-what-text"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="mobile-what-text"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Sofia-Pro",
                  marginRight: 10,
                }}
              >
                What is PAAQ
              </div>
              <div>
              <Image
                className="mobile-speaker-icon"
                src={  !speak ? SpeakerIcon : whitespeaker1}
                onClick={() => handleSpeakerClick()}
                style={{cursor:'pointer'}}
              />
              </div>
              <audio ref={svgRef} id="audio" src="/PAAQ.wav"></audio>
            </div>

            <div className="web-show-paaq-text">
              <div className="paaq-explain-text-1">
                <div className="paaq-explain-img">
                  <img src={homeshowskill} alt="" />
                </div>
                <div>
                  PAAQ is a social media platform that connects users with experts to ask questions and receive answers through text or video.
                </div>
              </div>
              <br />
              <div className="paaq-explain-text-1">
                <div className="paaq-explain-img">
                  <img src={homeaiskill} alt="" />
                </div>
                <div>
                Conversing with an expert will give you a sense of human connection. However, this feeling is absent when using an automated system
                </div>
              </div>
              <br />
              <div className="paaq-explain-text-1">
                <div className="paaq-explain-img">
                  <img src={homelightskill} alt="" />
                </div>
                <div>
                With PAAQ, you can ask anyone with experience and expertise for informed and detailed answers to your questions.
                </div>
              </div>
              {/* {isTruncated ? (
                <span>{textLen.slice(0, 131)}...</span>
              ) : (
                <span>{textLen.slice(0, 131)} <br /><br /> {textLen.slice(132, 1301)} </span>
              )} */}
              <br />
              {/* <span
                style={{
                  textDecorationLine: "underline",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
                onClick={() => setIsTruncated(!isTruncated)}
              >
                Read {isTruncated ? "More" : "Less"}
              </span> */}
            </div>
            {/* <div className='mobile-show-paaq-text' style={{
              fontSize: 18, marginTop: 20, lineHeight: 1.5, fontWeight: 'lighter',
              fontFamily: 'SofiaPro-Soft', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>

              “PAAQ is a question-and-answer social media application that
              connects experts in their field with people interested in their craft
              socially and professionally.”
    
            </div> */}
            <br />

            {/* <div className='read-more-mobile'>Read More</div> */}
            {/* <animated.div className='animation-text-mobile' style={{ animationIterationCount: 'infinite', display: 'flex', flexDirection: 'row', position: 'absolute', marginTop: '50px', overflow: "hidden", left: 145 }}>
              <animated.div style={{ fontFamily: 'Sofia-Pro', opacity: '0.6', fontSize: '15px', ...style }}>{`Hi Thomas, how can I grow my business in ...`}</animated.div>

              <animated.div style={{ fontFamily: 'Sofia-Pro', opacity: '0.6', fontSize: '15px', ...style2 }}>Hi Peter, I'm new here please guide me</animated.div>


              <animated.div style={{ fontFamily: 'Sofia-Pro', opacity: '0.6', fontSize: '15px', ...style3 }}>Morning Michel, My pet is feeling dizziness</animated.div>
            </animated.div> */}
          </div>
          
          <div
            className="banner-info-text-container2"
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Sofia-Pro",
              display: "flex",
              alignItems: "flex-end",
              width: "40%",
              overflow: "hidden",
            }}
          >
            <PaaqHomeSlider width='286px' height='419px'/>
            {/* {domLoaded && (
              <div className='player-wrapper' style={{marginBottom:'0px'}}>
                <ReactPlayer
                  className='react-player-download'
                  url='gifs/PostInformation.mov'
                  width='100%'
                  height='100%'
                  loop={true}
                  playing={true}
                  muted={true}
                />
              </div>
            )} */}
          </div>
        </div>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    // pt: ['90px', '90px', '95px', '100px', null, null, '110px', '110px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,

    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      marginTop: 50,
      width: ["100%", "90%", "100%", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
      position: "relative",
      paddingBottom: "18%",
      paddingTop: "10%",
    },
    // '.banner-title': {
    //   textAlign: 'center',
    //   fontSize: '6em',
    //   color: 'black',
    //   fontFamily: 'SofiaPro-Soft',
    //   fontWeight: '500',
    //   lineHeight: '86px',
    // }
  },
  bannerTitle: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    top: 0,
  },
  bannerTitleMobile: {
    margin: "30px 0px",
    fontFamily: "Sofia-Pro",
    fontWeight: 500,
    color: "#1E1E1E",
    lineHeight: 1.2,
    fontSize: 20,
    "@media screen and (max-width: 720px)": {
      marginTop: "0px !important",
      marginBottom: "10px !important",
      fontSize: "10px !important",
    },
    "@media screen and (max-width: 567px)": {
      marginTop: "0px !important",
      marginBottom: "10px !important",
      fontSize: "10px !important",
    }
    ,
  },
  bannerWhatText: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Sofia-Pro",
    marginRight: 15,
  },
};
