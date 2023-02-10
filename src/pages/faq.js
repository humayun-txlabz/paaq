import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Container, Text, Image } from 'theme-ui';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import FaqAccordion from 'components/faq-accordions';
import BackgroundImage from '../../public/bg-faq.png';

import * as contentful from 'contentful';

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    
});
export async function getStaticProps() {

    const faqs = await client.getEntries({
        content_type: 'faqs',
    })
        .then((response) => {

            return response;
        })
        .catch((err) => {
            console.log("Error", err)
        })



    return {
        props: {
            ...faqs
        }
    }
};

export default function Faq(props) {
    const { items } = props;

    function checkCategory(type) {

        const result = items.filter(function checkMain(data) {
            return data.fields.category === type;
        });
        return result;
    }

    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="FAQ's" />
                    <Image src={BackgroundImage} className="background-image-faq" />                        
                    <Container sx={styles.mainContainer}>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.heading}>Frequently Asked Question</Text>
                        </Container>
                        <Container sx={styles.accordionContainer}>
                            <FaqAccordion list={checkCategory('main')} />
                        </Container>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.headingInner}>Security & Privacy</Text>
                        </Container>
                        <Container sx={styles.accordionContaine2}>
                            <FaqAccordion list={checkCategory('security')} />
                        </Container>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.headingInner}>Profile Settings</Text>
                        </Container>
                        <Container sx={styles.accordionContaine2}>
                            <FaqAccordion list={checkCategory('profile')} />
                        </Container>
                        <Container sx={styles.headingContainer}>
                            <Text sx={styles.headingInner}>Verification Badge</Text>
                        </Container>
                        <Container sx={styles.accordionContaine2}>
                            <FaqAccordion list={checkCategory('verification')} />
                        </Container>
                    </Container>
                    {/* </div> */}
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
        marginTop: "90px"
    },
    accordionContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
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
        width: '65%',
        '@media screen and (max-width: 720px)': {
            width: '86%',
        },
        justifyContent: 'center',
    },

};
