import React from 'react'
import useIsInViewport from 'use-is-in-viewport';
import menuImg from '../assets/Icons/menu-black.png';
 
const ProgressComponent = ({isMenu, progress, title, marginBottom, progressColor, isAnimate}) => {
            const [isInViewport, targetRef] = useIsInViewport();

     const prog = progress && !isAnimate ? { width: `${progress}%` } : {};
  const marginB = marginBottom ? {marginBottom: `${marginBottom}rem`} : {};
  const progColor = progressColor ? {background: progressColor} : {};
  const isAnim = isAnimate ? "animate-progress" : "";
  return (
       <div ref={targetRef} style={marginB} className="in-progress-component">
            <h1>{title}</h1>
            <div className="inner-progress">
                 <div className="progress-bg">
                      <div
                           style={{ ...prog, ...progColor, maxWidth: `${progress}%`}}
                           className={`progress ${isAnim }`}
                      />
                 </div>
                 {isMenu ? <img src={menuImg} /> : null}
            </div>
       </div>
  );
}

export default ProgressComponent;