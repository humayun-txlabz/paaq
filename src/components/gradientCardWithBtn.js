import { useRouter } from 'next/router';
import React from 'react'

const GradientCardBottomComponent = ({ title, content, btnText }) => {
  const router = useRouter();
  return (
    <div className='bottom-gradient-card-with-btn'>
      <h1>{title}</h1>
      <p>{content}</p>
        <div className='white-btn' style={{backgroundColor: btnText === 'No Available Jobs' ? '#DADADA' : '', color: btnText === 'No Available Jobs' ? '#00000080': '#000000'}} onClick={() => {
         btnText === 'Available Jobs' ?  router.push('/jobs') : null
        }}>
          {btnText}
        </div>
    </div>
  )
}

export default GradientCardBottomComponent