import React from "react";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

import SEO from "components/seo";
import Layout from "components/layout";
import MainBlog from "components/AllBlogs/MainBlog";
import { apiClientContentFul } from "services/apiClient";
import { StickyProvider } from "../../contexts/app/app.provider";


export const getServerSideProps = async () => {

  const posts = await apiClientContentFul("mainBlogs", 0, 6)
  .then((res) => {
    return res;
  });

  return {
    props: { fallback: false, ...posts },
  };
};

const BlogsPage = (props) => {
  
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

export default BlogsPage;