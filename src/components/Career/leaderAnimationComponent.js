import React, { useEffect, useRef } from 'react';
import Left1 from '../../assets/Images/careers/left1.png';
import Left2 from '../../assets/Images/careers/left2.png';
import Left3 from '../../assets/Images/careers/left3.png';
import Left4 from '../../assets/Images/careers/left4.png';
import Right1 from '../../assets/Images/careers/right1.png';
import Right2 from '../../assets/Images/careers/right2.png';
import Right3 from '../../assets/Images/careers/right3.png';
import Right4 from '../../assets/Images/careers/right4.png';
import Main from '../../assets/Images/careers/main.png';
import Xarrow from "react-xarrows";

const LeaderAnimationComponent = () => {
  const left1 = useRef(null);
  const left2 = useRef(null);
  const left3 = useRef(null);
  const left4 = useRef(null);
  const right1 = useRef(null);
  const right2 = useRef(null);
  const right3 = useRef(null);
  const right4 = useRef(null);
  const main = useRef(null);

  useEffect(() => {

  }, [])
  return (
    <div className='leader-animation-component'>
        <img ref={left1} className='left1 left1la' src={Left1} />
        <img ref={left2} className='left2 left2la' src={Left2} />
        
        <img ref={left3} className='left3' src={Left3} />
        <img ref={left4} className='left4' src={Left4} />
        <img ref={right1} className='right1' src={Right1} />
        <img ref={right2} className='right2' src={Right2} />
        <img ref={right3} className='right3' src={Right3} />
        <img ref={right4} className='right4' src={Right4} />
        <img ref={main} className='main' src={Main} />
        <Xarrow
                start={main} //can be react ref
                end={left1} //or an id
                lineColor={'#000000'}
                headColor={'#000000'}
                strokeWidth={'1'}
                animateDrawing={true}
            />
            <Xarrow
                start={main} //can be react ref
                end={right2} //or an id
                headColor={'#000000'}
                strokeWidth={'1'}
                lineColor={'#000000'}
                animateDrawing={true}

            />
            <Xarrow
                start={main} //can be react ref
                end={right3} //or an id
                headColor={'#000000'}
                strokeWidth={'1'}
                lineColor={'#000000'}
                animateDrawing={true}

            />
            <Xarrow
                start={main} //can be react ref
                end={right4} //or an id
                headColor={'#000000'}
                strokeWidth={'1'}
                lineColor={'#000000'}
                animateDrawing={true}

            />

<Xarrow
                start={main} //can be react ref
                end={right1} //or an id
                lineColor={'#000000'}
                headColor={'#000000'}
                strokeWidth={'1'}
                animateDrawing={true}

            />
            <Xarrow
                start={main} //can be react ref
                end={left2} //or an id
                headColor={'#000000'}
                strokeWidth={'1'}
                lineColor={'#000000'}
                animateDrawing={true}

            />
            <Xarrow
                start={main} //can be react ref
                end={left3} //or an id
                headColor={'#000000'}
                strokeWidth={'1'}
                lineColor={'#000000'}
                animateDrawing={true}

            />
            <Xarrow
                start={main} //can be react ref
                end={left4} //or an id
                headColor={'#000000'}
                strokeWidth={'1'}
                lineColor={'#000000'}
                animateDrawing={true}

            />
    </div>
  )
}

export default LeaderAnimationComponent