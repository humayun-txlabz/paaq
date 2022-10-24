import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainBlog from 'components/AllBlogs/MainBlog';
import { useRouter } from "next/router";
import SingleBlogItem from 'components/AllBlogs/SingleBlogItem';


export default function BlogDetails() {


    const router = useRouter();
    const query = router.query;
    let blog= null;
    if(query?.data){
      blog = JSON?.parse(query?.data);
    }



    return (
        <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          {blog ? <SingleBlogItem blogItem={blog} /> : null}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
    )
}
