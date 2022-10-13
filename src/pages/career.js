import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Container, Text, Image } from 'theme-ui';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import banner from 'assets/banner-career.png'
import image1 from 'assets/career/1.png'
import image2 from 'assets/career/2.png'
import image3 from 'assets/career/3.png'
import image4 from 'assets/career/4.png'

export default function Career() {

    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 007" />
                    <Container sx={styles.imageContainer}>
                        <Container sx={styles.textBannerContainer}>
                            <Text sx={styles.textBanner}>Join Team PAAQ</Text>
                        </Container>
                        <Image src={banner} sx={styles.bannerStyle} />
                    </Container>
                    <Container sx={styles.section1}>
                        <Text sx={styles.heading}>Who We Are</Text>
                        <Text sx={styles.detail}>At PAAQ, We believe that reinventing the camera represents our greatest opportunity to improve the way people live and communicate. We contribute to human progress by empowering people to express themselves, live in the moment, learn about the world, and have fun together.</Text>
                    </Container>
                    <Container sx={styles.section2}>
                        <Image src={image1} sx={styles.imageSection2Left} />
                        <Container sx={styles.section2TextContainer}>
                            <Text sx={styles.section2Heading}>We Are Kind</Text>
                            <Text sx={styles.section2Detail}>We operate with courage, show empathy, and instill trust through honesty and integrity. We contribute to human progress by empowering people to express themselves, live in the moment, learn about the world, and have fun together.</Text>
                        </Container>
                        <Image src={image2} sx={styles.imageSection2Right} />
                    </Container>
                    <Container sx={styles.section3}>
                        <Text sx={styles.headingSection3}>We Are Smart</Text>
                        <Text sx={styles.detailSection3}>We solve problems through action, make high-quality decisions, and think with a strategic mindset.</Text>
                        <Image src={image3} sx={styles.section3Image} />
                    </Container>
                    <Container sx={styles.section4} >
                        <Container sx={styles.textContainerSection4}>
                            <Text sx={styles.titleSection4}>We Are Creative</Text>
                            <Text sx={styles.detailSection4}>We contribute to human progress by empowering people to express themselves, live in the moment, learn about the world, and have fun together.</Text>
                            <Text sx={styles.detailSection4}>We gracefully manage ambiguity, cultivate innovation, and demonstrate an insatiable desire to learn.</Text>
                        </Container>
                        <Container sx={styles.imageContainerSection4}>
                            <Image sx={styles.imageSection4} src={image4} />
                        </Container>
                    </Container>
                    <AppAndPlayStoreFooter />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    imageContainer: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        width: '100%',
        alignItems: 'center',

    },
    bannerStyle: {
        width: '100%',
        height: '641px',
        objectFit:'cover',
        '@media screen and (max-width: 940px)': {
            height:'363px',
        },

    },
    textBannerContainer: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: "300px",
        '@media screen and (max-width: 940px)': {
            marginBottom: "150px",
        },

    },
    textBanner: {
        fontSize: '84px',
        '@media screen and (max-width: 940px)': {
            fontSize: '40px',
        },
        fontFamily: 'Sofia-Pro',
        display: 'flex',
        fontWeight: '600',
        color: '#0D1015',

    },
    section1: {
        width: '55%',
        '@media screen and (max-width: 940px)': {
            width:'90%',
        },
        marginTop: '80px',
        alignItems: 'center',
        justifyContent: 'center',

    },
    heading: {
        fontSize: '70px',
        '@media screen and (max-width: 940px)': {
            fontSize: '40px'
        },
        fontFamily: 'Sofia-Pro',
        fontWeight: '600',
        color: '#252F44',
        textAlign: 'center'
    },
    detail: {
        fontSize: '18px',
        '@media screen and (max-width: 940px)': {
            fontSize: '14px',
            lineHeight: '24px'
        },
        fontFamily: 'Sofia-Pro',
        fontWeight: '400',
        color: '#4B5157',
        marginTop: '30px',
        textAlign: 'center',
        lineHeight: '30px'
    },
    section2: {
        width: '100%',
        backgroundColor: '#F8F8FF',
        display: 'flex',
        '@media screen and (max-width: 940px)': {
            flexDirection: 'column',
            padding: '30px 15px 30px 15px',
        },
        flexDirection: 'row',
        gap: '20px',
        padding: '80px 160px 80px 160px',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80px'
    },
    imageSection2Right: {
        width: '30%',
        height: '415px',
        objectFit:'cover',
        '@media screen and (max-width: 940px)': {
            height:'331px',
            marginTop:'0px',
            width:'100%',
        },
        borderRadius: '20px',
        marginTop: '70px'
    },
    imageSection2Left: {
        width: '30%',
        height: '415px',
        objectFit:'cover',
        '@media screen and (max-width: 940px)': {
            height:'241px',
            marginBottom:'0px',
            width:'100%'
        },
        borderRadius: '20px',
        marginBottom: '70px'
    },
    section2TextContainer: {
        display: 'flex',
        width: '28%',
        '@media screen and (max-width: 940px)': {
            width: '90%',
        },

        flexDirection: 'column',
        gap: '20px'
    },
    section2Heading: {
        fontFamily: 'Sofia-Pro',
        fontWeight: '700',
        fontSize: '50px',
        '@media screen and (max-width: 940px)': {
            fontSize: '40px'
        },
        color: '#252F44'
    },
    section2Detail: {
        fontWeight: '400',
        fontSize: '18px',
        '@media screen and (max-width: 940px)': {
            fontSize: '14px',
            lineHeight: '24px'
        },
        fontFamily: 'Sofia-Pro',
        color: '#4B5157',
        lineHeight: '30px'
    },
    section3: {
        width: ['90%', '90%', '85%', null, '57%', '60%', '68%', '60%'],
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '90px',
        textAlign: 'center'
    },
    headingSection3: {
        fontWeight: '600',
        fontSize: '70px',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 940px)': {
            fontSize: '40px'
        },
        color: '#252F44'
    },
    detailSection3: {
        fontWeight: '400',
        fontSize: '18px',
        fontFamily: 'Sofia-Pro',
        color: '#4B5157',
        '@media screen and (max-width: 940px)': {
            fontSize: '13px',
            lineHeight: '24px'
        },
        marginTop: '20px',

    },
    section3Image: {
        width: '100%',
        height: '582px',
        objectFit:'cover',
        '@media screen and (max-width: 940px)': {
            height:'221px',
        },
        borderRadius: '20px',
        marginTop: '50px',
    },
    section4: {
        width: ['90%', '90%', '90%', null, '57%', '60%', '68%', '60%'],
        '@media screen and (max-width: 940px)': {
            width: '100%',
            flexDirection: 'column',
        },
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: '40px'
    },
    imageContainerSection4:{
        width:'55%',
        '@media screen and (max-width: 940px)': {
            width:'90%',
            justifyContent:'center'
        },
    },
    imageSection4:{
        height:'413px',
        objectFit:'cover',
        '@media screen and (max-width: 940px)': {
            height:'221px',
        },
        borderRadius: '20px',
        width:'90%'
    },
    textContainerSection4:{
        width:'45%',
        '@media screen and (max-width: 940px)': {
            width:'90%',
        },
        display:'flex',
        gap:'20px',
        flexDirection:'column'
    },
    titleSection4:{
        fontSize:'50px',
        '@media screen and (max-width: 940px)': {
            fontSize: '40px'
        },
        fontWeight:'700',
        color:'#252F44',
        textTransform:'capitalize',
     },
     detailSection4:{
        fontSize:'18px',
        '@media screen and (max-width: 940px)': {
            fontSize: '14px',
            lineHeight:'24px'
        },
        fontFamily: 'Sofia-Pro',
        fontWeight:'400',
        color:'#4B5157',
        lineHeight:'30px'
     },

};
