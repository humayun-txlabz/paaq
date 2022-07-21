/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Image from 'next/image';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
// import Image from 'next/Image'
import BannerImg from 'assets/banner-phone.png';
import { useRouter } from 'next/router';
import MainImage1 from 'assets/Images/main1.png';
import MainImage2 from 'assets/Images/earn3.png';
import MainImage3 from 'assets/Images/main3.png';
import MainImage4 from 'assets/Images/main9.png';
import MainImage5 from 'assets/Images/main7.png';
import MainImage6 from 'assets/Images/main8.png';
import MainImage7 from 'assets/Images/main6.png';
import MainImage8 from 'assets/Images/main22.png';
import MainImage9 from 'assets/Images/main4.png';
import MainImage10 from 'assets/Images/main5.png';
import MainImage11 from 'assets/Images/main2.png';
import { animated, useSprings, useSpring, to } from "react-spring";

export default function Banner() {
  const router = useRouter();

  const styles2 = useSpring({
    // loop: { reverse: true },
    loop: true,
    from: { x: 0, y: 0, opacity: 1 },
    to: { x: 0, y: -100, opacity: 0 },
    // delay: 1000,
    // config: { mass: 1, tension: 500 * velocity, friction: 50, duration: 2000 },
    config: { mass: 10, tension: 280, friction: 120, duration: 1000 },
  });

  const styles3 = useSpring({
    // loop: { reverse: true },
    // loop: true,
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
      // config: config.molasses,
  });

  const styles4 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 2200,
  });

  const styles5 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 500,
  });

  const styles6 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 800,
  });

  const styles7 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 1900,
  });

  const styles8 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 900,
  });

  const styles9 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 600,
  });

  const styles10 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 5000,
  });

  const styles11 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 300,
  });

  const styles12 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 700,
  });

  const styles13 = useSpring({
    from: { x: 0, y:0, zoom: 0, scale: 0 },
    to: { x: 0, y: 0, zoom: 1, scale: 1 },
    delay: 1000,
  });

  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <div className='main-section-image1' style={{ minWidth: 60, minHeight: 60 }}>
          <animated.div style={styles3} >
            <Image className='main-section-inner' src={MainImage1} width={60} height={60}  />
          </animated.div>
          </div>
          <div className='main-section-image2'>
          <animated.div style={styles4} >

            <Image className='main-section-inner' src={MainImage2} width={112} height={112}  />
          </animated.div>
          </div>
          <div className='main-section-image3'>
          <animated.div style={styles5} >

            <Image className='main-section-inner' src={MainImage3} width={64} height={64}  />
          </animated.div>
          </div>
          <div className='main-section-image4'>
                <animated.div style={styles6} >
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>

                  <animated.div
                    style={{
                      // width: 80,
                      // height: 80,
                      // backgroundColor: '#46e891',
                      // borderRadius: 16,
                      fontSize: 24,
                      position: 'absolute',
                      // left: '10%',
                      ...styles2,
                    }}
                  >?{' '}?</animated.div>
                  <Image className='main-section-inner' src={MainImage4} width={112} height={112} />
              </div>
              <div className='ask-fourthavatar-question'>
                <div className='ask-secondavatar-question-detail anim-typewriter'>
                  <p style={{ margin: 0, width: 195, textAlign: 'left' }}>
                    I have a request about
                  </p>
                  <p style={{ margin: 0, width: 150, textAlign: 'left' }}>
                    sending money😔😔
                  </p>
                </div>
              </div>
            </div>
                </animated.div>
          </div>
          <div className='main-section-image5'>
          <animated.div style={styles7} >

            <Image className='main-section-inner' src={MainImage5} width={88} height={88}  />
            </animated.div>
          </div>
          <div className='main-section-image6'>
          <animated.div style={styles8} >

            <Image className='main-section-inner' src={MainImage6} width={48} height={48}  />
            </animated.div>
          </div>
          <div className='main-section-image7'>
          <animated.div style={styles9} >

            <Image className='main-section-inner' src={MainImage7} width={64} height={64}  />
            </animated.div>
          </div>
          <div className='main-section-image8'>
            <animated.div style={styles10} >
              <div style={{ display: 'flex' }}>
                <div className='ask-eightavatar-question'>
                  <p className='ask-eightavatar-question-detail anim-typewriter'>
                    I can help with that!😄👍
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                  <animated.div
                    className={'solution-icon'}
                    style={{
                      position: 'absolute',
                      // right: 25,
                      ...styles2,
                    }}
                  />

                  <Image className='main-section-inner' src={MainImage8} width={110} height={110} />
                </div>
              </div>
            </animated.div>
          </div>
          <div className='main-section-image9'>
          <animated.div style={styles11} >

            <Image className='main-section-inner' src={MainImage9} width={110} height={110}  />
            </animated.div>
          </div>
          <div className='main-section-image10'>
          <animated.div style={styles12} >

            <Image className='main-section-inner' src={MainImage10} width={64} height={64}  />
            </animated.div>
          </div>
          <div className='main-section-image11'>
          <animated.div style={styles13} >
            
            <Image className='main-section-inner' src={MainImage11} width={118} height={118}  />
            </animated.div>
          </div>
          <div 
          // onClick={()=> router.push('/blogs')} 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span className='banner-title'>
              Please Ask<br />Any Question
            </span>
            {/* <Image src={BannerImg} alt="banner" /> */}
          </div>
          <div style={{
            margin: '30px 0px',
            fontFamily: 'Sofia-Pro',
            color: 'black',
            lineHeight: 1.2,
            fontSize: 20
          }}>
            Earn money by answering questions based on <br />
            your skills and knowledge.
          </div>
          <Button sx={styles.banner.getStarted}>Get Started</Button>

        </Box>
        {/* <div className='banner-info-box'>
          <div style={{ color: 'white', width: '60%', textAlign: 'left', }}>
            <div style={{ fontSize: '2.4em', fontWeight: 'bold' }}>What Is PAAQ</div>

            <div style={{ fontSize: '1.2em', marginTop: 20, lineHeight: 1.5, fontWeight: 'lighter', fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              “PAAQ is a question-and-answer social media application that
              connects experts in their field with people interested in their craft
              socially and professionally.”
              <br /><br />
              PAAQ is a knowledge based social media application designed to
              facilitate people's exchange of valuable insights and knowledge
              as well as earn money from answering questions.
            </div>
            <br />
            <div style={{ fontSize: '1.2em', textDecoration: 'underline' }}>Read more</div>
          </div>
          <div style={{ color: 'white', fontSize: 18, fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40%' }}>
            <Image
              src={BannerImg}
              alt="Picture of the phone"
              width={300}
              height={'100%'}
            />
          </div>
        </div> */}
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
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
      marginTop: 100,
      width: ['100%', '90%', '100%', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
      position: 'relative',
      paddingBottom: '22%'
    },
    getStarted: {
      flexShrink: 0,
      backgroundColor: '#00B5B4',
      boxShadow: '5px 10px 44px 0px rgb(0 181 180 / 35%)',
      borderColor: null,
      borderRadius: 40,
      height: 60,
      width: 186,
      fontFamily: 'Sofia-Pro',
      marginTop: 10,
      color: null,
      padding: 20,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      ':hover': {
        // opacity: 0.8,
        cursor: 'pointer',
        boxShadow: '4px 7px 24px 0px rgb(0 0 0 / 28%)',
      }
    },
    '.banner-title': {
      textAlign: 'center',
      fontSize: '6em',
      color: 'black',
      fontFamily: 'Sofia-Pro',
      fontWeight: '500',
      lineHeight: '86px',
    }
  },
};
