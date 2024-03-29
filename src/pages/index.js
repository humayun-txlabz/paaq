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
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
import CalculatorPotential from 'sections/CalculatorPotential';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Home" />
          <Banner />
          <CalculatorPotential />
          <Connections />
          <AskQuestionBanner />
          <SkillsBanner />
          <EarnMoneyBanner />
          <AppAndPlayStoreFooter />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
