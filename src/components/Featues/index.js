import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter'
import React, { useEffect } from 'react'
import SectionPaidMessage from './sectionPaidMessage'
import SectionMyProfession from './sectionMyProfession'
import SectionMySkills from './sectionMySkills'
import SectionInApp from './sectionInApp'
import SectionSetPrice from './sectionSetPrice'

const MainFeatures = ({section}) => {

  useEffect(()=>{
    if(section){
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  });

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