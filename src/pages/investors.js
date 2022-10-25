import InvestorsMain from 'components/Investors';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';

export default function InvestorsPage() {
    return (
         <ThemeProvider theme={theme}>
              <StickyProvider>
                   <Layout>
                        <SEO title="Startup Landing 007" />
                         <InvestorsMain />
                   </Layout>
              </StickyProvider>
         </ThemeProvider>
    );
}