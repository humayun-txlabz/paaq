import JobsMain from "components/jobs";
import Layout from "components/layout";
import SEO from "components/seo";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../../contexts/app/app.provider";

export default function JobsPage() {
     return (
               <StickyProvider>
                    <Layout>
                         <SEO title="Jobs" />
                         <JobsMain />
                    </Layout>
               </StickyProvider>
     );
}