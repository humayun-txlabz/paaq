import React from 'react'

import WeAreKindSection from './weAreKindSection'
import WeAreSmartSection from './weAreSmartSection'
import WeAreInnovativeSection from './innovativeSection'
import GradientCardBottomComponent from 'components/gradientCardWithBtn'

const CareerMain = ({ totalFeaturedJobs = 0, totalJobs = 0 }) => {
  return (
    <div className='careers-page-who-we-are'>
        <WeAreKindSection />
        <WeAreSmartSection/>
        <WeAreInnovativeSection />
        <div className='bottom-card'>
        <GradientCardBottomComponent 
        title={'Join PAAQ'}
        content={'Together, let\'s manage complexity effectively, encourage innovation, and transform lives.'}
        btnText={totalFeaturedJobs > 0 || totalJobs > 0 ? 'Available Jobs' : 'No Available Jobs'}
        />
        </div>
    </div>
  )
}

export default CareerMain