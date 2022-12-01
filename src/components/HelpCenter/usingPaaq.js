import React from 'react'
import Link from 'next/link'
import { titleCase } from '../../utils/titleCase';
import SinlgeFaqItem from './singleItem'

const UsingPaaqFaqs = ({marginTop, items}) => {

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
        {/* <SinlgeFaqItem text={titleCase('How to hide my followers')} />
        <SinlgeFaqItem text={titleCase('How to add my profession')} />
        <SinlgeFaqItem text={titleCase('How to change my online status')} />
        <SinlgeFaqItem text={titleCase('Help with adding my skills')} />
        <SinlgeFaqItem text={titleCase('How to rate a user’s skills')} />
        <SinlgeFaqItem text={titleCase('Help with creating a text post')} />
        <SinlgeFaqItem text={titleCase('Help with creating a video post')} />
        <SinlgeFaqItem text={titleCase('How to tag a post')} />
        <SinlgeFaqItem text={titleCase('How to add and remove interests')} /> */}
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default UsingPaaqFaqs;