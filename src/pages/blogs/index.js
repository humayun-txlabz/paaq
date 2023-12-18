import React, { useEffect, useState } from "react";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import SEO from "components/seo";
import Layout from "components/layout";
import MainBlog from "components/AllBlogs/MainBlog";
import { StickyProvider } from "../../contexts/app/app.provider";
// import { apiClientContentFul } from "services/apiClient";
import * as contentful from "contentful";

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

export default function BlogsPage(props) {
  console.log("props_data", props);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const posts = await apiClientContentFul("mainBlogs", 0, 6);
      setData(posts);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("data", data)
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landinggg 006" />
          {data?.total>0 && <MainBlog posts={data} setData={setData} /> }
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}