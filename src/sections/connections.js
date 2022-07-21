/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, Image } from 'theme-ui';
// import Image from 'next/Image'
import BannerImg from 'assets/banner-phone.png';
import { useRouter } from 'next/router';

export default function Connections() {
  const router = useRouter();
  return (
    <section sx={styles.banner} id="community">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <div onClick={() => router.push('/blogs')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span className='banner-title'>
              Our Connections
            </span>
          </div>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 50, width: '80%', margin: '0 auto' }}>
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
            <div style={{ color: 'white', textAlign: 'left', marginTop: 50 }}>
              <div style={{ fontSize: '2.4em', fontWeight: 'bold', color: '#252F44' }}>01. Professionally</div>

              <div style={{ fontSize: '1.2em', marginTop: 20, color: '#5B5B5B', lineHeight: 1.5, fontWeight: 'lighter', fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                A professional is someone who possesses a specific set of skills related to their profession; as such, it is only reasonable to share your knowledge with others. In the example of a cameraman, the effective use of a camera is one of his skills.
              </div>
              <br />
            </div>
          </div>
          <div className='connections-info-box' style={{ paddingTop: '5%', paddingBottom: 0}}>

          <div style={{ color: 'white', textAlign: 'left' }}>
              <div style={{ fontSize: '2.4em', fontWeight: 'bold', color: '#252F44' }}>02. Socially</div>

              <div style={{ fontSize: '1.2em', marginTop: 20, color: '#5B5B5B', lineHeight: 1.5, fontWeight: 'lighter', fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              It is nice to enjoy a delicious meal and a chilled
cocktail on a sunny day or to travel the world with
family and friends to your favourite locations, but
being rewarded for sharing your social life on PAAQ
is even better.  </div>
              <br />
            </div>
            <div style={{ color: 'white', fontSize: 18, marginTop: 50, fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src={BannerImg}
                alt="Picture of the phone"
                style={{
                  width: 300,
                  height: '100%'
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
