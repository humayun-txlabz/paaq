import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Connections from 'sections/connections';
import SkillsBanner from 'sections/SkillsBanner';
import EarnMoneyBanner from 'sections/EarnMoneyBanner';
import AskQuestionBanner from 'sections/AskQuestionBanner';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 005" />
          <Banner />
          <Connections />
          {/* <AskQuestionBanner />
          <SkillsBanner />
          {/* <EarnMoneyBanner /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
