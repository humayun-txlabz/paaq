import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import BrandGuidelinesMain from 'components/BrandGuidelines';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';

const BrandGuidelines = () => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="About Us" />
                    <BrandGuidelinesMain />
                    <AppAndPlayStoreFooter />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

export default BrandGuidelines;