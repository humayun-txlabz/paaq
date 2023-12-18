import React from 'react'
import BigImage from '../../assets/Images/career-we-innovative-1.png'

const WeAreInnovativeSection = () => {
  return (
    <div className='careers-page-we-are-innovative-section'>
      <div className='web-right'>
            <img src={BigImage} />
        </div>
        <div className='left'>
            <h1 className='feedback_color' style={{color:'#252F44'}}>We Are Innovative</h1>
            <p>We at PAAQ understand how powerful and problem solving the mind can be. </p>
            <p>Through our culture and values, we encourage people to utilize their creative skills to make the world a better place.</p>
        </div>
        <div className='mobile-right'>
            <img src={BigImage} />
        </div>
    </div>
  )
}

export default WeAreInnovativeSection