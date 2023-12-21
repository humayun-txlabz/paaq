import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import theme from "theme";
import { ThemeProvider } from "theme-ui";

import SEO from "components/seo";
import Layout from "components/layout";
// import { apiClientContentFulCategory } from "services/apiClient";
import { StickyProvider } from "../../../contexts/app/app.provider";
import SingleCategoryHelpCenter from "../../../components/HelpCenter/singleCategoryHelpCenter";


import * as contentful from "contentful";

const client = contentful.createClient({
  space: 'f35zh50bh0q8',
  accessToken: 'HBb_zsbYezQhuwa9UdagqTWf46-2rXF8Fkqy4TrefbI',
});


export const apiClientContentFulCategory =  (title, category, item) =>{
    return new Promise((resolve, reject) => {
        client?.getEntries({
            content_type: `${title}`,
            [`fields.${category}[all]`]: item
          })
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err);
          })
        
    })
  
  };


export default function MediaPage() {

  const router = useRouter();
  const { category } = router.query;
  const { id } = router.query;

  const [posts,setPosts]=useState()
  const [routeId,setrouteId]=useState()
  const fetchData = async () => {
    try {
      const data = await apiClientContentFulCategory("helpCenter","category",category);
      setPosts(data?.items);
    setrouteId(data?.items?.[0]?.sys?.id)

    } catch (error) {
      console.error("Error fetching data:", error.message);
      // setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // const { id } = props;
  return (
   <>
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Help Center" />
          {posts?.length>0&&<SingleCategoryHelpCenter fields={posts} id={id?id:routeId} />}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
    </>
  );
}