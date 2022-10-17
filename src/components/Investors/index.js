import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter'
import React from 'react'
import SectionMarketSize from './sectionMarketSize'
import SectionMarketTrends from './sectionMarketTrends'
import SectionProblem from './sectionProblem'
import SectionSolution from './sectionSolution'
import SectionWhyPaaq from './sectionWhyPaaq'
import InvestorsTop from './top'
import TopMain from './topMain'

const InvestorsMain = () => {
  return (
    <div className='investors-page-container'>
        <InvestorsTop />
        <SectionProblem />
        <SectionSolution />
        <SectionMarketTrends />
        <SectionMarketSize />
        <SectionWhyPaaq />
        <AppAndPlayStoreFooter />
    </div>
  )
}

export default InvestorsMain