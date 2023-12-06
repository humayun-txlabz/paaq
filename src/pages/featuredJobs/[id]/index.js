
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../../../contexts/app/app.provider';
import JobInsightsMain from '../../../components/JobInsights/index';
import { apiClientContentFul, apiClientContentFulSingleEntry } from 'services/apiClient';

export const getStaticProps = async (context) => {
    const posts = await apiClientContentFulSingleEntry(context.params.id)
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
    const posts = await apiClientContentFul("featuredJobs", 0, 100).then((res) => {
        return res;
    });
  
        const ids = posts.items.map((obj)=> obj?.sys?.id);
  
        const paths = ids.map((id)=>({ params: { id: id.toString() }}))
  
        return{
           paths, fallback:false
        }
      
    
  }

export default function FeaturedJobDetails(props) {
    const { fields } = props;
    return (
              <StickyProvider>
                   <Layout>
                        <SEO title="Job Insights" />
                        <JobInsightsMain jobItem={fields} />
                   </Layout>
              </StickyProvider>
    );
}