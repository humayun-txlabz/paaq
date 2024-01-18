import AboutUsMain from 'components/AboutUs';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';

export default function AboutUs() {
    return (
            <StickyProvider>
                <Layout>
                    <SEO title="About us" />
                    <AboutUsMain />
                </Layout>
            </StickyProvider>
    );
}