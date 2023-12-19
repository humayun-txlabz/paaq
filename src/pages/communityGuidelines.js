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
        <StickyProvider>
            <Layout>
                <SEO title="Community" />
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
                                        <Text sx={styles.text}>
                                            <div style={{ marginTop: '5px', marginRight: '32px' }}>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M29.727 24.8785C27.7295 20.781 24.382 14.971 21.427 9.84475C19.882 7.16101 18.422 4.62851 17.367 2.70226C16.8695 1.79351 15.9845 1.24976 15.0007 1.24976C14.017 1.24976 13.1307 1.79351 12.6332 2.70226C11.5757 4.62976 10.117 7.16475 8.56945 9.84975C5.61695 14.9748 2.2707 20.7835 0.274452 24.8785C0.0747474 25.2878 -0.0178028 25.7412 0.00546888 26.196C0.0287405 26.6509 0.167073 27.0924 0.407511 27.4792C0.647949 27.8661 0.982627 28.1855 1.3802 28.4078C1.77778 28.63 2.22525 28.7476 2.6807 28.7498L15.0007 28.7485L27.3207 28.7498C27.7762 28.7476 28.2236 28.63 28.6212 28.4078C29.0188 28.1855 29.3535 27.8661 29.5939 27.4792C29.8343 27.0924 29.9727 26.6509 29.9959 26.196C30.0192 25.7412 29.9267 25.2878 29.727 24.8785Z" fill="#D9DEDE" />
                                                    <path d="M27.3194 27.4999H2.68068C2.43722 27.4977 2.19825 27.434 1.98609 27.3145C1.77393 27.1951 1.59549 27.0238 1.46743 26.8167C1.33936 26.6097 1.26585 26.3735 1.25374 26.1303C1.24163 25.8872 1.29132 25.6449 1.39818 25.4261C3.37443 21.3699 6.71068 15.5811 9.65193 10.4749C11.2019 7.78361 12.6669 5.24111 13.7282 3.30361C13.8526 3.07508 14.0364 2.88431 14.2601 2.7514C14.4838 2.61849 14.7392 2.54834 14.9994 2.54834C15.2597 2.54834 15.5151 2.61849 15.7388 2.7514C15.9625 2.88431 16.1462 3.07508 16.2707 3.30361C17.3319 5.24111 18.7957 7.77986 20.3432 10.4686C23.2869 15.5774 26.6232 21.3686 28.6019 25.4261C28.7088 25.6448 28.7585 25.887 28.7464 26.13C28.7344 26.3731 28.6609 26.6092 28.533 26.8162C28.4051 27.0233 28.2268 27.1945 28.0148 27.3141C27.8029 27.4336 27.564 27.4975 27.3207 27.4999H27.3194Z" fill="#D9DEDE" />
                                                    <path d="M15 7.25C14.7679 7.25 14.5454 7.34219 14.3813 7.50628C14.2172 7.67038 14.125 7.89294 14.125 8.125V20.625C14.125 20.8571 14.2172 21.0796 14.3813 21.2437C14.5454 21.4078 14.7679 21.5 15 21.5C15.2321 21.5 15.4546 21.4078 15.6187 21.2437C15.7828 21.0796 15.875 20.8571 15.875 20.625V8.125C15.875 7.89294 15.7828 7.67038 15.6187 7.50628C15.4546 7.34219 15.2321 7.25 15 7.25Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.5" />
                                                    <path d="M15.125 25.4998C15.6773 25.4998 16.125 25.052 16.125 24.4998C16.125 23.9475 15.6773 23.4998 15.125 23.4998C14.5727 23.4998 14.125 23.9475 14.125 24.4998C14.125 25.052 14.5727 25.4998 15.125 25.4998Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.5" />
                                                </svg>
                                            </div>
                                            {item.detail1}</Text>
                                        <Text sx={styles.text}>
                                            <div style={{ marginTop: '5px', marginRight: '32px' }}>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M29.727 24.8785C27.7295 20.781 24.382 14.971 21.427 9.84475C19.882 7.16101 18.422 4.62851 17.367 2.70226C16.8695 1.79351 15.9845 1.24976 15.0007 1.24976C14.017 1.24976 13.1307 1.79351 12.6332 2.70226C11.5757 4.62976 10.117 7.16475 8.56945 9.84975C5.61695 14.9748 2.2707 20.7835 0.274452 24.8785C0.0747474 25.2878 -0.0178028 25.7412 0.00546888 26.196C0.0287405 26.6509 0.167073 27.0924 0.407511 27.4792C0.647949 27.8661 0.982627 28.1855 1.3802 28.4078C1.77778 28.63 2.22525 28.7476 2.6807 28.7498L15.0007 28.7485L27.3207 28.7498C27.7762 28.7476 28.2236 28.63 28.6212 28.4078C29.0188 28.1855 29.3535 27.8661 29.5939 27.4792C29.8343 27.0924 29.9727 26.6509 29.9959 26.196C30.0192 25.7412 29.9267 25.2878 29.727 24.8785Z" fill="#D9DEDE" />
                                                    <path d="M27.3194 27.4999H2.68068C2.43722 27.4977 2.19825 27.434 1.98609 27.3145C1.77393 27.1951 1.59549 27.0238 1.46743 26.8167C1.33936 26.6097 1.26585 26.3735 1.25374 26.1303C1.24163 25.8872 1.29132 25.6449 1.39818 25.4261C3.37443 21.3699 6.71068 15.5811 9.65193 10.4749C11.2019 7.78361 12.6669 5.24111 13.7282 3.30361C13.8526 3.07508 14.0364 2.88431 14.2601 2.7514C14.4838 2.61849 14.7392 2.54834 14.9994 2.54834C15.2597 2.54834 15.5151 2.61849 15.7388 2.7514C15.9625 2.88431 16.1462 3.07508 16.2707 3.30361C17.3319 5.24111 18.7957 7.77986 20.3432 10.4686C23.2869 15.5774 26.6232 21.3686 28.6019 25.4261C28.7088 25.6448 28.7585 25.887 28.7464 26.13C28.7344 26.3731 28.6609 26.6092 28.533 26.8162C28.4051 27.0233 28.2268 27.1945 28.0148 27.3141C27.8029 27.4336 27.564 27.4975 27.3207 27.4999H27.3194Z" fill="#D9DEDE" />
                                                    <path d="M15 7.25C14.7679 7.25 14.5454 7.34219 14.3813 7.50628C14.2172 7.67038 14.125 7.89294 14.125 8.125V20.625C14.125 20.8571 14.2172 21.0796 14.3813 21.2437C14.5454 21.4078 14.7679 21.5 15 21.5C15.2321 21.5 15.4546 21.4078 15.6187 21.2437C15.7828 21.0796 15.875 20.8571 15.875 20.625V8.125C15.875 7.89294 15.7828 7.67038 15.6187 7.50628C15.4546 7.34219 15.2321 7.25 15 7.25Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.5" />
                                                    <path d="M15.125 25.4998C15.6773 25.4998 16.125 25.052 16.125 24.4998C16.125 23.9475 15.6773 23.4998 15.125 23.4998C14.5727 23.4998 14.125 23.9475 14.125 24.4998C14.125 25.052 14.5727 25.4998 15.125 25.4998Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.5" />
                                                </svg>
                                            </div>
                                            {item.detail2}</Text>
                                        {item.detail3 ? <Text sx={styles.text}>
                                            <div style={{ marginTop: '5px', marginRight: '32px' }}>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M29.727 24.8785C27.7295 20.781 24.382 14.971 21.427 9.84475C19.882 7.16101 18.422 4.62851 17.367 2.70226C16.8695 1.79351 15.9845 1.24976 15.0007 1.24976C14.017 1.24976 13.1307 1.79351 12.6332 2.70226C11.5757 4.62976 10.117 7.16475 8.56945 9.84975C5.61695 14.9748 2.2707 20.7835 0.274452 24.8785C0.0747474 25.2878 -0.0178028 25.7412 0.00546888 26.196C0.0287405 26.6509 0.167073 27.0924 0.407511 27.4792C0.647949 27.8661 0.982627 28.1855 1.3802 28.4078C1.77778 28.63 2.22525 28.7476 2.6807 28.7498L15.0007 28.7485L27.3207 28.7498C27.7762 28.7476 28.2236 28.63 28.6212 28.4078C29.0188 28.1855 29.3535 27.8661 29.5939 27.4792C29.8343 27.0924 29.9727 26.6509 29.9959 26.196C30.0192 25.7412 29.9267 25.2878 29.727 24.8785Z" fill="#D9DEDE" />
                                                    <path d="M27.3194 27.4999H2.68068C2.43722 27.4977 2.19825 27.434 1.98609 27.3145C1.77393 27.1951 1.59549 27.0238 1.46743 26.8167C1.33936 26.6097 1.26585 26.3735 1.25374 26.1303C1.24163 25.8872 1.29132 25.6449 1.39818 25.4261C3.37443 21.3699 6.71068 15.5811 9.65193 10.4749C11.2019 7.78361 12.6669 5.24111 13.7282 3.30361C13.8526 3.07508 14.0364 2.88431 14.2601 2.7514C14.4838 2.61849 14.7392 2.54834 14.9994 2.54834C15.2597 2.54834 15.5151 2.61849 15.7388 2.7514C15.9625 2.88431 16.1462 3.07508 16.2707 3.30361C17.3319 5.24111 18.7957 7.77986 20.3432 10.4686C23.2869 15.5774 26.6232 21.3686 28.6019 25.4261C28.7088 25.6448 28.7585 25.887 28.7464 26.13C28.7344 26.3731 28.6609 26.6092 28.533 26.8162C28.4051 27.0233 28.2268 27.1945 28.0148 27.3141C27.8029 27.4336 27.564 27.4975 27.3207 27.4999H27.3194Z" fill="#D9DEDE" />
                                                    <path d="M15 7.25C14.7679 7.25 14.5454 7.34219 14.3813 7.50628C14.2172 7.67038 14.125 7.89294 14.125 8.125V20.625C14.125 20.8571 14.2172 21.0796 14.3813 21.2437C14.5454 21.4078 14.7679 21.5 15 21.5C15.2321 21.5 15.4546 21.4078 15.6187 21.2437C15.7828 21.0796 15.875 20.8571 15.875 20.625V8.125C15.875 7.89294 15.7828 7.67038 15.6187 7.50628C15.4546 7.34219 15.2321 7.25 15 7.25Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.5" />
                                                    <path d="M15.125 25.4998C15.6773 25.4998 16.125 25.052 16.125 24.4998C16.125 23.9475 15.6773 23.4998 15.125 23.4998C14.5727 23.4998 14.125 23.9475 14.125 24.4998C14.125 25.052 14.5727 25.4998 15.125 25.4998Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.5" />
                                                </svg>
                                            </div>
                                            {item.detail3}</Text> : null}
                                    </Container>
                                )
                            })
                        }
                    </Container>
                </Container>
                <AppAndPlayStoreFooter />
            </Layout>
        </StickyProvider>
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
        display: 'flex',
        alignItems: 'start',
        '@media screen and (max-width: 720px)': {
            fontSize: '14px',
            lineHeight: '24px',
            marginTop: '10px'
        },
        color: '#4B5157',
        whiteSpace: 'pre-wrap',
        marginTop: '30px'
    },
    mainText: {
        fontSize: '24px',
        fontWeight: '400',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize: '14px',
            lineHeight: '24px',
            marginTop: '30px'
        },
        lineHeight: '34px',
        color: '#4B5157',
        whiteSpace: 'pre-wrap',
        marginTop: '70px'
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
        color: '#1e1e1e'
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
        color: '#1e1e1e',
        textAlign: 'center'
    },
    textContainer: {
        width: '70%',
        '@media screen and (max-width: 720px)': {
            width: '88%',
        },
    },
    listContainer: {
        marginTop: '50px',
        '@media screen and (max-width: 720px)': {
            marginTop: '30px',
        },
    }
};
