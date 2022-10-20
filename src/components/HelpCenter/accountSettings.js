import React from 'react'
import SinlgeFaqItem from './singleItem'

const AccountSettingsFaqs = () => {
  return (
    <div className='help-center-faq-single-card'>
        <h1>Account Settings</h1>
        <SinlgeFaqItem text={'How to reset password'} />
        <SinlgeFaqItem text={'Help with login'} />
        <SinlgeFaqItem text={'Help with login Phone number'} />
        <SinlgeFaqItem text={'How to change a user name'} />
        <SinlgeFaqItem text={'Help with uploading a profile photo'} />
        <SinlgeFaqItem text={'Help with adding an in-app video'} />
        <SinlgeFaqItem text={'Creating multiple accounts'} />
        <SinlgeFaqItem text={'How to deactivate an account'} />
        <SinlgeFaqItem text={'How to suspend an account?'} />
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default AccountSettingsFaqs