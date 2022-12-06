import Link from 'next/link'
import React, { useState } from 'react'
import { titleCase } from '../../utils/titleCase'
import SinlgeFaqItem from './singleItem'
import UpAccIcon from '../../assets/Icons/chevronUp.svg';
import DownAccIcon from '../../assets/Icons/chevronDown.svg';
import { Image } from 'theme-ui';

const AccountSettingsFaqs = ({items}) => {

  const [isAccordianOpen, setIsAccordianOpen] = useState(false);

  return (
    <div className='help-center-faq-single-card'>
        <div className='help-center-faq-single-card-heading'>
          <h1>{items[0]?.fields?.title}</h1>
          { isAccordianOpen ? (

            <Image src={DownAccIcon}  onClick={()=>setIsAccordianOpen(!isAccordianOpen)}  />
            ) : (
            <Image src={UpAccIcon}  onClick={()=>setIsAccordianOpen(!isAccordianOpen)}  />

          )}
        </div>
        {
          items ?
          items.map((value) => (
            <Link href="/helpCenter/[category]" as={`/helpCenter/${value?.fields?.category}?id=${value?.sys?.id}`}>
              <a style={{display: isAccordianOpen ? 'none' : 'unset' }}>
                <SinlgeFaqItem text={titleCase(value?.fields?.question)} />
              </a>
            </Link>

          )) :  null 
        }
    </div>
  )
}

export default AccountSettingsFaqs