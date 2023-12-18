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
    // Access the section value from the URL query parameters
    const section = router.query.section || null;
    // Now 'section' contains the value from the URL, or null if it's not present

    // Perform actions with 'section' if needed

    // Note: If you need to fetch data asynchronously, you can use
    // the fetch function or any other asynchronous method here

    // Example:
    // const fetchData = async () => {
    //   const response = await fetch(`your API endpoint?section=${section}`);
    //   const data = await response.json();
    //   // Perform actions with data
    // };
    // fetchData();
  }, [router.query.section]); // Run the effect whenever the section changes

  return (
    <StickyProvider>
      <Layout>
        <SEO title="Features" />
        <MainFeatures section={router.query.section} />
      </Layout>
    </StickyProvider>
  );
}
