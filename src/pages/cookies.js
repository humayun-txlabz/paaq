import React from 'react'
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { StickyProvider } from 'contexts/app/app.provider'
import Layout from 'components/layout'
import CookiesPolicy from 'components/cookies-policy';

const Cookies = () => {
    return (
        <div className='external-pages'>
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <CookiesPolicy />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    </div>
    )
}

export default Cookies