import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Container, Text, Button } from 'theme-ui';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import LogoMain from 'assets/logoMain.svg';
import PressImagesCard from 'components/press-images-cards';
import banner from 'assets/banner-phone.png'
import creditCard from 'assets/credit-card.png'
import banner2 from 'assets/banner-card-payment.png'
import whiteArrow from 'assets/download-arrow-white.png'
import greenArrow from 'assets/download-arrow-green.png'

export default function ImagesContacts() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 007" />
                    <Container sx={styles.mainContainer}>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.heading}>Press Images & Contact</Text>
                            <Text sx={styles.detail}>PAAQ App is the easiest way to send money, spend money, save money, and buy cryptocurrency. We believe in providing everyone with access to important financial services so they can fully participate in the economy.</Text>
                            <Button className="contact_button"
                                aria-label="Contact"
                            >
                                Download
                            </Button>
                        </Container>
                        <Container sx={styles.mainCardsContainer}>
                            <Container sx={styles.row1} >
                                <PressImagesCard
                                    arrow={whiteArrow}
                                    image={LogoMain}
                                    downloadContainer={styles.downloadContainer}
                                    imageStyle={styles.imageLogo}
                                    imageCardStyle={styles.imageCard}
                                    arrowStyle={styles.imageArrow}
                                    text='Logo Marks'
                                />
                                <PressImagesCard
                                    arrow={greenArrow}
                                    image={banner}
                                    downloadContainer={styles.downloadContainer2}
                                    imageStyle={styles.bannerImage}
                                    imageCardStyle={styles.imageCardChange}
                                    arrowStyle={styles.imageArrow2}
                                    text='Product Screens'
                                />
                            </Container>
                            <Container sx={styles.row2} >
                                <PressImagesCard
                                    arrow={greenArrow}
                                    image={creditCard}
                                    downloadContainer={styles.downloadContainer2}
                                    imageStyle={styles.cardImage}
                                    imageCardStyle={styles.imageCard}
                                    arrowStyle={styles.imageArrow2}
                                    text='Cash Cards'
                                />
                                <PressImagesCard
                                    arrow={greenArrow}
                                    image={banner2}
                                    downloadContainer={styles.downloadContainer2}
                                    imageStyle={styles.paymentImage}
                                    imageCardStyle={styles.imageCard}
                                    arrowStyle={styles.imageArrow2}
                                    text='Lifestyle Shots'
                                />
                            </Container>
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
    mainCardsContainer: {
        display: 'flex',
        marginTop: '100px',
        flexDirection: 'column',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column',
            width: '95%',
            gap: '0px',
            marginTop: '30px'
        },
        width: '90%',
        paddingLeft: '20px',
        paddingRight: '20px',
        gap: '40px'
    },
    headingContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        '@media screen and (max-width: 720px)': {
            width: '90%',
        },
        alignItems: 'center',
        justifyContent: 'center',
        '.contact_button': {
            borderRadius: 40,
            width: 136,
            height: 47,
            fontSize: "16px",
            fontFamily: 'Sofia-Pro',
            flexShrink: 0,
            backgroundColor: '#00B5B4',
            boxShadow: '4px 7px 24px rgba(0, 181, 180, 0.28)',
            borderColor: null,
            color: null,
            marginTop: '40px',
            ':hover': {
                opacity: 0.8,
                boxShadow: '4px 7px 24px 0px rgb(0 0 0 / 28%)',
            }
        },
    },
    heading: {
        display: 'flex',
        fontSize: '70px',
        '@media screen and (max-width: 720px)': {
            fontSize: '40px',
            lineHeight: '42px'
        },
        fontWeight: '600',
        color: ' #252F44'
    },

    detail: {
        display: 'flex',
        fontSize: '18px',
        '@media screen and (max-width: 720px)': {
            fontSize: '14px',
            lineHeight: '24px',
            width: '100%',
        },
        lineHeight: '30px',
        fontWeight: '400',
        width: '90%',
        marginTop: '40px',
        color: '#4B5157'
    },
    row1: {
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column',
            width: '100%',
            gap: '0px',
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        width: '95%',
        paddingLeft: '20px',
        paddingRight: '20px',
        gap: '50px'
    },
    row2: {
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column',
            width: '100%',
            gap: 0,
            marginTop: '0px',
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        width: '95%',
        paddingLeft: '20px',
        paddingRight: '20px',
        gap: '50px',
        marginTop: '50px'
    },
    imageLogo: {
        // height: '55%',
        height: 207,
        '@media screen and (max-width: 720px)': {
            width: 131,
            height: 149,
            // width: '65%',
        },
        // width: '35%',
        width: 181,
        objectFit: 'cover'

    },
    bannerImage: {
        width: '265px',
        height: '400px',
        '@media screen and (max-width: 720px)': {
            height: '285px',
            width: '224px',
        },
        objectFit: 'cover',
        border: 'solid',
        borderLeftWidth: '4px',
        borderRightWidth: '4px',
        borderTopWidth: '4px',
        borderBottomWidth: '0px',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
    },
    cardImage: {
        width: '346px',
        height: '346px',
        '@media screen and (max-width: 720px)': {
            height: '260px',
            width: '260px',
        },
        objectFit: 'cover'
    },
    paymentImage: {
        height: '433px',
        '@media screen and (max-width: 720px)': {
            height:'327px',
            width:'327px'
        },
        width: '540px',
        objectFit: 'cover',
        borderRadius:'15px'
    },
    imageCard: {
        width: '100%',
        height: '433px',
        '@media screen and (max-width: 720px)': {
            height: '327px',
        },
        borderRadius: '30px',
        backgroundColor: '#F9F9F9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCardChange: {
        width: '100%',
        height: '433px',
        '@media screen and (max-width: 720px)': {
            height: '327px',
        },
        borderRadius: '30px',
        backgroundColor: '#F9F9F9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    downloadContainer: {
        height: '63px',
        '@media screen and (max-width: 720px)': {
            height: '36px',

        },
        width: '15%',
        backgroundColor: '#00B5B4',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    downloadContainer2: {
        height: '63px',
        width: '15%',
        '@media screen and (max-width: 720px)': {
            height: '36px',
        },
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#00B5B4',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageArrow: {
        width: '16px',
        '@media screen and (max-width: 720px)': {
            height: '14px',
            width: '12px',
        },
        height: '19px'
    },
    imageArrow2: {
        width: '26px',
        height: '29px',
        '@media screen and (max-width: 720px)': {
            height: '14px',
            width: '12px',
        },
    }

};
