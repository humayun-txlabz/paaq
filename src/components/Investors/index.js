import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter'
import React from 'react'
import SectionMarketTrends from './sectionMarketTrends'
import SectionProblem from './sectionProblem'
import SectionSolution from './sectionSolution'
import SectionWhyPaaq from './sectionWhyPaaq'
import InvestorsTop from './top'

const InvestorsMain = () => {
  return (
    <div className='investors-page-container'>
        <InvestorsTop />
        <SectionProblem />
        <SectionSolution />
        <SectionMarketTrends />
        <SectionWhyPaaq />
        <AppAndPlayStoreFooter />
    </div>
  )
}

export default InvestorsMain