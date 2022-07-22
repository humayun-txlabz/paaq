import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Container, Text, Image } from 'theme-ui';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import FaqAccordion from 'components/faq-accordions';
import { faqList } from 'constants/faqList1';
import { faqSecurityList } from 'constants/faqSecurityList';
import { faqProfile } from 'constants/faqProfile';
import { faqVerification } from 'constants/faqVerification';

export default function Faq() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 007" />
                    <Container sx={styles.mainContainer}>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.heading}>Frequently Asked Question</Text>
                        </Container>
                        <Container sx={styles.accordionContainer}>
                             <FaqAccordion list={faqList} />
                        </Container>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.headingInner}>Security & Privacy</Text>
                        </Container>
                        <Container sx={styles.accordionContaine2}>
                             <FaqAccordion list={faqSecurityList} />
                        </Container>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.headingInner}>Profile Settings</Text>
                        </Container>
                        <Container sx={styles.accordionContaine2}>
                             <FaqAccordion list={faqProfile} />
                        </Container>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.headingInner}>Verification Badge</Text>
                        </Container>
                        <Container sx={styles.accordionContaine2}>
                             <FaqAccordion list={faqVerification} />
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
    heading: {
        display: 'flex',
        fontSize: '70px',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize: '35px',
            lineHeight: '46px',
        },
        fontWeight: '600',
        lineHeight: '66px',
        color: ' #252F44'
    },
    headingInner: {
        display: 'flex',
        fontSize: '60px',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize: '35px',
            lineHeight: '46px',
        },
        fontWeight: '600',
        lineHeight: '66px',
        color: ' #252F44',
        marginTop:"90px"
    },
    accordionContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        '@media screen and (max-width: 720px)': {
            width: '86%',
            marginTop: '0px'
        },
        justifyContent: 'center',
        marginTop: '60px'
    },
    accordionContaine2: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        '@media screen and (max-width: 720px)': {
            width: '86%',
        },
        justifyContent: 'center',
    },

};
