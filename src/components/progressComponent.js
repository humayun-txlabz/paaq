import React from 'react'
import menuImg from '../assets/Icons/menu-black.png';

const ProgressComponent = ({isMenu, progress, title, marginBottom, progressColor, isAnimate}) => {
  const prog = progress && !isAnimate ? { width: `${progress}%` } : {};
  const marginB = marginBottom ? {marginBottom: `${marginBottom}rem`} : {};
  const progColor = progressColor ? {background: progressColor} : {};
  const isAnim = isAnimate ? 'animate-progress' : '';
  return (
       <div style={marginB} className="in-progress-component">
            <h1>{title}</h1>
            <div className="inner-progress">
                 <div className="progress-bg">
                      <div
                           style={{ ...prog, ...progColor}}
                           className={`progress ${isAnim }`}
                      />
                 </div>
                 {isMenu ? <img src={menuImg} /> : null}
            </div>
       </div>
  );
}

export default ProgressComponent;