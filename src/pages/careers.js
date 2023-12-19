import React, { useEffect, useRef, useState } from 'react';
import CareersMain from 'components/Careers';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
// import { apiClientContentFul } from 'services/apiClient';
import * as contentful from "contentful";

let totalJobs = 0;
let totalFeaturedJobs = 0;

const client = contentful.createClient({
  space: 'f35zh50bh0q8',
  accessToken: 'HBb_zsbYezQhuwa9UdagqTWf46-2rXF8Fkqy4TrefbI',
});
export const apiClientContentFul =  (title, skipElem = 0, limit = 10) =>{


    return new Promise((resolve, reject) => {
        client?.getEntries({
            content_type: `${title}`,
            skip: skipElem,
            limit
          })
          .then((response) => {
            console.log(response)
            resolve(response)
          })
          .catch((err) => {
            reject(err);
          })
        
    })
  
  };
// export const getServerSideProps = async () => {

//     const posts = await apiClientContentFul("jobs", 0, 100)
//     .then((res) => {
//         totalJobs = res.total;
//       return res;
//     });

//     const featurePosts = await apiClientContentFul("featuredJobs", 0, 100)
//     .then((res) => {
//         totalFeaturedJobs = res.total;
//       return res;
//     });
  
//     return {
//       props: { fallback: false, totalJobs: totalJobs, totalFeaturedJobs: totalFeaturedJobs },
//     };
// };

const Careers = () => {
  const [totalFeaturedJobs, settotalFeaturedJobs] = useState();
  const [totalJobs, settotalJobs] = useState();

    const fetchData = async () => {
        try {
          const posts = await apiClientContentFul("jobs", 0, 100);
          settotalJobs(posts?.total)
          const featurePosts = await apiClientContentFul("featuredJobs", 0, 100);
          settotalFeaturedJobs(featurePosts?.total)
        } catch (error) {
          console.error("Error fetching data:", error.message);
          setError(true);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
    return (
        <>
            <StickyProvider>
                <Layout>
                    <SEO title="Careers" />
                    <CareersMain totalFeaturedJobs={totalFeaturedJobs} totalJobs={totalJobs} />
                </Layout>
            </StickyProvider>
        </>
    );
}

export default Careers;