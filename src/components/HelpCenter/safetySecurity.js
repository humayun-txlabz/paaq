import React from 'react'
import Link from 'next/link'
import { titleCase } from '../../utils/titleCase';
import SinlgeFaqItem from './singleItem'

const SafetySecurityFaqs = ({marginTop, items}) => {

  const mTop = marginTop ? {marginTop : marginTop} : {};

  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>{items[0]?.fields?.title}</h1>
        {
          items ?
          items.map((value) => (
            <Link href="/helpCenter/[category]" as={`/helpCenter/${value?.sys?.id}`}>
              <a>
                <SinlgeFaqItem text={titleCase(value?.fields?.question)} />
              </a>
            </Link>

          )) :  null 
        }
        {/* <SinlgeFaqItem text={titleCase('How to block a user')} />
        <SinlgeFaqItem text={titleCase('How to report a user')} />
        <SinlgeFaqItem text={titleCase('How to unfollow a user')} />
        <SinlgeFaqItem text={'Status (Available/Unavailable)'} />
        <SinlgeFaqItem text={'Two-Factor Authentication'} /> */}
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default SafetySecurityFaqs;