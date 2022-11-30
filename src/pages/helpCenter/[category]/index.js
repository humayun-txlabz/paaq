import HelpCenterMain from "components/HelpCenter";
import SingleCategoryHelpCenter from "components/HelpCenter/singleCategoryhelpCenter";
import Layout from "components/layout";
import SEO from "components/seo";
import { apiClientContentFul, apiClientContentFulCategory } from "services/apiClient";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../../../contexts/app/app.provider";


export const getStaticProps = async (context) => {
    const { category} = context.params;
    const posts = await 
    apiClientContentFulCategory('helpCenter','category', category).then((res) => {
      console.log("apiClientContentFulCategory useeffecttt", res);
      return res?.items;
  });

    return {

      props: {
        ...posts,
      },
    };
  };

export const getStaticPaths = async () =>{

    const posts = await apiClientContentFul("helpCenter").then((res) => {
     return res;
     });
     
     const titles = posts.items.map((obj)=> {
          return obj?.fields?.category
     });
  
        const paths = titles.map((item)=>({ 
              params: { category: item }
          }))
  
        return{
           paths, fallback:false
        }
  }

export default function MediaPage(props) {

     return (
          <ThemeProvider theme={theme}>
               <StickyProvider>
                    <Layout>
                         <SEO title="Help Center" />
                         <SingleCategoryHelpCenter fields={props} />
                    </Layout>
               </StickyProvider>
          </ThemeProvider>
     );
}