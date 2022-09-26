import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Container, Text, Image } from 'theme-ui';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import image1 from 'assets/about/1.png'
import image2 from 'assets/about/2.png'
import image3 from 'assets/about/3.png'
import image4 from 'assets/about/4.png'
import image5 from 'assets/about/5.png'
import AboutSection from 'components/about-section';
import AboutUsMain from 'components/AboutUs';
// import ReactNoSsr from 'react-no-ssr';
// import NoSsr from 'components/AboutUs/NoSsr';

import NoSSR from 'react-no-ssr';

const isServer = () => typeof window === `undefined`;

export default function AboutUs() {
console.log('isServerisServer');
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 007" />
                    {/* <NoSSR> */}
                    {/* { !isServer() && <AboutUsMain /> } */}
                    {/* <AboutUsMain /> */}
                    {/* </NoSSR> */}
                    <AboutUsMain />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}