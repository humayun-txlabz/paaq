import ContactUsMain from 'components/ContactUs';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';

export default function ContactUs() {
    return (
         <ThemeProvider theme={theme}>
              <StickyProvider>
                   <Layout>
                        <SEO title="Contact Us" />
                        <ContactUsMain />
                   </Layout>
              </StickyProvider>
         </ThemeProvider>
    );
}