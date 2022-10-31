import AboutUsMain from 'components/AboutUs';
import MainFeatures from 'components/Featues';
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
                        <SEO title="Startup Landing 007" />
                         <MainFeatures />
                   </Layout>
              </StickyProvider>
         </ThemeProvider>
    );
}