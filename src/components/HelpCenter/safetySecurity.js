import React from 'react'
import { titleCase } from '../../utils/titleCase';
import SinlgeFaqItem from './singleItem'

const SafetySecurityFaqs = ({marginTop}) => {
    const mTop = marginTop ? {marginTop : marginTop} : {};
  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>Safety & Security</h1>
        <SinlgeFaqItem text={titleCase('How to block a user')} />
        <SinlgeFaqItem text={titleCase('How to report a user')} />
        <SinlgeFaqItem text={titleCase('How to unfollow a user')} />
        <SinlgeFaqItem text={'Status (Available/Unavailable)'} />
        <SinlgeFaqItem text={'Two-Factor Authentication'} />
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default SafetySecurityFaqs;