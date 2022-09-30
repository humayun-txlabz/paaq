import React from 'react'
import SectionMarketTrends from './sectionMarketTrends'
import SectionProblem from './sectionProblem'
import SectionSolution from './sectionSolution'
import InvestorsTop from './top'

const InvestorsMain = () => {
  return (
    <div className='investors-page-container'>
        <InvestorsTop />
        <SectionProblem />
        <SectionSolution />
        <SectionMarketTrends />
    </div>
  )
}

export default InvestorsMain