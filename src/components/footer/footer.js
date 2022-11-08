/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import Tiktok from 'assets/Icons/footerIcons/tiktok.png';
import Simple from 'assets/Icons/footerIcons/iconsimple.png';
import Insta from 'assets/Icons/footerIcons/insta.png';
import Linkedin from 'assets/Icons/footerIcons/linedin.png';
import Twitter from 'assets/Icons/footerIcons/Twitter.png';
export default function Footer() {
  return (
    <footer className='footer-mobile-view' sx={styles.footer}>
      <Container style={{ width: '100%' }}>
        {/* <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <Box
              key={`footer-widget--key${item.id}`}
              sx={styles.widgets.widgetItem}
            >
              <Image src={item.iconSrc} alt={item.altText} />
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as="h3">{item.title}</Heading>
                <Text as="p">{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Grid> */}
        {/* End of footer widgets area */}
        <Box className='mobile-footer-menu-list' sx={styles.footer.footerBottomArea}>
              {data.menuItem.map((item, index) =>
               <Box className="mobile-footer-menu" sx={styles.footer.menus}>
                <span style={{ color: '#fff', fontFamily: 'Sofia-Pro-Bold', fontSize: 26, fontWeight: '700', textAlign: 'left'}}>{data.menuItemHeading[index]}</span>
                <nav className='mobile-footer-nav' style={{marginTop: 20, textAlign: 'left'}}>
            
                {item.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
            </nav>

          </Box>
              )}
        </Box>
        <div className='footer-copyright-container'>
          <div className='icons-bottom-footer-mobile'>
                  <div style={{background: '#fff'}} className='icon-bg'><img src={Insta} /></div>
                  <div className='icon-bg'><img src={Linkedin} /></div>
                  <div className='icon-bg'><img src={Twitter} /></div>
                  <div className='icon-bg'><img src={Simple} /></div>
                  <div className='icon-bg'><img src={Tiktok} /></div>
          </div>
       </div>
              <div className='h-line' />

       
      </Container>
      <div className='footer-copyright-container'>
       <Text sx={styles.footer.copyright}>
            Copyright© PAAQ 2022. All Rights Reserved.
          </Text>
          <div className='icons-bottom-footer icons-bottom-footer-web'>
                  <div style={{background: '#fff'}} className='icon-bg'><img src={Insta} /></div>
                  <div className='icon-bg'><img src={Linkedin} /></div>
                  <div className='icon-bg'><img src={Twitter} /></div>
                  <div className='icon-bg'><img src={Simple} /></div>
                  <div className='icon-bg'><img src={Tiktok} /></div>
          </div>
       </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 100,
    backgroundColor: '#252F44',
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      // paddingTop: 100,
      pb: ['20px', null, '12px'],
      textAlign: 'center',
      alignItems: 'flex-start',
      justifyContent: 'space-between', 
    },
    menus: {
      mt: [3, 4],
      mb: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
       
    },

    link: {
      // fontSize: [1, '25px'],
      fontFamily: 'SofiaPro-Soft',
      fontSize: 18,
      fontWeight: 400,
      color: '#fff',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 2],
      // px: [2, null, 4],
      ':hover': {
        color: '#fff',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      color: 'white',
      textAlign: 'center',
      // borderTop: '1px solid #5D6C8B',
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
