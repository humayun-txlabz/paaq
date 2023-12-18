import React from 'react'
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { StickyProvider } from 'contexts/app/app.provider'
import Layout from 'components/layout'
import TermsConditions from 'components/terms-conditions';

const Terms = () => {
    return (
        <div className='external-pages'>
            <ThemeProvider theme={theme}>
                <StickyProvider>
                    <Layout>
                        <TermsConditions />
                    </Layout>
                </StickyProvider>
            </ThemeProvider>
        </div>
    )
}

export default Terms