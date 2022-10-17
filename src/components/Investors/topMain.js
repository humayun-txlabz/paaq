import React from "react";
import BgImage from "../../assets/webbg.png";
import BgMobileImage from "../../assets/mobilebg.png";
import InvestorsTop from "./top";
import { useSpring, animated } from "react-spring";
import Image1 from '../../assets/Icons/investors/1.png';
import Image2 from '../../assets/Icons/investors/2.png';
import Image3 from '../../assets/Icons/investors/3.png';
import Image4 from '../../assets/Icons/investors/4.png';
import Image5 from '../../assets/Icons/investors/5.png';
import Image6 from '../../assets/Icons/investors/6.png';
import Image7 from '../../assets/Icons/investors/7.png';
import TextPillComponent from './../textPillComp';

const TopMain = () => {

    const update3 = (value) => {
        let obj = {
             from: { x: 0, y: 0, opacity: 0, scale: 0 },
             to: [
                  { x: 0, y: 0, opacity: 1, scale: 1 },
                  { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
             ],
             delay: 31700,
             config: { duration: 500 },
             loop: true,
        };
        switch (value) {
             case 1:
                  setAnim1(obj);
                  break;
             case 2:
                  setAnim2(obj);
                  break;
             case 3:
                  setAnim3(obj);
                  break;
             case 4:
                  setAnim4(obj);
                  break;
             case 5:
                  setAnim5(obj);
                  break;
             case 6:
                  setAnim6(obj);
                  break;
             case 7:
                  setAnim7(obj);
                  break;
             case 8:
                  setAnim8(obj);
                  break;
             default:
                  setAnim9(obj);
        }
   };

 const poppingOutAnimation = (delay) =>
      useSpring({
           from: { x: 0, y: 0, zoom: 0, scale: 0 },
           to: { x: 0, y: 0, zoom: 1, scale: 1 },
           delay: delay,
      });

      const [anim1, setAnim1] = useSpring(() => ({
           from: { x: 0, y: 0, opacity: 0, scale: 0 },
           to: [
                { x: 0, y: 0, opacity: 1, scale: 1 },
                // { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
           ],

           delay: 12000,
           config: { duration: 500 },

           // onRest: () => update3(1),
      }));
      const [anim2, setAnim2] = useSpring(() => ({
           from: { x: 0, y: 0, opacity: 0, scale: 0 },
           to: [
                { x: 0, y: 0, opacity: 1, scale: 1 },
                // { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
           ],
           delay: 3500,
           config: { duration: 500 },

           // onRest: () => update3(2),
      }));
      const [anim3, setAnim3] = useSpring(() => ({
           from: { x: 0, y: 0, opacity: 0, scale: 0 },
           to: [
                { x: 0, y: 0, opacity: 1, scale: 1 },
                // { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
           ],
           delay: 8500,
           config: { duration: 500 },

           // onRest: () => update3(3),
      }));
      const [anim4, setAnim4] = useSpring(() => ({
           from: { x: 0, y: 0, opacity: 0, scale: 0 },
           to: [
                { x: 0, y: 0, opacity: 1, scale: 1 },
                // { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
           ],
           delay: 16000,
           config: { duration: 500 },

           // onRest: () => update3(4),
      }));
      const [anim5, setAnim5] = useSpring(() => ({
           from: { x: 0, y: 0, opacity: 0, scale: 0 },
           to: [
                { x: 0, y: 0, opacity: 1, scale: 1 },
                // { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
           ],
           delay: 6000,
           config: { duration: 500 },

           // onRest: () => update3(5),
      }));
      const [anim6, setAnim6] = useSpring(() => ({
           from: { x: 0, y: 0, opacity: 0, scale: 0 },
           to: [
                { x: 0, y: 0, opacity: 1, scale: 1 },
                // { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
           ],
           delay: 1000,
           config: { duration: 500 },

           // onRest: () => update3(6),
      }));
      const [anim7, setAnim7] = useSpring(() => ({
           from: { x: 0, y: 0, opacity: 0, scale: 0 },
           to: [
                { x: 0, y: 0, opacity: 1, scale: 1 },
                // { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
           ],
           delay: 13000,
           config: { duration: 500 },

           // onRest: () => update3(7),
      }));
      const [anim8, setAnim8] = useSpring(() => ({
           from: { x: 0, y: 0, opacity: 0, scale: 0 },
           to: [
                { x: 0, y: 0, opacity: 1, scale: 1 },
                // { x: 0, y: 0, opacity: 0, scale: 1, delay: 2000 },
           ],
           delay: 10000,
           config: { duration: 500 },

           // onRest: () => update3(8),
      }));

  return (
    <div className="investors-top-main-container">
      <div className="bg-container-for-all">
        <img className="web-img" src={BgImage} />
        <img className="mobile-img" src={BgMobileImage} />
        <div className="inner-content">
          <div className="center-content">
            <h1>Did you know?</h1>
            <p>
              An average person asks between 20 - 30 questions per day. You can
              never go a day without using words like; Why …? Who …? What …?
              When …? Where …? How ….? Could …?{" "}
            </p>
          </div>
          <div className="pill-container">
          <animated.div className="image1 pill1" style={poppingOutAnimation(400)}>
                 <animated.div className="p1" style={{ ...anim1 }}>
                      <TextPillComponent text="Could ?" />
                 </animated.div>

                 <img src={Image1} className="image1" />
            </animated.div>
            <animated.div className="image2 pill2" style={poppingOutAnimation(1600)}>
                 <animated.div className="p2" style={{ ...anim2 }}>
                      <TextPillComponent text="Why ?" />
                 </animated.div>
                 <img src={Image2} className="image2" />
            </animated.div>
            <animated.div className="image3 pill3" style={poppingOutAnimation(1200)}>
                 <animated.div className="p3" style={{ ...anim3 }}>
                      <TextPillComponent text="What ?" />
                 </animated.div>
                 <img src={Image3} className="image3" />
            </animated.div>

            <animated.div className="image4 pill4" style={poppingOutAnimation(2000)}>
                 <animated.div className="p4" style={{ ...anim4 }}>
                      <TextPillComponent textSize={"0.9vw"} text="Who ?" />
                 </animated.div>
                 <img src={Image4} className="image4" />
            </animated.div>
            <animated.div className="image5 pill5" style={poppingOutAnimation(800)}>
                 <animated.div className="p5" style={{ ...anim5 }}>
                      <TextPillComponent text="When ?" />
                 </animated.div>
                 <img src={Image5} className="image5" />
            </animated.div>
            <animated.div className="image6 pill6" style={poppingOutAnimation(400)}>
                 <animated.div className="p6" style={{ ...anim6 }}>
                      <TextPillComponent text="How ?" />
                 </animated.div>
                 <img src={Image6} className="image6" />
            </animated.div>
            <animated.div className="image7 pill7" style={poppingOutAnimation(2300)}>
                 <animated.div className="p7" style={{ ...anim7 }}>
                      <TextPillComponent text="Where ?" />
                 </animated.div>
                 <img src={Image7} className="image7" />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMain;
