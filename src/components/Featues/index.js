import ShareKnowledgeSection from 'components/ShareKnowledgeSection'
import React from 'react'
import SectionFive from './sectionFive'
import SectionFour from './sectionFour'
import SectionOne from './sectionOne'
import SectionThree from './sectionThree'
import SectionTwo from './sectionTwo'

function MainFeatures() {
  return (
    <div className='features-page-container'>
        <SectionOne />
        <SectionFive />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <ShareKnowledgeSection />
    </div>
  )
}

export default MainFeatures