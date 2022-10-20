import React from 'react'
import SinlgeFaqItem from './singleItem'

const MessagesFaqs = ({marginTop}) => {
    const mTop = marginTop ? {marginTop : marginTop} : {};
  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>Messages</h1>
        <SinlgeFaqItem text={'Creating a Direct message (Chat)'} />
        <SinlgeFaqItem text={'Help with creating a Paid message'} />
        <SinlgeFaqItem text={'Help with creating a group message'} />
        <SinlgeFaqItem text={'Rejecting a message'} />
        <SinlgeFaqItem text={'Reporting a message'} />
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default MessagesFaqs;