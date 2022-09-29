import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter'
import ShareKnowledgeSection from 'components/ShareKnowledgeSection'
import React from 'react'
import SectionPaidMessage from './sectionPaidMessage'
import SectionMyProfession from './sectionMyProfession'
import SectionMySkills from './sectionMySkills'
import SectionInApp from './sectionInApp'
import SectionSetPrice from './sectionSetPrice'

const MainFeatures = () => {
  return (
    <div className='features-page-container'>
        <SectionMySkills />
        <SectionPaidMessage />
        <SectionSetPrice />
        <SectionInApp />
        <SectionMyProfession />
        <AppAndPlayStoreFooter />
    </div>
  )
}

export default MainFeatures