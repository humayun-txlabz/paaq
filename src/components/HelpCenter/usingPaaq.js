import React from 'react'
import SinlgeFaqItem from './singleItem'

const UsingPaaqFaqs = ({marginTop}) => {
    const mTop = marginTop ? {marginTop : marginTop} : {};
  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>Using Paaq</h1>
        <SinlgeFaqItem text={'Help with connecting with the right people'} />
        <SinlgeFaqItem text={'How to hide my followers'} />
        <SinlgeFaqItem text={'How to add my profession'} />
        <SinlgeFaqItem text={'How to change my online status'} />
        <SinlgeFaqItem text={'Help with adding my skills'} />
        <SinlgeFaqItem text={'How to rate a user’s skills'} />
        <SinlgeFaqItem text={'Help with creating a text post'} />
        <SinlgeFaqItem text={'Help with creating a video post'} />
        <SinlgeFaqItem text={'How to tag a post'} />
        <SinlgeFaqItem text={'How to add and remove interests'} />
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default UsingPaaqFaqs;