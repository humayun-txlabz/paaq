import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainBlog from 'components/AllBlogs/MainBlog';



import * as contentful from 'contentful';
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

export async function getStaticProps (){
  const posts = await client.getEntries({
    content_type: 'mainBlogs'
  })
  .then((response) => {
    return response;
  })
  .catch(console.error)


  return {
    props: {
      ...posts
    }
  }
};

export default function BlogsPage(props) {

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Blog - Paaq" />
          <MainBlog posts={props} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
 }
