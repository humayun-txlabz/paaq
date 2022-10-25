
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import JobInsightsMain from '../components/JobInsights/index';

export default function AboutUs() {
    return (
         <ThemeProvider theme={theme}>
              <StickyProvider>
                   <Layout>
                        <SEO title="Startup Landing 007" />
                        <JobInsightsMain />
                   </Layout>
              </StickyProvider>
         </ThemeProvider>
    );
}