import React from 'react'
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { StickyProvider } from 'contexts/app/app.provider'
import Layout from 'components/layout'
import PrivacyPolicy from 'components/privacy-policy'

const Policy = () => {
    return (
        <div className='external-pages'>
            <ThemeProvider theme={theme}>
                <StickyProvider>
                    <Layout>
                        <PrivacyPolicy />
                    </Layout>
                </StickyProvider>
            </ThemeProvider>
        </div>
    )
}

export default Policy