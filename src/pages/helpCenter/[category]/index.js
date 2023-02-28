import React from "react";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

import SEO from "components/seo";
import Layout from "components/layout";
import { apiClientContentFulCategory } from "services/apiClient";
import { StickyProvider } from "../../../contexts/app/app.provider";
import SingleCategoryHelpCenter from "../../../components/HelpCenter/singleCategoryHelpCenter";

export const getServerSideProps = async (context) => {
  const { category } = context.params;

  const { id } = context.query;

  const posts = await apiClientContentFulCategory(
    "helpCenter",
    "category",
    category
  ).then((res) => {
    return res?.items;
  });

  return {
    props: { fallback: false, ...posts, id },
  };
};

export default function MediaPage(props) {
  const { id } = props;
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Help Center" />
          <SingleCategoryHelpCenter fields={props} id={id} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
