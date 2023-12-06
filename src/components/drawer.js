import React, { Fragment } from 'react';
import { Box } from 'theme-ui';
import RcDrawer from 'rc-drawer';

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  logoMain,
  ...props
}) => {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className ? className : ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration="0.4s"
        {...props}
      >
        {/* {closeButton && (
          <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </Box>
        )} */}
        <Box sx={drawerStyle}>
          <div className='mobile-menu-header'>
            <div className='mobile-menu-header-img'>
            <img src={logoMain} alt="Logo Main" />
            </div>
            <svg onClick={toggleHandler} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="#D8D8D8" />
              <path d="M15.5152 25.8317L19.9983 21.3428L24.4887 25.8318C24.8483 26.1912 25.4622 26.1901 25.8281 25.8243L25.8281 25.8243L25.8297 25.8227C26.1845 25.4514 26.1967 24.8459 25.8277 24.4849C25.8276 24.4848 25.8274 24.4846 25.8273 24.4845L21.345 19.9963L25.8273 15.5155C25.8274 15.5154 25.8276 15.5152 25.8277 15.5151C26.1953 15.1555 26.1939 14.5414 25.8281 14.1757L25.8281 14.1757L25.8265 14.1741C25.455 13.8193 24.8497 13.8074 24.4887 14.1682L19.9983 18.6572L15.5152 14.1683L15.5152 14.1682C15.1653 13.8185 14.5359 13.7999 14.175 14.1765C13.8093 14.5429 13.817 15.1635 14.1683 15.5147L14.1684 15.5148L18.6587 19.9963L14.1683 24.4853C13.8179 24.8356 13.8006 25.4572 14.1762 25.8247C14.5427 26.1906 15.1637 26.1831 15.5152 25.8318L15.5152 25.8317Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.2" />
            </svg>
          </div>
          {children}</Box>
      </RcDrawer>
      <Box
        className="drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </Box>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};

export default Drawer;
