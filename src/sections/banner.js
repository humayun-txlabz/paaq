/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, Image } from 'theme-ui';

import { Container, Box, Button } from 'theme-ui';
import { animated, useSprings, useSpring, to, update } from "react-spring";
import BannerImg from 'assets/banner-phone.png';
import MainImage1 from 'assets/Images/main1.png';
import MainImage2 from 'assets/Images/earn3.png';
import MainImage3 from 'assets/Images/main3.png';
import MainImage4 from 'assets/Images/main9.png';
import MainImage5 from 'assets/Images/main7.png';
import MainImage6 from 'assets/Images/main8.png';
import MainImage7 from 'assets/Images/main6.png';
import MainImage8 from 'assets/Images/main22.png';
import MainImage9 from 'assets/Images/main44.png';
import MainImage10 from 'assets/Images/main5.png';
import MainImage11 from 'assets/Images/main2.png';
import bann from 'assets/bannerMobileView.png'
import SpeakerIcon from 'assets/Icons/whitespeaker.png';
import FadeAnimation from 'components/fadeAnimation';
 

export default function Banner() {
  const svgRef = React.createRef();

  const [style, setStyle] = useSpring(() => ({
    from: { x: 720 },
    to: { x: -350 },
    delay: 0,
    config: { duration: 8000 },
    onRest: () => update(16000)
  }));
  const [style2, setStyle2] = useSpring(() => ({
    from: { x: 420 },
    to: { x: -600 },
    delay: 8000,
    config: { duration: 8000 },
    onRest: () => update2(16000)

  }));

  const update = (delay) => {
    setStyle({
      from: { x: 720 },
      to: { x: -350 },
      delay: delay,
      config: { duration: 8000 },
      loop: true,
    })
  }
  const update2 = (delay) => {

    setStyle2({
      from: { x: 420 },
      to: { x: -600 },
      delay: delay,
      config: { duration: 8000 },
    })
  }

  const style3 = useSpring({
    from: { x: 320 },
    to: { x: -900 },
    delay: 15400,
    config: { duration: 8000 },
    loop: true

  })

  const poppingOutAnimation = (delay) => useSpring({
    from: { x: 0, y: 0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: delay
  });

  const [anim1, setAnim1] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],

    delay: 2000,
    config: { duration: 500 },

    onRest: () => update3(1)
  }));
  const [anim2, setAnim2] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 5500,
    config: { duration: 500 },

    onRest: () => update3(2)
  }));
  const [anim3, setAnim3] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 9000,
    config: { duration: 500 },

    onRest: () => update3(3)
  }));
  const [anim4, setAnim4] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 13000,
    config: { duration: 500 },

    onRest: () => update3(4)
  }));
  const [anim5, setAnim5] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 16500,
    config: { duration: 500 },

    onRest: () => update3(5)
  }));
  const [anim6, setAnim6] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 20000,
    config: { duration: 500 },

    onRest: () => update3(6)
  }));
  const [anim7, setAnim7] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 24000,
    config: { duration: 500 },

    onRest: () => update3(7)
  }));
  const [anim8, setAnim8] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 28000,
    config: { duration: 500 },

    onRest: () => update3(8)
  }));

  const [anim9, setAnim9] = useSpring(() => ({
    from: { x: 0, y: 0, opacity: 0, scale: 0 },
    to: [
      { x: 0, y: 0, opacity: 1, scale: 1 },
      { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
    ],
    delay: 31500,
    config: { duration: 500 },

    onRest: () => update3(9)
  }));


  const update3 = (value) => {
    let obj = {
      from: { x: 0, y: 0, opacity: 0, scale: 0 },
      to: [
        { x: 0, y: 0, opacity: 1, scale: 1 },
        { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
      ],
      delay: 31700,
      config: { duration: 500 },
      loop: true,
    }
    switch (value) {
      case 1:
        setAnim1(obj)
        break;
      case 2:
        setAnim2(obj)
        break;
      case 3:
        setAnim3(obj)
        break;
      case 4:
        setAnim4(obj)
        break;
      case 5:
        setAnim5(obj)
        break;
      case 6:
        setAnim6(obj)
        break;
      case 7:
        setAnim7(obj)
        break;
      case 8:
        setAnim8(obj)
        break;
      default:
        setAnim9(obj)

    }
  }



  const handleSpeakerClick = () => {
    svgRef.current?.play();
  };

  const textAnimation = (delay) => useSpring({
    from: { x: 0, y: 0, opacity: 0 },
    to: { x: 0, y: 0, opacity: 1 },
    delay: delay,
    config: { mass: 1, tension: 180, friction: 12 },
    velocity: 10,
  });

  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>

          <div className='main-section-image1' style={{ maxWidth: 60, maxHeight: 60 }}>
            <animated.div style={poppingOutAnimation(0)} >
              <Image className='main-section-inner main-section-inner-image1' src={MainImage1} />
            </animated.div>
          </div>

          <div className='main-section-image2'>
            <div style={{ position: 'absolute' }} style={{ maxWidth: 60, maxHeight: 60 }} >
              <animated.div style={poppingOutAnimation(1100)} >
                <Image className='main-section-inner main-section-inner-image2' src={MainImage2} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-container' style={{ ...anim1 }} >
                  <div className='main-section-image2-nametag'>
                    <span className='nametag-title'>Micheal Keen</span>
                    <span className='nametag-designation'>Pilot</span>
                  </div>
                </animated.div>
              </animated.div>
            </div>
          </div>

          <div className='main-section-image3'>
            <animated.div style={poppingOutAnimation(500)} >
              <div style={{ position: 'absolute' }} style={{ maxWidth: 64, maxHeight: 64 }}>

                <Image className='main-section-inner main-section-inner-image3' src={MainImage3} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-containerleft' style={{ ...anim8 }} >
                  <div className='main-section-image2-nametagleft'>
                    <span className='nametag-title'>Sandra Lue</span>
                    <span className='nametag-designation'>Beautician</span>
                  </div>
                </animated.div>
              </div>
              {/* <animated.div style={styles3} >
              <div className='main-section-image2-nametag-containerleft'>
                <div className='main-section-image2-nametagleft'>
                  <span className='nametag-title'>Sandra Lue</span>
                  <span className='nametag-designation'>Beautician</span>
                </div>
              </div>
            </animated.div> */}
            </animated.div>
          </div>

          <div className='main-section-image4'>
            <animated.div style={poppingOutAnimation(800)} >
              <div style={{ position: 'absolute' }}  style={{ maxWidth: 112, maxHeight: 112 }}>
                <Image className='main-section-inner main-section-inner-image4' src={MainImage4} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-container' style={{ ...anim6 }} >
                  <div className='main-section-image2-nametag' style={{ minWidth: 193 }}>
                    <span className='nametag-title'>John Hassel</span>
                    <span className='nametag-designation'>Software Engineer</span>
                  </div>
                </animated.div>
              </div>
            </animated.div>
          </div>

          <div className='main-section-image5'>
            <animated.div style={poppingOutAnimation(1200)} >
              <div style={{ position: 'absolute' }} style={{ maxWidth: 88, maxHeight: 88 }} >
                <Image className='main-section-inner main-section-inner-image5' src={MainImage5} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-container' style={{ ...anim3 }} >
                  <div className='main-section-image2-nametag'>
                    <span className='nametag-title'>Daniella Fox</span>
                    <span className='nametag-designation'>Accountant</span>
                  </div>
                </animated.div>
              </div>
            </animated.div>
          </div>

          <div className='main-section-image6'>
            <animated.div style={poppingOutAnimation(900)} >
              <div style={{ position: 'absolute' }} style={{ maxWidth: 48, maxHeight: 48 }}>
                <Image className='main-section-inner main-section-inner-image6' src={MainImage6} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-container' style={{ ...anim2 }} >
                  <div className='main-section-image2-nametag'>
                    <span className='nametag-title'>Brian Walker</span>
                    <span className='nametag-designation'>Athelete</span>
                  </div>
                </animated.div>
              </div>
            </animated.div>
          </div>

          <div className='main-section-image7'>
            <animated.div style={poppingOutAnimation(600)} >
              <div style={{ position: 'absolute' }} style={{ maxWidth: 64, maxHeight: 64 }} >
                <Image className='main-section-inner main-section-inner-image7' src={MainImage7} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-container' style={{ ...anim9 }} >
                  <div className='main-section-image2-nametag' style={{ minWidth: 202 }}>
                    <span className='nametag-title'>Sue Chan</span>
                    <span className='nametag-designation'>Marteking Manager</span>
                  </div>
                </animated.div>
              </div>
            </animated.div>
          </div>

          <div className='main-section-image8'>
            <animated.div style={poppingOutAnimation(1300)} >
              <div style={{ position: 'absolute' }} style={{ maxWidth: 110, maxHeight: 110 }} >
                {/* <div className='ask-eightavatar-question'>
                  <p className='ask-eightavatar-question-detail anim-typewriter'>
                    I can help with that!😄👍
                  </p>
                </div> */}
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}

                {/* <animated.div
                    className={'solution-icon'}
                    style={{
                      position: 'absolute',
                      // right: 25,
                      ...styles2,
                    }}
                  /> */}
                <Image className='main-section-inner main-section-inner-image8' src={MainImage8} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-containerleft' style={{ ...anim4 }} >
                  <div className='main-section-image2-nametagleft'>
                    <span className='nametag-title'>Aisha Ali</span>
                    <span className='nametag-designation'>Philosophy Student</span>
                  </div>
                </animated.div>
              </div>
            </animated.div>
          </div>

          <div className='main-section-image9'>
            <animated.div style={poppingOutAnimation(300)} >
              <div style={{ position: 'absolute' }} style={{ maxWidth: 110, maxHeight: 110 }} >
                <Image className='main-section-inner main-section-inner-image9' src={MainImage9} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-container' style={{ ...anim5 }} >
                  <div className='main-section-image2-nametag'>
                    <span className='nametag-title'>Daniel Trump</span>
                    <span className='nametag-designation'>Professor</span>
                  </div>
                </animated.div>
              </div>
            </animated.div>
          </div>

          <div className='main-section-image10' style={{ maxWidth: 64, maxHeight: 64 }}>
            <animated.div style={poppingOutAnimation(700)} style={{ minWidth: 64, minHeight: 64 }}>
              <Image style={{ minWidth: 64, minHeight: 64 }} className='main-section-inner main-section-inner-image10' src={MainImage10} />
            </animated.div>
          </div>

          <div className='main-section-image11' >
            <animated.div style={poppingOutAnimation(1000)} >
              <div style={{ position: 'absolute' }} style={{ maxWidth: 118, maxHeight: 118 }}>
                <Image className='main-section-inner main-section-inner-image11' src={MainImage11} />
                <animated.div style={{ position: 'absolute' }} className='main-section-image2-nametag-container' style={{ ...anim7 }} >
                  <div className='main-section-image2-nametag'>
                    <span className='nametag-title'>Thabo Khoza</span>
                    <span className='nametag-designation'>Artist</span>
                  </div>
                </animated.div>
              </div>
            </animated.div>
          </div>

          <div
            // onClick={()=> router.push('/blogs')} 
            className='banner-titel-mobile'
            style={styles.bannerTitle}
          >

            <div className='box  title1'>
              PAAQ
            </div>
            <div className='box2' style={{fontSize: '65px'}}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <animated.div style={textAnimation(4000)} >

                  <p className='box3'>Please</p>
                </animated.div>
                <animated.div style={textAnimation(4500)} >

                  <p className='box4'>Ask</p>
                </animated.div>

              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-18px' }}>
                <animated.div style={textAnimation(5000)} >
                  <p className='box5'>Any</p>
                </animated.div>
                <animated.div style={textAnimation(5500)} >

                  <p className='box6'>Question</p>
                </animated.div>

              </div>
            </div>
          </div>
          <div style={styles.bannerTitleMobile}
            className="banner-titel-mobile">
            Earn money by answering questions based on <br />
            your skills and knowledge.
          </div>
          <Button className='getstarted-button' >Get Started</Button>

        </Box>
        <div className='banner-info-box'>
          <div className='banner-info-text-container' style={{ color: 'white', width: '60%', textAlign: 'left', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', }}>

              <div className='mobile-what-text' style={{ fontSize: 60, fontWeight: 'bold', fontFamily: 'Sofia-Pro', marginRight: 15 }}>
                What is PAAQ
              </div>
              <Image className='mobile-speaker-icon' style={{ cursor: 'pointer', width: '39px', height: '31px', marginLeft: '11px'}} src={SpeakerIcon}  onClick={() => handleSpeakerClick()} />
              <audio ref={svgRef} id="audio" src='/paaq-audio.mp3' ></audio>

            </div>

            <div className='web-show-paaq-text' style={{}}>

              “PAAQ is a question-and-answer social media application that
              connects experts in their field with people interested in their craft
              socially and professionally.”
              <br /><br />
              PAAQ is a knowledge based social media application designed to
              facilitate people's exchange of valuable insights and knowledge
              as well as earn money from answering questions.
            </div>
            <div className='mobile-show-paaq-text' style={{
              fontSize: 18, marginTop: 20, lineHeight: 1.5, fontWeight: 'lighter',
              fontFamily: 'SofiaPro-Soft', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>

              “PAAQ is a question-and-answer social media application that
              connects experts in their field with people interested in their craft
              socially and professionally.”
    
            </div>
            <br />

            <div className='read-more-mobile' style={{ fontSize: '1.2em', textDecoration: 'underline', fontFamily: 'Sofia-Pro'}}>Read More</div>
            <animated.div className='animation-text-mobile' style={{ animationIterationCount: 'infinite', display: 'flex', flexDirection: 'row', position: 'absolute', marginTop: '50px', overflow: "hidden", left: 145 }}>
              <animated.div style={{ fontFamily: 'Sofia-Pro', opacity: '0.6', fontSize: '15px', ...style }}>{`Hi Thomas, how can I grow my business in ...`}</animated.div>

              <animated.div style={{ fontFamily: 'Sofia-Pro', opacity: '0.6', fontSize: '15px', ...style2 }}>Hi Peter, I'm new here please guide me</animated.div>


              <animated.div style={{ fontFamily: 'Sofia-Pro', opacity: '0.6', fontSize: '15px', ...style3 }}>Morning Michel, My pet is feeling dizziness</animated.div>
            </animated.div>

          </div>
          <div className='banner-info-text-container2' style={{ color: 'white', fontSize: 18, fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40%' }}>
            <img
              src={BannerImg}
              className="banner-image-mobile"
            />
            <img src={bann} className="banner-image-mobile-view" />
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
    position: 'relative',
    zIndex: 2,

    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      marginTop: 50,
      width: ['100%', '90%', '100%', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
      position: 'relative',
      paddingBottom: '18%',
      paddingTop: '10%',
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
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  bannerTitleMobile: {
    margin: '30px 0px',
    fontFamily: 'Sofia-Pro',
    fontWeight: 400,
    color: 'black',
    lineHeight: 1.2,
    fontSize: 20,
    '@media screen and (max-width: 720px)': {
      marginTop: '0px !important',
      marginBottom: '10px !important',
      fontSize: '10px !important',
    },
  },
  bannerWhatText: {
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'Sofia-Pro',
    marginRight: 15,
    
  },
 
};
