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
import useIsInViewport from "use-is-in-viewport";
import { useSpring, animated } from 'react-spring';
let LeaderLine;
setTimeout(() => {
  LeaderLine = require("leader-line-new");
}, 1000);

let line1 = null;
let line2 = null;
let line3 = null;
let line4 = null;
let line5 = null;
let line6 = null;
let line7 = null;
let line8 = null;

const LeaderAnimationComponent = () => {
  const [isInViewport, targetRef] = useIsInViewport();
  const [isShow, setIsShow] = useState(1);
  const [showLines, setShowLines] = useState(false);

  const [leftImage1, setLeftImage1] = useState(false)
  const [leftImage2, setLeftImage2] = useState(false)
  const [leftImage3, setLeftImage3] = useState(false)
  const [leftImage4, setLeftImage4] = useState(false)

  const [rightImage1, setRightImage1] = useState(false)
  const [rightImage2, setRightImage2] = useState(false)
  const [rightImage3, setRightImage3] = useState(false)
  const [rightImage4, setRightImage4] = useState(false)





  useEffect(() => {

    setTimeout(() => {
      setLeftImage1(true)
    }, 100);

    setTimeout(() => {
      setLeftImage2(true)
    }, 1000);

    setTimeout(() => {
      setRightImage1(true)
    }, 2000);

    setTimeout(() => {
      setRightImage2(true)
    }, 3000);

    setTimeout(() => {
      setLeftImage3(true)
    }, 4000);

    setTimeout(() => {
      setLeftImage4(true)
    }, 5000);

    setTimeout(() => {
      setRightImage3(true)
    }, 6000);

    setTimeout(() => {
      setRightImage4(true)
    }, 7000);

  }, [])

  const left1 = useRef(null);
  const left2 = useRef(null);
  const left3 = useRef(null);
  const left4 = useRef(null);
  const right1 = useRef(null);
  const right2 = useRef(null);
  const right3 = useRef(null);
  const right4 = useRef(null);
  const main = useRef(null);

  // let line1= null;

  useEffect(() => {
    const drawLine1 = () => {
      line1 = new LeaderLine(main.current, left1.current, {
        color: "black",
        size: 1,
        hide: true,
      });
      // line1.hide();
      line1.show("draw", {
        timing: "ease",
        duration: 2000,
      });
    };
    const drawLine2 = () => {
      line2 = new LeaderLine(main.current, left2.current, {
        color: "black",
        size: 1,
        hide: true,
      });
      line2.show("draw", {
        timing: "ease",
        duration: 2000,
      });
    };
    const drawLine3 = () => {
      line3 = new LeaderLine(main.current, left3.current, {
        color: "black",
        size: 1,
        hide: true,
      });
      line3.show("draw", {
        timing: "ease",
        duration: 2000,
      });
    };
    const drawLine4 = () => {
      line4 = new LeaderLine(main.current, left4.current, {
        color: "black",
        size: 1,
        hide: true,
      });
      line4.show("draw", {
        timing: "ease",
        duration: 2000,
      });
    };

    const drawLine5 = () => {
      line5 = new LeaderLine(main.current, right1.current, {
        color: "black",
        size: 1,
        hide: true,
      });
      line5.show("draw", {
        timing: "ease",
        duration: 2000,
      });
    };
    const drawLine6 = () => {
      line6 = new LeaderLine(main.current, right2.current, {
        color: "black",
        size: 1,
        hide: true,
      });
      line6.show("draw", {
        timing: "ease",
        duration: 2000,
      });
    };
    const drawLine7 = () => {
      line7 = new LeaderLine(main.current, right3.current, {
        color: "black",
        size: 1,
        hide: true,
      });
      line7.show("draw", {
        timing: "ease",
        duration: 2000,
      });
    };
    const drawLine8 = () => {
      line8 = new LeaderLine(main.current, right4.current, {
        color: "black",
        size: 1,
        hide: true,
      });
      line8.show("draw", {
        timing: "ease",
        duration: 2000,
      });
    };

    if (isShow >= 2) {
      setTimeout(() => {
        drawLine1();
        drawLine2();
        drawLine3();
        drawLine4();
        drawLine5();
        drawLine6();
        drawLine7();
        drawLine8();

      }, 220);
    }
    setShowLines(true);

    return () => {
      // Cleanup function to hide lines immediately when the component is unmounted
      line1?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line2?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line3?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line4?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line5?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line6?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line7?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line8?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      setShowLines(false);
    };

  }, [isShow]);

  useEffect(() => {
    if (isInViewport == true) {
      setIsShow(isShow + 1);
    }
  }, [isInViewport]);

  useEffect(() => {
    return () => {
      console.log("cleaned up", line1, 'LeaderLine', LeaderLine);
      line1?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line2?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line3?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line4?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line5?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line6?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line7?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      line8?.hide("fade", {
        timing: "linear",
        duration: 0,
      });
      // LeaderLine = null;
      setShowLines(false);
    };
  }, []);

  return (
    <>
      {showLines && (
        <div
          ref={targetRef}
          className="leader-animation-component web-leader-animation-component"
        >
          <img
            ref={left1}
            className={`left1 left1la ${isShow >= 2 ? "left1Anim" : ""}`}
            src={Left1}
          />
          <img
            ref={left2}
            className={`left2 left2la ${isShow >= 2 ? "left2Anim" : ""}`}
            src={Left2}
          />
          <img
            ref={left3}
            className={`left3 ${isShow >= 2 ? "left3Anim" : ""}`}
            src={Left3}
          />
          <img
            ref={left4}
            className={`left4 ${isShow >= 2 ? "left4Anim" : ""}`}
            src={Left4}
          />
          <img
            ref={right1}
            className={`right1 ${isShow >= 2 ? "left5Anim" : ""}`}
            src={Right1}
          />
          <img
            ref={right2}
            className={`right2 ${isShow >= 2 ? "left6Anim" : ""}`}
            src={Right2}
          />
          <img
            ref={right3}
            className={`right3 ${isShow >= 2 ? "left7Anim" : ""}`}
            src={Right3}
          />
          <img
            ref={right4}
            className={`right4 ${isShow >= 2 ? "left8Anim" : ""}`}
            src={Right4}
          />
          <img ref={main} className="main" src={Main} />
        </div>
      )}

      <div className="kind-parent">

      <div className="kind-parent-left1" style={{ opacity: leftImage1 === false ? '0' : '1', transition: 'opacity 0.5s ease' }}>
  <img className="left1" src={Left1} />
</div>

        <div className="kind-parent-right1" style={{ opacity: rightImage1 === false? '0' : '1', transition: 'opacity 0.5s ease' }}>
          <img className="right1" src={Right1} />
        </div>

        <div className="kind-parent-left2" style={{ opacity: leftImage2 === false ? '0' : '1', transition: 'opacity 0.5s ease' }}>
          <img className="left2 left2la" src={Left2} />
        </div>

        <div className="kind-parent-right2" style={{ opacity: rightImage2 === false? '0' : '1', transition: 'opacity 0.5s ease' }}>
          <img className="right2" src={Right2} />
        </div>

        <div className="kind-parent-left3" style={{ opacity: leftImage3 === false ? '0' : '1', transition: 'opacity 0.5s ease' }}>
          <img className="left3 left3la" src={Left3} />
        </div>

        <div className="kind-parent-right3" style={{ opacity: rightImage3 === false? '0' : '1', transition: 'opacity 0.5s ease' }}>
          <img className="right3" src={Right3} />
        </div>

        <div className="kind-parent-left4" style={{ opacity: leftImage4 === false ? '0' : '1', transition: 'opacity 0.5s ease' }}>
          <img className="left4 left4la" src={Left4} />
        </div>

        <div className="kind-parent-right4" style={{ opacity: rightImage4 === false? '0' : '1', transition: 'opacity 0.5s ease' }}>
          <img className="right4" src={Right4} />
        </div>

        <div className="kind-parent-main">
          <img className="main" src={Main} />
        </div>



      </div>

      {/* <div className="leader-animation-component mobile-leader-animation-component">
        <img className="left1 left1la" src={Left1} />
        <img className="left2 left2la" src={Left2} />

        <img className="left3" src={Left3} />
        <img className="left4" src={Left4} />
        <img className="right1" src={Right1} />
        <img className="right2" src={Right2} />
        <img className="right3" src={Right3} />
        <img className="right4" src={Right4} />
        <img className="main" src={Main} />
      </div> */}
    </>
  );
};

export default LeaderAnimationComponent;
