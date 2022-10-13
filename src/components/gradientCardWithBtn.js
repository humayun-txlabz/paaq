import React from 'react'

const GradientCardBottomComponent = ({title, content, btnText}) => {
  return (
    <div className='bottom-gradient-card-with-btn'>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className='white-btn'>
                {btnText}
            </div>
        </div>
  )
}

export default GradientCardBottomComponent