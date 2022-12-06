import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

import SEO from 'components/seo';
import Layout from 'components/layout';
import MainFeatures from 'components/Featues';
import { StickyProvider } from '../contexts/app/app.provider';
 

export const getServerSideProps = async (context) =>{

             return{
                props:{ section: context.query?.section || null
                }
             }
       }

       
export default function AboutUs(props) {

    return (
         <ThemeProvider theme={theme}>
              <StickyProvider>
                   <Layout>
                        <SEO title="Features" />
                         <MainFeatures section={props?.section} />
                   </Layout>
              </StickyProvider>
         </ThemeProvider>
    );
}