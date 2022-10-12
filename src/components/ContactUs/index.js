import TickWithTextComp from 'components/tickWithText'
import React from 'react'

const ContactUsMain = () => {
  return (
    <div className='contact-us-page-main'>
        <div className='contact-us-page-grid-view'>
            <div className='left'>
                <h1>Contact Us</h1>
                <p>PAAQ is a knowledge based social media application designed to facilitate people's exchange of valuable insights and knowledge as well as earn money from answering questions.</p>
                <div className='h-line' />
                <h3>PAAQ gives access to:</h3>
                <TickWithTextComp text={'Global interaction.'} marginTop={'2rem'} />
                <TickWithTextComp text={'Expert knowledge tailored to your needs.'} marginTop={'2rem'} />
                <TickWithTextComp text={'Global interaction.'} marginTop={'2rem'} />
            </div>
            <div className='right'>sdfsd</div>
        </div>
    </div>
  )
}

export default ContactUsMain