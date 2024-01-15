import React from 'react';
import TickImage from '../assets/tick.png';

const TickWithTextComp = ({text, marginTop}) => {
    const mTop = marginTop ? {marginTop} : {};
  return (
    <div className='tick-with-text-component' style={{...mTop}}>
        <div className='text-and-img'>
            <div><div className='image'><img src={TickImage} /></div></div>{text}
        </div>
    </div>
  )
}

export default TickWithTextComp