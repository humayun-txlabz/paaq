import React from 'react'
import SectionFour from './sectionFour'
import SectionOne from './sectionOne'
import SectionThree from './sectionThree'
import SectionTwo from './sectionTwo'

function MainFeatures() {
  return (
    <div className='features-page-container'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
    </div>
  )
}

export default MainFeatures