import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

import SEO from 'components/seo';
import Layout from 'components/layout';
import { StickyProvider } from '../contexts/app/app.provider';
import MainFeatures from 'components/Featues';

export default function AboutUs(props) {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Investers" />
          <div>
            Investors page
          </div>
          <MainFeatures section={''} />
    
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}