import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainBlog from 'components/AllBlogs/MainBlog';


export default function BlogsPage() {

  
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landinggg 006" />
          <MainBlog />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

const styles = {
  blogItems: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '90px 90px'
  }
}
