import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainFeatures from 'components/Featues';
import { StickyProvider } from '../contexts/app/app.provider';

export default function AboutUs() {
  const router = useRouter();
  const [section, setSection] = useState(null);

  useEffect(() => {
    // Access the section value from the URL query parameters
    const sectionFromQuery = router.query.section || null;
    setSection(sectionFromQuery);
    // Now 'section' contains the value from the URL, or null if it's not present

    // Perform actions with 'section' if needed
  }, [router.query.section]); // Run the effect whenever the section changes

  return (
    <StickyProvider>
      <Layout>
        <SEO title="Features" />
        <MainFeatures section={section} />
      </Layout>
    </StickyProvider>
  );
}
