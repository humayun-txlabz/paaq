/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, Image } from 'theme-ui';
import BannerImg from 'assets/connection-image1.png';
import BannerImg2 from 'assets/globe.png';
import { useRouter } from 'next/router';

export default function Connections() {
  const router = useRouter();
  return (
    <section className='mobile-view-connection-banner' sx={styles.banner} id="community">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span className='banner-title banner-title-mobile'>
              Our Connections
            </span>
          </div>
        </Box>
        <div className='box-container-connection' style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 50, width: '80%', margin: '0 auto' }}>
          <div className='connections-info-box'>

            <div style={{ color: 'white', fontSize: 18, fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src={BannerImg}
                alt="Picture of the phone"
                style={{
                  width: 300,
                  height: '100%'
                }}
              />
            </div>
            <div style={{ color: 'white', textAlign: 'left', marginTop: '20%' }}>
              <div className='connection-heading' style={{ fontSize: 38, fontWeight: 'bold', color: '#252F44', fontFamily: 'Sofia-Pro' }}>01. Professionally</div>

              <div className='connection-detail' style={{ fontSize: 18, marginTop: 20, color: '#5B5B5B', lineHeight: 2, fontWeight: 'lighter', fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                A professional is someone who possesses a specific set of skills related to their profession; as such, it is only reasonable to share your knowledge with others. In the example of a cameraman, the effective use of a camera is one of his skills.
              </div>
              <br />
            </div>
          </div>
          <div className='connections-info-box connections-info-box-mobile' style={{ paddingTop: '5%', paddingBottom: 0, paddingRight: 0 }}>

            <div style={{ color: 'white', textAlign: 'left', paddingRight: '11%' }}>
              <div className='connection-heading' style={{ fontSize: 38, fontWeight: 'bold', color: '#252F44', fontFamily: 'Sofia-Pro' }}>02. Socially</div>

              <div className='connection-detail' style={{ fontSize: 18, marginTop: 20, color: '#5B5B5B', lineHeight: 2, fontWeight: 'lighter', fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                It is nice to enjoy a delicious meal and a chilled
                cocktail on a sunny day or to travel the world with
                family and friends to your favourite locations, but
                being rewarded for sharing your social life on PAAQ
                is even better.
              </div>
            </div>
            <div className='banner-image-connection-mobile' style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Image
                src={BannerImg2}
                alt="Picture of the phone"
                style={{
                  width: 400,
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 40,
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: '120px',
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
      width: ['100%', '90%', '100%', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    getStarted: {
      flexShrink: 0,
      backgroundColor: '#00B5B4',
      boxShadow: '5px 10px 44px 0px rgb(0 181 180 / 35%)',
      borderColor: null,
      borderRadius: 40,
      height: 60,
      width: 186,
      marginTop: 10,
      color: null,
      padding: 20,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      ':hover': {
        opacity: 0.8,
        boxShadow: '4px 7px 24px 0px rgb(0 0 0 / 28%)',
      }
    },
    '.banner-title': {
      textAlign: 'center',
      fontSize: '5em',
      color: 'black',
      fontFamily: 'Sofia-Pro',
      fontWeight: '500'
    }
  },
};
