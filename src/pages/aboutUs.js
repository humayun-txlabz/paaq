import AboutUsMain from 'components/AboutUs';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
// import ReactNoSsr from 'react-no-ssr';

const isServer = () => typeof window === `undefined`;

export default function AboutUs() {
console.log('isServerisServer');
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 007" />
                    {/* <NoSSR> */}
                    {/* { !isServer() && <AboutUsMain /> } */}
                    {/* <AboutUsMain /> */}
                    {/* </NoSSR> */}
                    <AboutUsMain />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}