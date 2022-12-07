import Link from 'next/link'
import React from 'react'

const GradientCardBottomComponent = ({title, content, btnText}) => {
  return (
    <div className='bottom-gradient-card-with-btn'>
            <h1>{title}</h1>
            <p>{content}</p>
            <Link href="/jobs">
              <div className='white-btn'>
                  {btnText}
              </div>
            </Link>
        </div>
  )
}

export default GradientCardBottomComponent