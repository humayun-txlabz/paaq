import React from 'react'
import { Image } from 'theme-ui';
import ThumbsUpIcon from '../assets/Icons/thumbs-upp.svg';
import ThumbsDownIcon from '../assets/Icons/thumbs-downn.svg';

const FeedbackCard = () => {
  return (
    <div className='feedback'>
        <div className='feedback-main'>
            <p>Do you find this helpful?</p>
            <div className='feedback-icon'>
                <Image src={ThumbsUpIcon} />
                <Image src={ThumbsDownIcon} />
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard