/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
// import { Link } from "react-router-dom";
import Link from 'next/link'
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import LogoMain from 'assets/logoMain.svg';

import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  console.log('this is labell==>', menuItems)
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoMain} />
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
              className='nav-menu-items'
                href={path}
                // activeClass="active"
                // to={path}//{path}
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Button
            className="download_button"
            aria-label="Download"
          >
            Download
          </Button>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.download_button': {
      borderRadius: 40,
      width: 136,
      height: 47,
      fontSize: 16,
      fontFamily: 'Sofia-Pro',
      flexShrink: 0,
      backgroundColor: '#252F44',
      boxShadow: '4px 7px 24px 0px rgb(0 0 0 / 28%)',
      borderColor: null,
      color: null,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      ':hover': {
        // opacity: 0.8,
        cursor: 'pointer',
        boxShadow: '4px 7px 24px 0px rgb(0 0 0 / 28%)',
      }
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 20,
      fontFamily: 'Sofia-Pro',
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      color: '#252F44',
      '&:hover': {
        color: '#252F44',
        fontWeight: 'bold'
      },
      '&.active': {
        fontWeight: '600',
        fontSize: 20
      },
    },
  },
};
