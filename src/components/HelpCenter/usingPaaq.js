import React from 'react'
import { titleCase } from '../../utils/titleCase';
import SinlgeFaqItem from './singleItem'

const UsingPaaqFaqs = ({marginTop}) => {
    const mTop = marginTop ? {marginTop : marginTop} : {};
  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>Using Paaq</h1>
        <SinlgeFaqItem text={titleCase('Help with connecting with the right people')} />
        <SinlgeFaqItem text={titleCase('How to hide my followers')} />
        <SinlgeFaqItem text={titleCase('How to add my profession')} />
        <SinlgeFaqItem text={titleCase('How to change my online status')} />
        <SinlgeFaqItem text={titleCase('Help with adding my skills')} />
        <SinlgeFaqItem text={titleCase('How to rate a user’s skills')} />
        <SinlgeFaqItem text={titleCase('Help with creating a text post')} />
        <SinlgeFaqItem text={titleCase('Help with creating a video post')} />
        <SinlgeFaqItem text={titleCase('How to tag a post')} />
        <SinlgeFaqItem text={titleCase('How to add and remove interests')} />
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default UsingPaaqFaqs;