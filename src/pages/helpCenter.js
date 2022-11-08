import HelpCenterMain from "components/HelpCenter";
import Layout from "components/layout";
import SEO from "components/seo";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";

export default function MediaPage() {
     return (
          <ThemeProvider theme={theme}>
               <StickyProvider>
                    <Layout>
                         <SEO title="Help Center" />
                         <HelpCenterMain />
                    </Layout>
               </StickyProvider>
          </ThemeProvider>
     );
}
