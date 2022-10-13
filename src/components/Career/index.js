import GradientCardBottomComponent from 'components/gradientCardWithBtn'
import React from 'react'
import WeAreInnovativeSection from './innovativeSection'
import WeAreKindSection from './weAreKindSection'
import WeAreSmartSection from './weAreSmartSection'

const CareerMain = () => {
  return (
    <div className='careers-page-who-we-are'>
        <WeAreKindSection />
        <WeAreSmartSection/>
        <WeAreInnovativeSection />
        <div className='bottom-card'>
        <GradientCardBottomComponent 
        title={'Join PAAQ'}
        content={'Together, let\'s manage complexity effectively, encourage innovation, and transform lives.'}
        btnText={'Available Jobs'}
        />
        </div>
    </div>
  )
}

export default CareerMain