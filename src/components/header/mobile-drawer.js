import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'components/link';
// import logoMain from '../../assets/logoMain.svg'
import logoMain from '../../../public/PAAQ_Logo.jpg'

import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from 'react-icons/fa';
import menuItems from './header.data';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="100%"
      drawerHandler={
        <Box sx={styles.handler} style={{padding:'12px'}}>
          {/* <IoMdMenu color={'#fff'} size="26px" /> */}
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.269531 0.857148C0.269531 0.383758 0.653289 0 1.12668 0H11.4124C11.8858 0 12.2695 0.383758 12.2695 0.857148C12.2695 1.33054 11.8858 1.7143 11.4124 1.7143H1.12668C0.653289 1.7143 0.269531 1.33054 0.269531 0.857148ZM0.269531 6.00026C0.269531 5.52687 0.653289 5.14311 1.12668 5.14311H11.4124C11.8858 5.14311 12.2695 5.52687 12.2695 6.00026C12.2695 6.47365 11.8858 6.8574 11.4124 6.8574H1.12668C0.653289 6.8574 0.269531 6.47365 0.269531 6.00026ZM1.12668 10.2858C0.653289 10.2858 0.269531 10.6695 0.269531 11.1429C0.269531 11.6163 0.653289 12.0001 1.12668 12.0001H11.4124C11.8858 12.0001 12.2695 11.6163 12.2695 11.1429C12.2695 10.6695 11.8858 10.2858 11.4124 10.2858H1.12668Z" fill="white" fill-opacity="0.85"/>
</svg>

        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
      logoMain={logoMain}
    >
     
     <div style={{marginTop:'0px'}}>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label, img }, i) => (
              <Link
              path={path}
              >
               <span style={{paddingLeft:'13px'}}>{img}</span>
               {/* <span className='mobile-menu-text'>{label}</span> */}
              </Link>
            ))}
          </Box>

          {/* <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link to={path}>{icon}</Link>
                </Box>
              ))}
            </Box>
          </Box> */}
        </Box>
        </div>
     
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    background: '#1e1e1e',
    padding: '0.5rem',
    borderRadius: '10px',
    '@media screen and (min-width: 767px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'dark',
    background: 'linear-gradient(335.49deg, #15CEB9 2.53%, #4293C5 89.73%)',

  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '25px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      pt: '15px',
      pb: '0px',
      cursor: 'pointer',
      // borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
