import React from 'react'
import RightImage from '../../assets/Images/media-right-1.png';

const MediaPageTop = () => {
  return (
    <div className='grid-container-media-page-top'>
        <div className='left'>
            <h1>Press & Media</h1>
            <p>PAAQ is a knowledge based social media application designed to facilitate people's exchange of valuable insights and knowledge as well as earn money from answering questions.</p>
            <p style={{marginTop: '3%'}}>Contact us for all media and press inquiries.</p>
            <div style={{marginTop: '3%'}} className='btn'>
            Contact us
            </div>
        </div>
        <div className='right'>
            <img src={RightImage} />
        </div>
    </div>
  )
}

export default MediaPageTop