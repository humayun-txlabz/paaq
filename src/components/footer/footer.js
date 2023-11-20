/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import Link from 'next/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import Tiktok from 'assets/Icons/footerIcons/tiktok.png';
import Simple from 'assets/Icons/footerIcons/iconsimple.png';
import Insta from 'assets/Icons/footerIcons/insta.png';
import Linkedin from 'assets/Icons/footerIcons/linedin.png';
import Twitter from 'assets/Icons/footerIcons/Twitter.png';
import TiktokMod from 'assets/Icons/footerIcons/tiktokMod.png';
import SimpleMod from 'assets/Icons/footerIcons/iconsimpleMod.png';
import InstaMod from 'assets/Icons/footerIcons/instaMod.png';
import LinkedinMod from 'assets/Icons/footerIcons/linedinMod.png';
import TwitterMod from 'assets/Icons/footerIcons/TwitterMod.png';
export default function Footer() {

  const currentYear = new Date().getFullYear();

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
              <span style={{ color: '#fff', fontFamily: 'Sofia-Pro-Bold', fontSize: 26, fontWeight: '700', textAlign: 'left' }}>{data.menuItemHeading[index]}</span>
              <nav className='mobile-footer-nav' style={{ marginTop: 20, textAlign: 'left' }}>

                {item.map(({ path, label, id }) => (
                  <>
                    <Link
                      href={path + (id ? `?section=${id}` : '')}
                      style={styles.footer.link}

                    >
                      <div className="footer-link">

                        {label}
                      </div>
                    </Link>
                  </>
                ))}
              </nav>

            </Box>
          )}
        </Box>
        <div className='footer-copyright-container'>
          <div className='icons-bottom-footer-mobile'>
          <div className='icon-bg'>
            {/* <img src={Insta} /> */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3898_1385)">
                <path d="M10.0084 0.0444996C10.7123 0.0768629 11.1989 0.18031 11.6485 0.354841C12.0748 0.514236 12.4608 0.765619 12.7789 1.09111C13.1044 1.40924 13.3558 1.7952 13.5152 2.22151C13.6897 2.67171 13.7931 3.15774 13.8255 3.86164C13.8654 4.73429 13.87 5.04175 13.87 6.935C13.87 8.82826 13.8654 9.13571 13.8255 10.0084C13.7931 10.7123 13.6897 11.1989 13.5152 11.6491C13.3557 12.0752 13.1043 12.4609 12.7789 12.7789C12.4608 13.1044 12.0748 13.3558 11.6485 13.5152C11.1983 13.6897 10.7123 13.7931 10.0084 13.8255C9.13571 13.8654 8.82883 13.87 6.935 13.87C5.04117 13.87 4.73372 13.8654 3.86164 13.8255C3.15774 13.7931 2.67113 13.6897 2.22093 13.5152C1.79482 13.3557 1.40906 13.1043 1.09111 12.7789C0.765619 12.4608 0.514236 12.0748 0.354841 11.6485C0.18031 11.1983 0.0768629 10.7123 0.0444996 10.0084C0.00462333 9.13686 0 8.82941 0 6.935C0 5.04117 0.00462333 4.73314 0.0444996 3.86164C0.0768629 3.15774 0.18031 2.67113 0.354841 2.22151C0.514236 1.7952 0.765619 1.40924 1.09111 1.09111C1.40908 0.76569 1.79482 0.514312 2.22093 0.354841C2.67171 0.18031 3.15774 0.0768629 3.86164 0.0444996C4.73314 0.00462333 5.04059 0 6.935 0C8.82883 0 9.13686 0.00462333 10.0084 0.0444996ZM6.935 1.5413C5.06255 1.5413 4.7759 1.54535 3.93157 1.58407C3.39584 1.60834 3.07452 1.67654 2.7792 1.79154C2.52781 1.88979 2.36772 1.99381 2.18048 2.18048C1.99323 2.36772 1.88921 2.52781 1.79154 2.7792C1.67711 3.07394 1.60834 3.39584 1.58407 3.93157C1.54535 4.7759 1.5413 5.06255 1.5413 6.935C1.5413 8.80745 1.54535 9.0941 1.58407 9.93843C1.60834 10.4742 1.67654 10.7955 1.79154 11.0902C1.88979 11.3422 1.99381 11.5023 2.18048 11.6895C2.36772 11.8768 2.52781 11.9808 2.7792 12.0785C3.07394 12.1929 3.39584 12.2617 3.93157 12.2859C4.77648 12.3247 5.06313 12.3287 6.935 12.3287C8.80745 12.3287 9.09352 12.3247 9.93843 12.2859C10.4742 12.2617 10.7955 12.1935 11.0908 12.0785C11.3422 11.9802 11.5023 11.8762 11.6895 11.6895C11.8768 11.5023 11.9808 11.3422 12.0785 11.0908C12.1929 10.7961 12.2617 10.4742 12.2859 9.93843C12.3247 9.09352 12.3287 8.80687 12.3287 6.935C12.3287 5.06313 12.3247 4.77648 12.2859 3.93157C12.2617 3.39584 12.1935 3.07452 12.0785 2.77978C11.9967 2.55271 11.8636 2.3476 11.6895 2.18048C11.5224 2.00636 11.3173 1.87325 11.0902 1.79154C10.7955 1.67711 10.4736 1.60834 9.93785 1.58407C9.09352 1.54535 8.80687 1.5413 6.93442 1.5413H6.935ZM6.935 10.5308C5.98134 10.5308 5.06673 10.152 4.39239 9.47761C3.71804 8.80327 3.3392 7.88867 3.3392 6.935C3.3392 5.98134 3.71804 5.06673 4.39239 4.39239C5.06673 3.71804 5.98134 3.3392 6.935 3.3392C7.88867 3.3392 8.80327 3.71804 9.47761 4.39239C10.152 5.06673 10.5308 5.98134 10.5308 6.935C10.5308 7.88867 10.152 8.80327 9.47761 9.47761C8.80327 10.152 7.88867 10.5308 6.935 10.5308ZM6.935 8.99007C7.48004 8.99007 8.00276 8.77356 8.38816 8.38816C8.77356 8.00276 8.99007 7.48004 8.99007 6.935C8.99007 6.38996 8.77356 5.86725 8.38816 5.48184C8.00276 5.09644 7.48004 4.87993 6.935 4.87993C6.38996 4.87993 5.86725 5.09644 5.48184 5.48184C5.09644 5.86725 4.87993 6.38996 4.87993 6.935C4.87993 7.48004 5.09644 8.00276 5.48184 8.38816C5.86725 8.77356 6.38996 8.99007 6.935 8.99007ZM10.5308 4.10957C10.3264 4.10957 10.1304 4.02837 9.98586 3.88385C9.84134 3.73932 9.76015 3.5433 9.76015 3.33891C9.76015 3.13452 9.84134 2.93851 9.98586 2.79398C10.1304 2.64946 10.3264 2.56826 10.5308 2.56826C10.7352 2.56826 10.9312 2.64946 11.0757 2.79398C11.2203 2.93851 11.3014 3.13452 11.3014 3.33891C11.3014 3.5433 11.2203 3.73932 11.0757 3.88385C10.9312 4.02837 10.7352 4.10957 10.5308 4.10957Z" fill="#252F44" />
              </g>
              <defs>
                <clipPath id="clip0_3898_1385">
                  <rect width="13.87" height="13.87" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className='icon-bg' >
            {/* <img src={Linkedin} /> */}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3898_1391)">
                <path d="M12.1685 12.1697V12.1692H12.1715V7.70582C12.1715 5.52233 11.7015 3.84033 9.1488 3.84033C7.92166 3.84033 7.09815 4.51374 6.76196 5.15216H6.72646V4.04418H4.30615V12.1692H6.82636V8.14597C6.82636 7.08668 7.02716 6.06237 8.33899 6.06237C9.63154 6.06237 9.65081 7.27125 9.65081 8.21392V12.1697H12.1685Z" fill="white" />
                <path d="M0.20166 4.04492H2.72491V12.1699H0.20166V4.04492Z" fill="white" />
                <path d="M1.46141 0C0.654645 0 0 0.654645 0 1.46141C0 2.26818 0.654645 2.93652 1.46141 2.93652C2.26818 2.93652 2.92283 2.26818 2.92283 1.46141C2.92232 0.654645 2.26768 0 1.46141 0V0Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_3898_1391">
                  <rect width="12.17" height="12.17" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className='icon-bg'>
            {/* <img src={Twitter} /> */}
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.31808 11.6177C9.4991 11.6177 12.333 7.14754 12.333 3.27144C12.333 3.14419 12.333 3.01766 12.3247 2.89184C12.876 2.47721 13.3517 1.96249 13.73 1.37343C13.2165 1.61077 12.6707 1.76661 12.1126 1.83524C12.7002 1.46851 13.1403 0.892313 13.3511 0.21246C12.7977 0.554174 12.1929 0.795089 11.562 0.924483C10.4952 -0.256503 8.711 -0.313693 7.57621 0.797234C6.84509 1.51355 6.53411 2.58158 6.76134 3.60029C4.49657 3.48162 2.38627 2.36783 0.955608 0.535587C0.20801 1.87599 0.59039 3.59028 1.82815 4.451C1.37986 4.43742 0.941191 4.3116 0.5492 4.08426V4.12144C0.549886 5.5176 1.4952 6.72004 2.80916 6.99669C2.39451 7.11465 1.95927 7.13181 1.53776 7.04674C1.90641 8.24202 2.96431 9.06056 4.16911 9.08415C3.17163 9.90055 1.93936 10.3438 0.67071 10.3423C0.446911 10.3416 0.223112 10.328 0 10.3002C1.28856 11.1609 2.78719 11.6177 4.31808 11.6156" fill="white" />
            </svg>

          </div>
          <div className='icon-bg'>
            {/* <img src={Simple} /> */}
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.91895 0.0414167C2.26931 0.514029 0.429266 2.6994 0.554349 5.22515C0.668757 7.53531 2.36294 9.4325 4.75701 9.93136C5.19646 10.0229 6.3845 10.0229 6.82416 9.93125C8.81459 9.51658 10.3652 8.10445 10.8575 6.25811C11.3259 4.50145 10.79 2.66445 9.44189 1.40512C8.73537 0.745132 7.84487 0.288561 6.8433 0.072772C6.47135 -0.00736224 5.29946 -0.026445 4.91895 0.0414167ZM13.8002 0.319017C13.0925 0.500201 12.4575 1.1894 12.0322 2.23799C11.5349 3.46406 11.4051 5.25553 11.7102 6.68295C11.9413 7.76403 12.3515 8.5977 12.925 9.15162C13.2716 9.48647 13.5514 9.6411 13.9325 9.70862C14.8626 9.87328 15.8416 9.0161 16.3507 7.59139C16.6164 6.84781 16.736 6.16048 16.7625 5.22515C16.8047 3.7344 16.4995 2.42522 15.8769 1.42696C15.6681 1.09212 15.1663 0.59641 14.901 0.462968C14.5257 0.274145 14.1614 0.226507 13.8002 0.319017ZM18.1352 0.780947C17.7949 0.913559 17.5036 1.90725 17.3493 3.46206C17.2917 4.04222 17.2914 5.91967 17.3489 6.52154C17.5032 8.13933 17.8042 9.12521 18.1765 9.23241C18.2748 9.26072 18.4566 9.1212 18.55 8.94575C19.2422 7.64559 19.3358 3.29131 18.711 1.45697C18.5872 1.09353 18.5075 0.949201 18.37 0.83906C18.2469 0.740396 18.2423 0.739255 18.1352 0.780947Z" fill="white" />
            </svg>

          </div>
          <div className='icon-bg'>
            {/* <img src={Tiktok} /> */}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3328 2.31523C9.70607 1.68701 9.37769 0.875211 9.40369 0.0486798L7.06133 0C7.06133 0 7.06133 0.0862144 7.06133 0.202277V8.6427C6.43071 11.0655 2.36351 10.4334 2.77065 7.96823C2.99784 6.84219 4.40098 6.14941 5.64809 6.54102V4.48059C2.93321 4.07309 0.360375 5.93598 0.387418 8.30938C0.624716 13.4565 9.18779 13.4573 9.42539 8.30938C9.36551 8.12516 9.39894 4.69503 9.39047 4.40577C10.4556 4.97712 11.6948 5.26267 12.9498 5.22628V3.09821C11.7896 3.09821 10.9042 2.83226 10.3328 2.31523Z" fill="white" />
            </svg>

          </div>
          </div>
        </div>
        <div className='h-line' />


      </Container>
      <div className='footer-copyright-container'>
        <Text sx={styles.footer.copyright}>
          Copyright© PAAQ {currentYear}. All Rights Reserved.
        </Text>
        <div className='icons-bottom-footer icons-bottom-footer-web'>
          <div className='icon-bg'>
            {/* <img src={Insta} /> */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3898_1385)">
                <path d="M10.0084 0.0444996C10.7123 0.0768629 11.1989 0.18031 11.6485 0.354841C12.0748 0.514236 12.4608 0.765619 12.7789 1.09111C13.1044 1.40924 13.3558 1.7952 13.5152 2.22151C13.6897 2.67171 13.7931 3.15774 13.8255 3.86164C13.8654 4.73429 13.87 5.04175 13.87 6.935C13.87 8.82826 13.8654 9.13571 13.8255 10.0084C13.7931 10.7123 13.6897 11.1989 13.5152 11.6491C13.3557 12.0752 13.1043 12.4609 12.7789 12.7789C12.4608 13.1044 12.0748 13.3558 11.6485 13.5152C11.1983 13.6897 10.7123 13.7931 10.0084 13.8255C9.13571 13.8654 8.82883 13.87 6.935 13.87C5.04117 13.87 4.73372 13.8654 3.86164 13.8255C3.15774 13.7931 2.67113 13.6897 2.22093 13.5152C1.79482 13.3557 1.40906 13.1043 1.09111 12.7789C0.765619 12.4608 0.514236 12.0748 0.354841 11.6485C0.18031 11.1983 0.0768629 10.7123 0.0444996 10.0084C0.00462333 9.13686 0 8.82941 0 6.935C0 5.04117 0.00462333 4.73314 0.0444996 3.86164C0.0768629 3.15774 0.18031 2.67113 0.354841 2.22151C0.514236 1.7952 0.765619 1.40924 1.09111 1.09111C1.40908 0.76569 1.79482 0.514312 2.22093 0.354841C2.67171 0.18031 3.15774 0.0768629 3.86164 0.0444996C4.73314 0.00462333 5.04059 0 6.935 0C8.82883 0 9.13686 0.00462333 10.0084 0.0444996ZM6.935 1.5413C5.06255 1.5413 4.7759 1.54535 3.93157 1.58407C3.39584 1.60834 3.07452 1.67654 2.7792 1.79154C2.52781 1.88979 2.36772 1.99381 2.18048 2.18048C1.99323 2.36772 1.88921 2.52781 1.79154 2.7792C1.67711 3.07394 1.60834 3.39584 1.58407 3.93157C1.54535 4.7759 1.5413 5.06255 1.5413 6.935C1.5413 8.80745 1.54535 9.0941 1.58407 9.93843C1.60834 10.4742 1.67654 10.7955 1.79154 11.0902C1.88979 11.3422 1.99381 11.5023 2.18048 11.6895C2.36772 11.8768 2.52781 11.9808 2.7792 12.0785C3.07394 12.1929 3.39584 12.2617 3.93157 12.2859C4.77648 12.3247 5.06313 12.3287 6.935 12.3287C8.80745 12.3287 9.09352 12.3247 9.93843 12.2859C10.4742 12.2617 10.7955 12.1935 11.0908 12.0785C11.3422 11.9802 11.5023 11.8762 11.6895 11.6895C11.8768 11.5023 11.9808 11.3422 12.0785 11.0908C12.1929 10.7961 12.2617 10.4742 12.2859 9.93843C12.3247 9.09352 12.3287 8.80687 12.3287 6.935C12.3287 5.06313 12.3247 4.77648 12.2859 3.93157C12.2617 3.39584 12.1935 3.07452 12.0785 2.77978C11.9967 2.55271 11.8636 2.3476 11.6895 2.18048C11.5224 2.00636 11.3173 1.87325 11.0902 1.79154C10.7955 1.67711 10.4736 1.60834 9.93785 1.58407C9.09352 1.54535 8.80687 1.5413 6.93442 1.5413H6.935ZM6.935 10.5308C5.98134 10.5308 5.06673 10.152 4.39239 9.47761C3.71804 8.80327 3.3392 7.88867 3.3392 6.935C3.3392 5.98134 3.71804 5.06673 4.39239 4.39239C5.06673 3.71804 5.98134 3.3392 6.935 3.3392C7.88867 3.3392 8.80327 3.71804 9.47761 4.39239C10.152 5.06673 10.5308 5.98134 10.5308 6.935C10.5308 7.88867 10.152 8.80327 9.47761 9.47761C8.80327 10.152 7.88867 10.5308 6.935 10.5308ZM6.935 8.99007C7.48004 8.99007 8.00276 8.77356 8.38816 8.38816C8.77356 8.00276 8.99007 7.48004 8.99007 6.935C8.99007 6.38996 8.77356 5.86725 8.38816 5.48184C8.00276 5.09644 7.48004 4.87993 6.935 4.87993C6.38996 4.87993 5.86725 5.09644 5.48184 5.48184C5.09644 5.86725 4.87993 6.38996 4.87993 6.935C4.87993 7.48004 5.09644 8.00276 5.48184 8.38816C5.86725 8.77356 6.38996 8.99007 6.935 8.99007ZM10.5308 4.10957C10.3264 4.10957 10.1304 4.02837 9.98586 3.88385C9.84134 3.73932 9.76015 3.5433 9.76015 3.33891C9.76015 3.13452 9.84134 2.93851 9.98586 2.79398C10.1304 2.64946 10.3264 2.56826 10.5308 2.56826C10.7352 2.56826 10.9312 2.64946 11.0757 2.79398C11.2203 2.93851 11.3014 3.13452 11.3014 3.33891C11.3014 3.5433 11.2203 3.73932 11.0757 3.88385C10.9312 4.02837 10.7352 4.10957 10.5308 4.10957Z" fill="#252F44" />
              </g>
              <defs>
                <clipPath id="clip0_3898_1385">
                  <rect width="13.87" height="13.87" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className='icon-bg' >
            {/* <img src={Linkedin} /> */}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3898_1391)">
                <path d="M12.1685 12.1697V12.1692H12.1715V7.70582C12.1715 5.52233 11.7015 3.84033 9.1488 3.84033C7.92166 3.84033 7.09815 4.51374 6.76196 5.15216H6.72646V4.04418H4.30615V12.1692H6.82636V8.14597C6.82636 7.08668 7.02716 6.06237 8.33899 6.06237C9.63154 6.06237 9.65081 7.27125 9.65081 8.21392V12.1697H12.1685Z" fill="white" />
                <path d="M0.20166 4.04492H2.72491V12.1699H0.20166V4.04492Z" fill="white" />
                <path d="M1.46141 0C0.654645 0 0 0.654645 0 1.46141C0 2.26818 0.654645 2.93652 1.46141 2.93652C2.26818 2.93652 2.92283 2.26818 2.92283 1.46141C2.92232 0.654645 2.26768 0 1.46141 0V0Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_3898_1391">
                  <rect width="12.17" height="12.17" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className='icon-bg'>
            {/* <img src={Twitter} /> */}
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.31808 11.6177C9.4991 11.6177 12.333 7.14754 12.333 3.27144C12.333 3.14419 12.333 3.01766 12.3247 2.89184C12.876 2.47721 13.3517 1.96249 13.73 1.37343C13.2165 1.61077 12.6707 1.76661 12.1126 1.83524C12.7002 1.46851 13.1403 0.892313 13.3511 0.21246C12.7977 0.554174 12.1929 0.795089 11.562 0.924483C10.4952 -0.256503 8.711 -0.313693 7.57621 0.797234C6.84509 1.51355 6.53411 2.58158 6.76134 3.60029C4.49657 3.48162 2.38627 2.36783 0.955608 0.535587C0.20801 1.87599 0.59039 3.59028 1.82815 4.451C1.37986 4.43742 0.941191 4.3116 0.5492 4.08426V4.12144C0.549886 5.5176 1.4952 6.72004 2.80916 6.99669C2.39451 7.11465 1.95927 7.13181 1.53776 7.04674C1.90641 8.24202 2.96431 9.06056 4.16911 9.08415C3.17163 9.90055 1.93936 10.3438 0.67071 10.3423C0.446911 10.3416 0.223112 10.328 0 10.3002C1.28856 11.1609 2.78719 11.6177 4.31808 11.6156" fill="white" />
            </svg>

          </div>
          <div className='icon-bg'>
            {/* <img src={Simple} /> */}
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.91895 0.0414167C2.26931 0.514029 0.429266 2.6994 0.554349 5.22515C0.668757 7.53531 2.36294 9.4325 4.75701 9.93136C5.19646 10.0229 6.3845 10.0229 6.82416 9.93125C8.81459 9.51658 10.3652 8.10445 10.8575 6.25811C11.3259 4.50145 10.79 2.66445 9.44189 1.40512C8.73537 0.745132 7.84487 0.288561 6.8433 0.072772C6.47135 -0.00736224 5.29946 -0.026445 4.91895 0.0414167ZM13.8002 0.319017C13.0925 0.500201 12.4575 1.1894 12.0322 2.23799C11.5349 3.46406 11.4051 5.25553 11.7102 6.68295C11.9413 7.76403 12.3515 8.5977 12.925 9.15162C13.2716 9.48647 13.5514 9.6411 13.9325 9.70862C14.8626 9.87328 15.8416 9.0161 16.3507 7.59139C16.6164 6.84781 16.736 6.16048 16.7625 5.22515C16.8047 3.7344 16.4995 2.42522 15.8769 1.42696C15.6681 1.09212 15.1663 0.59641 14.901 0.462968C14.5257 0.274145 14.1614 0.226507 13.8002 0.319017ZM18.1352 0.780947C17.7949 0.913559 17.5036 1.90725 17.3493 3.46206C17.2917 4.04222 17.2914 5.91967 17.3489 6.52154C17.5032 8.13933 17.8042 9.12521 18.1765 9.23241C18.2748 9.26072 18.4566 9.1212 18.55 8.94575C19.2422 7.64559 19.3358 3.29131 18.711 1.45697C18.5872 1.09353 18.5075 0.949201 18.37 0.83906C18.2469 0.740396 18.2423 0.739255 18.1352 0.780947Z" fill="white" />
            </svg>

          </div>
          <div className='icon-bg'>
            {/* <img src={Tiktok} /> */}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3328 2.31523C9.70607 1.68701 9.37769 0.875211 9.40369 0.0486798L7.06133 0C7.06133 0 7.06133 0.0862144 7.06133 0.202277V8.6427C6.43071 11.0655 2.36351 10.4334 2.77065 7.96823C2.99784 6.84219 4.40098 6.14941 5.64809 6.54102V4.48059C2.93321 4.07309 0.360375 5.93598 0.387418 8.30938C0.624716 13.4565 9.18779 13.4573 9.42539 8.30938C9.36551 8.12516 9.39894 4.69503 9.39047 4.40577C10.4556 4.97712 11.6948 5.26267 12.9498 5.22628V3.09821C11.7896 3.09821 10.9042 2.83226 10.3328 2.31523Z" fill="white" />
            </svg>

          </div>
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
