import React from 'react'
import Link from 'next/link'

import { titleCase } from '../../utils/titleCase';
import SinlgeFaqItem from './singleItem'

const NotificationsFaqs = ({marginTop, items}) => {
    const mTop = marginTop ? {marginTop : marginTop} : {};
  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>{items[0]?.fields?.title}</h1>
        {
          items ?
          items.map((value) => (
            <Link href="/helpCenter/[category]" as={`/helpCenter/${value?.fields?.category}?id=${value?.sys?.id}`}>
              <a>
                <SinlgeFaqItem text={titleCase(value?.fields?.question)} />
              </a>
            </Link>

          )) :  null 
        }
    </div>
  )
}

export default NotificationsFaqs;