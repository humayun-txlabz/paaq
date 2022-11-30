import React from 'react'
import Link from 'next/link'

import { titleCase } from '../../utils/titleCase';
import SinlgeFaqItem from './singleItem'

const MessagesFaqs = ({marginTop, items, tag}) => {

    const mTop = marginTop ? {marginTop : marginTop} : {};

  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>{items[0]?.title}</h1>
        {
          items ?
          items.map((value) => (
            <Link href="/helpCenter/[category]" as={`/helpCenter/${tag}`}>
              <a>
              <SinlgeFaqItem text={titleCase(value.question)} />
              </a>
            </Link>

          )) :  null 
        }
        {/* <SinlgeFaqItem text={'Creating A Direct Message (Chat)'} />
        <SinlgeFaqItem text={titleCase('Help with creating a Paid message')} />
        <SinlgeFaqItem text={titleCase('Help with creating a group message')} />
        <SinlgeFaqItem text={'Rejecting A Message'} />
        <SinlgeFaqItem text={'Reporting A Message'} /> */}
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default MessagesFaqs;