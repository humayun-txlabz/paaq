import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainBlog from 'components/AllBlogs/MainBlog';
import { useRouter } from "next/router";
import SingleBlogItem from 'components/AllBlogs/SingleBlogItem';


// const router = useRouter();
// const query = router.query;
// const blog = JSON.parse(query.data);

// console.log('im outside of component', blog);

export async function getStaticProps (context){
  
  // const posts = await client.getEntries({
  //   content_type: 'mainBlogs'
  // })
  // .then((response) => {
  //   console.log('this is thenn newwww', response.items)
  //   return response;
  // })
  // .catch(console.error)

//   const router = useRouter();
// const query = router.query;
// const blog = JSON.parse(query.data);
const blog = 3

  console.log('GETSTATIC PROPSSS', context);
  return {
    props: {
      ...blog
    }
  }


}

export default function BlogDetails() {
// const  = () => {

    // const { blog } = props;

    // const router = useRouter();
    // const query = router.query;
    // const blog = JSON.parse(query.data);

    console.log('BlogDetails>>>>>', JSON.parse(query.data) );


    return (
        <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <SingleBlogItem blogItem={blog} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
    )
}

// export default BlogDetails;