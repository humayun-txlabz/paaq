import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Container, Text } from 'theme-ui';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import HelpBanner from 'components/helpBanner';
import { accountSettingOptions } from 'constants/accountSettingOptions';
import { usingPaaqOptions } from 'constants/usingPaaqOptions';
import { safetyOptions } from 'constants/safetyOptions';
import { messsagesOptions } from 'constants/messagesOptions';
import { notificationsOptions } from 'constants/notificationsOptions';
import { paaqWalletOptions } from 'constants/paaqWalletOptions';
import CardOptions from 'components/cardOptions';

export default function Settings() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Settings" />
                    <HelpBanner />
                    <Container sx={styles.mainContainer}>
                        <Container sx={styles.mainCardsContainer}>
                            <Container >
                                <CardOptions options={accountSettingOptions} title='Account Settings' />
                                <CardOptions options={usingPaaqOptions} title='Using PAAQ' />
                            </Container>
                            <Container >
                                <CardOptions options={safetyOptions} title='Safety & Security' />
                                <CardOptions options={messsagesOptions} title='Messages' />
                                <CardOptions options={notificationsOptions} title='Notifications' />
                                <CardOptions options={paaqWalletOptions} title='PAAQ Wallet' />
                            </Container>
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
        paddingTop: '100px'
    },
    mainCardsContainer: {
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column',
            width: '100%',
        },
        width: '80%',
        paddingLeft: '20px',
        paddingRight: '20px',
        gap: '50px'
    }
};
