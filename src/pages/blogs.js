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
  
  // host: "preview.contentful.com"
});



export async function getStaticProps (){
  const posts = await client.getEntries();

  console.log('this is itttt>>>', posts);

  // client.getEntry('<entry_id>').then(function (entry) {
  //   // logs the entry metadata
  //   console.log(entry.sys);
  
  //   // logs the field with ID title
  //   console.log(entry.fields.productName);
  // });

  // client.getEntries().then(function (entries) {
  //   console.log('im inn get entriesss', entries)
  //   // log the title for all the entries that have it
  //   entries.items.forEach(function (entry) {
  //     console.log( 'this isss ittt', entry);
  //     // if (entry.fields.productName) {
  //     // }
  //   });
  // });

  return {
    props: {
      ...posts
    }
  }
};


export default function BlogsPage(props) {
  console.log("checckkkk newssss", props)
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landinggg 006" />
          <MainBlog posts={props} />
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
