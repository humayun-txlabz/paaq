'use-client'

import React from 'react'
import { Image } from 'theme-ui';
import ThumbsUpIcon from '../assets/Icons/thumbs-upp-bg.png';
import ThumbsDownIcon from '../assets/Icons/thumbs-down-bg.png';
import { useState } from 'react';
// import feedbackimg from '../assets/Feedbackimg.png'
// import '../../src/theme/styles.scss';

const FeedbackCard = () => {
  const [feedback, setFeedback] = useState(true)

  return (
    <div className='feedback'>
      <div className='feedback-main'>
        {feedback === true ?
          <>
            <p>Do you find this helpful?</p>
            <div className='feedback-icon'>
              <span onClick={() => setFeedback(!feedback)}><Image style={{width:'70px'}} src={ThumbsUpIcon} /></span>
              <span onClick={() => setFeedback(!feedback)}><Image style={{width:'70px'}} src={ThumbsDownIcon} /></span>
            </div>
          </>
          :
          <>
            <div className='feedback-parent'>
              <div className='feedback-like'>
                {/* <img src={feedbackimg} alt="" /> */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.9998 45.5136C36.3291 45.5136 45.5133 36.3294 45.5133 25.0001C45.5133 13.6708 36.3291 4.48657 24.9998 4.48657C13.6705 4.48657 4.48633 13.6708 4.48633 25.0001C4.48633 36.3294 13.6705 45.5136 24.9998 45.5136Z" fill="#FFBE55" />
                  <path d="M25.0006 40.0743C18.7652 40.0743 13.877 36.6039 11.9246 30.7912C11.6725 30.0407 12.0766 29.2279 12.8271 28.9759C13.5775 28.7237 14.3905 29.1278 14.6425 29.8784C15.3826 32.0819 17.8735 37.2072 25.0005 37.2072C27.702 37.2072 30.0125 36.4683 31.8676 35.0108C33.4756 33.7477 34.6809 31.9784 35.3531 29.8947C35.5962 29.1412 36.4039 28.7274 37.1577 28.9706C37.9112 29.2137 38.325 30.0216 38.0819 30.7752C37.2336 33.4041 35.6972 35.6483 33.639 37.2656C31.2665 39.1292 28.3601 40.0743 25.0006 40.0743Z" fill="#0B4870" />
                  <path d="M16.2189 21.8136C17.5922 21.8136 18.7054 20.7003 18.7054 19.3271C18.7054 17.9538 17.5922 16.8406 16.2189 16.8406C14.8457 16.8406 13.7324 17.9538 13.7324 19.3271C13.7324 20.7003 14.8457 21.8136 16.2189 21.8136Z" fill="#0B4870" />
                  <path d="M33.7795 21.8136C35.1527 21.8136 36.266 20.7003 36.266 19.3271C36.266 17.9538 35.1527 16.8406 33.7795 16.8406C32.4062 16.8406 31.293 17.9538 31.293 19.3271C31.293 20.7003 32.4062 21.8136 33.7795 21.8136Z" fill="#0B4870" />
                </svg>

              </div>
            </div>
            <p className='feedback-like-text'>Thank you for your feedback.</p>
          </>}
      </div>
    </div>
  )
}

export default FeedbackCard