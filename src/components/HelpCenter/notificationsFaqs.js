import React from 'react'
import SinlgeFaqItem from './singleItem'

const NotificationsFaqs = ({marginTop}) => {
    const mTop = marginTop ? {marginTop : marginTop} : {};
  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>Notifications</h1>
        <SinlgeFaqItem text={'How to enable notifications'} />
        <SinlgeFaqItem text={'How to receive recommendations'} />
        <SinlgeFaqItem text={'How to update notification preferences'} />
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default NotificationsFaqs;