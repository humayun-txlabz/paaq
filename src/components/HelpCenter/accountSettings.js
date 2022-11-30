import Link from 'next/link'
import React from 'react'
import { titleCase } from '../../utils/titleCase'
import SinlgeFaqItem from './singleItem'

const AccountSettingsFaqs = ({items, tag}) => {

  return (
    <div className='help-center-faq-single-card'>
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
        {/* <SinlgeFaqItem text={titleCase('How to reset Password')} />
        <SinlgeFaqItem text={titleCase('Help with login')} />
        <SinlgeFaqItem text={titleCase('Help with login Phone number')} />
        <SinlgeFaqItem text={titleCase('How to change a user name')} />
        <SinlgeFaqItem text={titleCase('Help with uploading a profile photo')} />
        <SinlgeFaqItem text={titleCase('Help with adding an in-app video')} />
        <SinlgeFaqItem text={titleCase('Creating multiple accounts')} />
        <SinlgeFaqItem text={titleCase('How to deactivate an account')} />
        <SinlgeFaqItem text={titleCase('How to suspend an account?')} /> */}
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default AccountSettingsFaqs