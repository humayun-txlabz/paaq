import React from "react";
import { useSpring, animated } from "react-spring";
import Image1 from '../../assets/Icons/investors/1.png';
import Image2 from '../../assets/Icons/investors/2.png';
import Image3 from '../../assets/Icons/investors/3.png';
import Image4 from '../../assets/Icons/investors/4.png';
import Image5 from '../../assets/Icons/investors/5.png';
import Image6 from '../../assets/Icons/investors/6.png';
import Image7 from '../../assets/Icons/investors/7.png';
import TextPillComponent from './../textPillComp';

const InvestorsTop = () => {

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


  return (
       <div className="investors-page-top">
            <div className="center-content">
                 <h1>Did you know?</h1>
                 <p>
                      An average person asks between 20 - 30 questions per day. You can
                      never go a day without using words like; Why …? Who …? What …? When
                      …? Where …? How ….? Could …?{" "}
                 </p>
            </div>
            <animated.div className="image1 pill1" style={poppingOutAnimation(400)}>
                 <animated.div className="p1" style={poppingOutAnimation(4000)}>
                      <TextPillComponent text="Could ?" />
                 </animated.div>

                 <img src={Image1} className="image1" />
            </animated.div>
            <animated.div className="image2 pill2" style={poppingOutAnimation(1600)}>
                 <animated.div className="p2" style={poppingOutAnimation(6000)}>
                      <TextPillComponent text="Why ?" />
                 </animated.div>
                 <img src={Image2} className="image2" />
            </animated.div>
            <animated.div className="image3 pill3" style={poppingOutAnimation(1200)}>
                 <animated.div className="p3" style={poppingOutAnimation(8000)}>
                      <TextPillComponent text="What ?" />
                 </animated.div>
                 <img src={Image3} className="image3" />
            </animated.div>

            <animated.div className="image4 pill4" style={poppingOutAnimation(2000)}>
                 <animated.div className="p4" style={poppingOutAnimation(10000)}>
                      <TextPillComponent textSize={"0.9vw"} text="Who ?" />
                 </animated.div>
                 <img src={Image4} className="image4" />
            </animated.div>
            <animated.div className="image5 pill5" style={poppingOutAnimation(800)}>
                 <animated.div className="p5" style={poppingOutAnimation(12000)}>
                      <TextPillComponent text="When ?" />
                 </animated.div>
                 <img src={Image5} className="image5" />
            </animated.div>
            <animated.div className="image6 pill6" style={poppingOutAnimation(400)}>
                 <animated.div className="p6" style={poppingOutAnimation(14000)}>
                      <TextPillComponent text="How ?" />
                 </animated.div>
                 <img src={Image6} className="image6" />
            </animated.div>
            <animated.div className="image7 pill7" style={poppingOutAnimation(2300)}>
                 <animated.div className="p7" style={poppingOutAnimation(16000)}>
                      <TextPillComponent text="Where ?" />
                 </animated.div>
                 <img src={Image7} className="image7" />
            </animated.div>
       </div>
  );
};

export default InvestorsTop;
