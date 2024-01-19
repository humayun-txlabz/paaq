import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../../../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import SingleBlogItem from "components/AllBlogs/SingleBlogItem";

import * as contentful from "contentful";
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticProps = async (context) => {
  const posts = await client
    .getEntry(context.params.id)
    .then(function (entry) {
      return entry;
    })
    .catch(console.error);
  return {
    props: {
      ...posts,
    },
  };
};

export const getStaticPaths = async () =>{
  const posts = await client
      .getEntries({
        content_type: "mainBlogs",
      })
      .then((response) => {
        return response;
      })
      .catch(console.error);

      const ids = posts.items.map((obj)=> obj?.sys?.id);

      const paths = ids.map((id)=>({ params: { id: id.toString() }}))

      return{
         paths, fallback:false
      }
    
  
}

export default function BlogDetails2(props) {
  const { fields } = props;

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="blogs details" />
          <SingleBlogItem blogItem={fields?.details} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
