/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Logo from "components/logo";
import LogoDark from "assets/logo.svg";
import LogoMain from "assets/logoMain.svg";

import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import HomeUnderLine from 'assets/Icons/header/home-underline.png';
import { useRouter } from 'next/router';

export default function Header({ className }) {
  const {pathname} = useRouter();
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header" >
        <span className="logoImgCursor"><Link href={'/'} ><img className="logoImg" src={LogoMain} /></Link></span>
        <div className="right-container">
          <div className="nav-menu-desktop">
            {menuItems.map(({ path, label }, i) => (
              <div style={{display: label=== 'Download' || label=== 'Contact Us' || label=== 'Blogs'? 'none' : ''}} key={i} className={`nav-menu-items ${pathname == path ?"menu-active":""}`}><Link style={{color: '#1e1e1e'}}  href={path} key={i}>
                {label}
              </Link>
              {pathname == path ? <img className="underline-style" src={HomeUnderLine} /> : null}
              </div>
            ))}
          </div>
          <Link href={'/download'}>
            <Button className={`download_button ${pathname.includes('download') && "download_button_white"}`} aria-label="Download">
              Download
            </Button>
          </Link>
          

        </div>
        <div className="mobile-menu-open-drawer">
        <MobileDrawer />
        </div>
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
    color: "text",
    fontWeight: "body",
    pb: 4,
    pt: 3,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    "&.sticky": {
      position: "fixed",
      backgroundColor: "#ffffff",
      color: "#000000",
      // boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.25)',
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
};
