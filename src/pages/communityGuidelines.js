import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Container, Text, Image } from 'theme-ui';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import { communityGuidelines } from 'constants/communityGuidelines';

export default function CommunityGuidelines() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 007" />
                    <Container sx={styles.mainContainer}>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.mainHeading}>Community Guidelines</Text>
                        </Container>
                        <Container sx={styles.textContainer}>
                            <Text sx={styles.mainText}>
                                {`PAAQ is a knowledge based platform dedicated to helping people find answers to their questions from experts. To prevent misuse of our platform, it is imperative that all users adhere to our community guidelines.
                        
We apply these Guidelines to all content (this includes text, images, links, attachments, emojis and creative tools) on PAAQ - as well as to our users, without discrimination. Certain types of content are not subject to action when they are newsworthy, factual, relate to a general concern for our community and are relevant to politics, social issues, or other issues.

We want our users to find PAAQ safe and reliable enough to meet their needs. If content violates that spirit, we reserve the right to remove it from the platform.
                            
                            `}
                            </Text>
                            {
                                communityGuidelines.map((item) => {
                                    return (
                                        <Container sx={styles.listContainer}>
                                            <Text sx={styles.heading}>{item.heading}</Text>
                                            <Text sx={styles.text}>{item.detail}</Text>
                                        </Container>
                                    )
                                })
                            }
                        </Container>
                    </Container>
                    <AppAndPlayStoreFooter />
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
        '@media screen and (max-width: 720px)': {
            paddingTop: '50px',
        },
        justifyContent: 'center',
        flexDirection: 'column'
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
    },
    text: {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '34px',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize: '14px',
            lineHeight: '24px',
            marginTop:'10px'
        },
        color: '#4B5157',
        whiteSpace: 'pre-wrap',
        marginTop:'30px'
    },
    mainText: {
        fontSize: '24px',
        fontWeight: '400',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize: '14px',
            lineHeight: '24px',
            marginTop:'30px'
        },
        lineHeight: '34px',
        color: '#4B5157',
        whiteSpace: 'pre-wrap',
        marginTop:'70px'
    },
    heading: {
        fontSize: '40px',
        fontWeight: '500',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize: '18px',
            lineHeight: '21px',
        },
        lineHeight: '50px',
        color: '#252F44'
    },
    mainHeading: {
        fontSize: '70px',
        fontWeight: '600',
        lineHeight: '66px',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize: '36px',
            lineHeight: '40px',
        },
        color: '#252F44',
        textAlign: 'center'
    },
    textContainer:{
        width:'70%',
        '@media screen and (max-width: 720px)': {
            width: '88%',
        },
    },
    listContainer:{
        marginTop:'50px',
        '@media screen and (max-width: 720px)': {
            marginTop:'30px',
        },
    }
};
