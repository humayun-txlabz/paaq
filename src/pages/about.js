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


export default function ImagesContacts() {

    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="About us" />
                    <Container sx={styles.mainContainer}>
                        <Container >
                            <Text sx={styles.heading}>About us</Text>
                        </Container>
                        <Container sx={styles.innerContainer}>
                            <Container sx={styles.mainSection}>
                                <Container sx={styles.mainSectionText1}>
                                    <Text sx={styles.textMainSection}>With the widespread use of social media and professional platforms, people are now more willing to accept intentionally structured knowledge from those they deem to be experts in their fields. Thus, the information sought can be either social, professional or any other specialized information valued by the person seeking it. Millions of direct messages are sent daily to people on social media asking for information about various topics. </Text>
                                </Container>
                                <Container sx={styles.mainSectionLeftImage}>
                                    <Image sx={styles.imageMain} src={image1} />
                                </Container>
                                <Container sx={styles.text2MainSection}>
                                     <Text sx={styles.textMainSection}>However, it has become increasingly challenging to respond to every one of these messages, especially if the question is technical.</Text>
                                </Container>
                                <Container sx={styles.sectionRightImage}>
                                   <Image src={image2} sx={styles.rightImage} />
                                </Container>
                            </Container>
                            <AboutSection sectionStyle={styles.section} image={image3} title="Human interaction is at the core of PAAQ - the more people connect" detail="The more vast knowledge is accessed through the app & community, with users getting information directly from the relevant source or individuals they deem credible - Bridging the knowledge market." />
                            <AboutSection sectionStyle={styles.sectionReverse} image={image4} title="PAAQ allows users to engage directly with individuals" detail="Who can help them make better life choices & advance their skills within their designated professions - enabling them to make money for collaborating and contributing positively to global economic development." />
                            <AboutSection sectionStyle={styles.section} image={image5} title="Our ultimate goal is to create a diverse community" detail="Where everyone can gain knowledge and build relationships without feeling isolated or ignored." />
                        </Container>
                    </Container>
                    {/* <AppAndPlayStoreFooter /> */}
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    mainContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        paddingTop: '100px',
        flexDirection: 'column'
    },
    heading: {
        fontSize: '84px',
        fontWeight: '600',
        fontFamily: 'Sofia-Pro',
        color: '#1e1e1e',
        textAlign: 'center'
    },

    innerContainer: {
        width: '80%',
        marginTop: '30px',
    },
    

    sectionReverse: {
        width: '100%',
        borderRadius: '20px',
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'row-reverse',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column',
        },
        alignItems: 'center',
        gap: '80px'
    },
    section: {
        width: '100%',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column',
        },
        marginTop: '80px',
        alignItems: 'center',
        gap: '80px'
    },
    mainSection: {
        width: '100%',
        height: '475px',
        position: 'relative',
        '@media screen and (max-width: 720px)': {
            position: 'static',
            flexDirection:'column',
            height:'auto',
            gap:'20px'
        },
        display: 'flex',
        justifyContent:'space-between',
        marginTop:"40px"
    },
    mainSectionText1: {
        width: '42%',
        alignSelf: 'flex- start',
        display: 'flex',
        margin: '0 auto',
        position: 'absolute',
        '@media screen and (max-width: 720px)': {
            position: 'static',
            width:'100%'
        },
        left: 6,
        right:0,
        top: 0,
        marginTop:'40px',
        '@media screen and (max-width: 1040px)': {
            marginTop:'22px'
        },
    },
    textMainSection: {
        fontSize: '18px',
        fontWeight: '400',
        fontFamily: 'Sofia-Pro',
        lineHeight:'29px',
        // lineHeight: ['30px','30px','30px','29px','19px','22px','22px','22px','19px' ],
        '@media screen and (max-width: 1220px)': {
            lineHeight:'26px'
        },
        '@media screen and (max-width: 1150px)': {
            lineHeight:'25px'
        },
        '@media screen and (max-width: 1040px)': {
            lineHeight:'25px'
        },
        '@media screen and (max-width: 980px)': {
            lineHeight:'23px'
        },
        '@media screen and (max-width: 880px)': {
            lineHeight:'20px'
        },
        '@media screen and (max-width: 780px)': {
            lineHeight:'18px'
        },
        '@media screen and (max-width: 720px)': {
            lineHeight:'26px'
        },
        color:'#4B5157'
    },
    mainSectionLeftImage: {
        width: '30%',
        position: 'absolute',
        '@media screen and (max-width: 720px)': {
            position: 'static',
            width:'100%'
        },
        left: 0
    },
    imageMain: {
        height: '475px',
        width: '100%',
        borderRadius: '10px',
        objectFit:'cover',
        '@media screen and (max-width: 720px)': {
            height:'380px', 
        },
    },
    text2MainSection: {
        width: '42%',
        left:6,
        right:0 ,
        position: 'absolute',
        '@media screen and (max-width: 720px)': {
            position: 'static',
            width:'100%',
            marginBottom:'30px',
        },
        margin: '0 auto',
        bottom: 0,
        marginBottom:'40px',
        '@media screen and (max-width: 1040px)': {
            marginBottom:'22px'
        },
       
    },
    sectionRightImage:{
        width: "20%",
        position: 'absolute',
        '@media screen and (max-width: 720px)': {
            position: 'static',
            width:'100%'
        },
        right: 0,
        top:3
        
    },
    rightImage:{
        height:'286px',
        marginLeft:'20px',
        objectFit:'cover',
        '@media screen and (max-width: 880px)': {
            height:'280px',
            width:'100%',
            marginLeft:'0px'
        },
        '@media screen and (max-width: 1120px)': {
            height:'280px',
            width:'100%',
            marginLeft:'20px'
        },
        '@media screen and (max-width: 520px)': {
            height:'280px',
            width:'100%',
            marginLeft:'0px'
        },
       
        width:'100%',
        borderRadius:'10px'
    }

};
