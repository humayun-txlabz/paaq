import AboutUsMain from 'components/AboutUs';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';

export default function AboutUs() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="About Us" />
                    <AboutUsMain />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}