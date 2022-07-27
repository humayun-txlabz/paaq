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
  
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoMain} />
          <Flex as="nav" sx={styles.nav} className='header-menu'>
            {menuItems.map(({ path, label }, i) => (
              <Link
              className='nav-menu-items'
                href={path}
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
      color: '#252F44',
      overflow: 'hidden',
      display: 'inline-block',
      '&:hover': {
        color: '#252F44',
        fontWeight: 'bold',
      },
      '&.active': {
        fontWeight: '600',
        fontSize: 20
      },
    },
  },
};
