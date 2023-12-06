import React, { useRef } from 'react';
import CareersMain from 'components/Careers';
import Layout from 'components/layout';
import SEO from 'components/seo';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import { apiClientContentFul } from 'services/apiClient';

let totalJobs = 0;
let totalFeaturedJobs = 0;

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

const Careers = (props) => {

    const { totalFeaturedJobs, totalJobs } = props;
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