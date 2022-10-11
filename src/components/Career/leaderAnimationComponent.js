import React from 'react';
import Left1 from '../../assets/Images/careers/left1.png';
import Left2 from '../../assets/Images/careers/left2.png';
import Left3 from '../../assets/Images/careers/left3.png';
import Left4 from '../../assets/Images/careers/left4.png';
import Right1 from '../../assets/Images/careers/right1.png';
import Right2 from '../../assets/Images/careers/right2.png';
import Right3 from '../../assets/Images/careers/right3.png';
import Right4 from '../../assets/Images/careers/right4.png';
import Main from '../../assets/Images/careers/main.png';

const LeaderAnimationComponent = () => {
  return (
    <div className='leader-animation-component'>
        <img className='left1' src={Left1} />
        <img className='left2' src={Left2} />
        <img className='left3' src={Left3} />
        <img className='left4' src={Left4} />
        <img className='right1' src={Right1} />
        <img className='right2' src={Right2} />
        <img className='right3' src={Right3} />
        <img className='right4' src={Right4} />
        <img className='main' src={Main} />
    </div>
  )
}

export default LeaderAnimationComponent