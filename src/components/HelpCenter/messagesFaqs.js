import React from 'react'
import { titleCase } from '../../utils/titleCase';
import SinlgeFaqItem from './singleItem'

const MessagesFaqs = ({marginTop}) => {
    const mTop = marginTop ? {marginTop : marginTop} : {};
  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>Messages</h1>
        <SinlgeFaqItem text={'Creating A Direct Message (Chat)'} />
        <SinlgeFaqItem text={titleCase('Help with creating a Paid message')} />
        <SinlgeFaqItem text={titleCase('Help with creating a group message')} />
        <SinlgeFaqItem text={'Rejecting A Message'} />
        <SinlgeFaqItem text={'Reporting A Message'} />
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default MessagesFaqs;