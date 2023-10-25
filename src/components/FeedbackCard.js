'use-client'

import React from 'react'
import { Image } from 'theme-ui';
import ThumbsUpIcon from '../assets/Icons/thumbs-upp.svg';
import ThumbsDownIcon from '../assets/Icons/thumbs-downn.svg';
import { useState } from 'react';
import feedbackimg from '../assets/Feedbackimg.png'
// import '../../src/theme/styles.scss';

const FeedbackCard = () => {
  const [feedback, setFeedback] = useState(true)
  
  return (
    <div className='feedback'>
        <div className='feedback-main'>
            { feedback === true ? 
              <>
              <p>Do you find this helpful?</p>
            <div className='feedback-icon'>
                <span onClick={()=>setFeedback(!feedback)}><Image src={ThumbsUpIcon} /></span>
                <span onClick={()=>setFeedback(!feedback)}><Image src={ThumbsDownIcon} /></span>
            </div>
              </> 
            : 
            <>
            <div className='feedback-parent'>
            <div className='feedback-like'>
              <img src={feedbackimg} alt="" />
            </div>
            </div>
            <p className='feedback-like-text'>Thank you for your feedback.</p>
            </> }
        </div>
    </div>
  )
}

export default FeedbackCard