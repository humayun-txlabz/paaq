import Layout from "components/layout";
import MediaMain from "components/Media";
import SEO from "components/seo";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";

export default function MediaPage() {
     console.log("isServerisServer");
     return (
          <ThemeProvider theme={theme}>
               <StickyProvider>
                    <Layout>
                         <SEO title="Startup Landing 007" />
                         <MediaMain />
                    </Layout>
               </StickyProvider>
          </ThemeProvider>
     );
}
