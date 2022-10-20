import React from 'react'
import BigImage from '../../assets/Images/careers-we-smart-1.png'

const WeAreSmartSection = () => {
  return (
    <div className='careers-page-we-are-smart-section'>
        <div className='left'>
            <h1>We Are Smart</h1>
            <p>Every action has a reaction. We ensure that we make high-quality and strategic decisions that will make people's lives better.</p>
            <p>We are continually striving to improve our work. Our problem-solving approach is characterized by courage.</p>
        </div>
        <div className='right'>
            <div>
            <img src={BigImage} />
            </div>
        </div>
    </div>
  )
}
 
export default WeAreSmartSection