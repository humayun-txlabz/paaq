import React from 'react'
import SingleCategoryHelpCenter from "components/HelpCenter/singleCategoryhelpCenter";
import Layout from "components/layout";
import SEO from "components/seo";
import { apiClientContentFul, apiClientContentFulCategory, apiClientContentFulSingleEntry } from "services/apiClient";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../../../contexts/app/app.provider";


export const getStaticProps = async (context) => {
    const { category }  = context.params;

    const singlePost = await 
    apiClientContentFulSingleEntry(category)
    .then(function (entry) {
     return entry;
   })
   .catch(console.error);

    const posts = await 
    apiClientContentFulCategory('helpCenter','category', singlePost?.fields?.category).then((res) => {
      return res?.items;
  });

    return {

      props: {
        ...posts, category
      },
    };
  };

export const getStaticPaths = async () =>{

    const posts = await apiClientContentFul("helpCenter", 0, 100).then((res) => {
     return res;
     });
     
     const titles = posts.items.map((obj)=> {
          return obj?.sys?.id
     });

        const paths = titles.map((id)=>({ 
              params: { category: id.toString() }
          }))
  
        return{
           paths, fallback:false
        }
  }

export default function MediaPage(props) {

     const { category } = props;
     return (
          <ThemeProvider theme={theme}>
               <StickyProvider>
                    <Layout>
                         <SEO title="Help Center" />
                         <SingleCategoryHelpCenter fields={props} id={category} />
                    </Layout>
               </StickyProvider>
          </ThemeProvider>
     );
}