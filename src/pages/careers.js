import CareersMain from 'components/Careers';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';

const Careers = () => {

    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 007" />
                    <CareersMain />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

export default Careers;