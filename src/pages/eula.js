import React from 'react'
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { StickyProvider } from 'contexts/app/app.provider'
import Layout from 'components/layout'
import EulaDetail from 'components/eula-detail';

const Eula = () => {
    return (
        <div className='external-pages'>
            <ThemeProvider theme={theme}>
                <StickyProvider>
                    <Layout>
                        <EulaDetail />
                    </Layout>
                </StickyProvider>
            </ThemeProvider>
        </div>
    )
}

export default Eula