import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter'
import TickWithTextComp from 'components/tickWithText'
import React from 'react'
import ContactUsForm from './form'

const ContactUsMain = () => {
  return (
    <div className='contact-us-page-main'>
        <div className='contact-us-page-grid-view'>
            <div className='left left-web'>
                <h1>Contact Us</h1>
                <p>PAAQ is a knowledge based social media application designed to facilitate people's exchange of valuable insights and knowledge as well as earn money from answering questions.</p>
                {/* <div className='h-line' /> */}
                <h3>PAAQ gives access to:</h3>
                <TickWithTextComp text={'Global interaction.'} marginTop={'2rem'} />
                <TickWithTextComp text={'Expert knowledge tailored to your needs.'} marginTop={'2rem'} />
                <TickWithTextComp text={'Responses from people without feeling isolated or ignored.'} marginTop={'2rem'} />
            </div>
            <div className='right'>
                <div className='mobile-top-view'>
                <h1>Contact Us</h1>
                <p>PAAQ is a knowledge based social media application designed to facilitate people's exchange of valuable insights and knowledge as well as earn money from answering questions.</p>
                </div>
                <ContactUsForm />
            </div>
            <div className='left right-mobile'>
                <h3>PAAQ gives access to:</h3>
                <TickWithTextComp text={'Global interaction.'} marginTop={'2rem'} />
                <TickWithTextComp text={'Expert knowledge tailored to your needs.'} marginTop={'2rem'} />
                <TickWithTextComp text={'Responses from people without feeling isolated or ignored.'} marginTop={'2rem'} />
            </div>
        </div>
        <AppAndPlayStoreFooter />
    </div>
  )
}

export default ContactUsMain