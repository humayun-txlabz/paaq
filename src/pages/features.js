import { useEffect } from 'react';
import { useRouter } from 'next/router';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainFeatures from 'components/Featues';
import { StickyProvider } from '../contexts/app/app.provider';

export default function AboutUs(props) {
  const router = useRouter();

  useEffect(() => {
    const section = router.query.section || null;
   
  }, [router.query.section]); 

  return (
    <StickyProvider>
      <Layout>
        <SEO title="Features" />
        <MainFeatures section={router.query.section} />
      </Layout>
    </StickyProvider>
  );
}
