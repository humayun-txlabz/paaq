import React, { useEffect, useRef, useState } from "react";
import Left1 from "../../assets/Images/careers/left1.png";
import Left2 from "../../assets/Images/careers/left2.png";
import Left3 from "../../assets/Images/careers/left3.png";
import Left4 from "../../assets/Images/careers/left4.png";
import Right1 from "../../assets/Images/careers/right1.png";
import Right2 from "../../assets/Images/careers/right2.png";
import Right3 from "../../assets/Images/careers/right3.png";
import Right4 from "../../assets/Images/careers/right4.png";
import Main from "../../assets/Images/careers/main.png";
import Xarrow from "react-xarrows";
import useIsInViewport from "use-is-in-viewport";
let LeaderLine;
setTimeout(() => {

  LeaderLine = require("leader-line-new");
}, 1000)

const LeaderAnimationComponent = () => {

  const [isInViewport, targetRef] = useIsInViewport();
     const [isShow, setIsShow] = useState(1);

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
    const drawLine1 = () => {
      const line1 = new LeaderLine(
          main.current,
          left1.current, {color: 'black', size: 1,hide: true});
          // line1.hide();
          line1.show('draw', {
            timing: 'ease',
            duration: 2000
          });
  };
  const drawLine2 = () => {
    const line2 = new LeaderLine(
        main.current,
        left2.current, {color: 'black', size: 1, hide: true});
        line2.show('draw', {
          timing: 'ease',
          duration: 2000
        });
};
const drawLine3 = () => {
  let line3 = new LeaderLine(
      main.current,
      left3.current, {color: 'black', size: 1, hide: true});
      line3.show('draw', {
        timing: 'ease',
        duration: 2000
      });
};
const drawLine4 = () => {
  let line4 = new LeaderLine(
      main.current,
      left4.current, {color: 'black', size: 1, hide: true});
      line4.show('draw', {
        timing: 'ease',
        duration: 2000
      });
};

const drawLine5 = () => {
  let line5 = new LeaderLine(
      main.current,
      right1.current, {color: 'black', size: 1, hide: true});
      line5.show('draw', {
        timing: 'ease',
        duration: 2000
      });
};
const drawLine6 = () => {
let line6 = new LeaderLine(
    main.current,
    right2.current, {color: 'black', size: 1, hide: true});
    line6.show('draw', {
      timing: 'ease',
      duration: 2000
    });
};
const drawLine7 = () => {
let line7 =new LeaderLine(
  main.current,
  right3.current, {color: 'black', size: 1, hide: true});
  line7.show('draw', {
    timing: 'ease',
    duration: 2000
  });
};
const drawLine8 = () => {
let line8 = new LeaderLine(
  main.current,
  right4.current, {color: 'black', size: 1, hide: true});
  line8.show('draw', {
    timing: 'ease',
    duration: 2000
  });
};
  
if(isShow >=2){
  setTimeout(() => {
    drawLine1();
    drawLine2();
    drawLine3();
    drawLine4();
    drawLine5();
    drawLine6();
    drawLine7();
    drawLine8();
  }, 2200)
}
  
  }, [isShow]);

  useEffect(() => {
    if (isInViewport == true) {
         setIsShow(isShow + 1);
    }
}, [isInViewport]);

  return (
    <>
    <div ref={targetRef} className="leader-animation-component web-leader-animation-component">
      <img ref={left1} className={`left1 left1la ${isShow >= 2 ? 'left1Anim' : ''}`} src={Left1} />
      <img ref={left2} className={`left2 left2la ${isShow >= 2 ? 'left2Anim' : ''}`} src={Left2} />

      <img ref={left3} className={`left3 ${isShow >= 2 ? 'left3Anim' : ''}`} src={Left3} />
      <img ref={left4} className={`left4 ${isShow >= 2 ? 'left4Anim' : ''}`} src={Left4} />
      <img ref={right1} className={`right1 ${isShow >= 2 ? 'left5Anim' : ''}`} src={Right1} />
      <img ref={right2} className={`right2 ${isShow >= 2 ? 'left6Anim' : ''}`} src={Right2} />
      <img ref={right3} className={`right3 ${isShow >= 2 ? 'left7Anim' : ''}`} src={Right3} />
      <img ref={right4} className={`right4 ${isShow >= 2 ? 'left8Anim' : ''}`} src={Right4} />
      <img ref={main} className="main" src={Main} />
      
    </div>

    <div className="leader-animation-component mobile-leader-animation-component">
      <img className="left1 left1la" src={Left1} />
      <img className="left2 left2la" src={Left2} />

      <img className="left3" src={Left3} />
      <img className="left4" src={Left4} />
      <img  className="right1" src={Right1} />
      <img  className="right2" src={Right2} />
      <img className="right3" src={Right3} />
      <img  className="right4" src={Right4} />
      <img className="main" src={Main} />
      
    </div>
    </>
  );
};

export default LeaderAnimationComponent;
