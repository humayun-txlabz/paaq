import Image from 'next/image';
import useIsInViewport from 'use-is-in-viewport'
import React, { useState, useEffect } from 'react'
import { animated, useSprings, useSpring, to } from "react-spring";
import Image1 from '../assets/Images/question-image1.png';
import Image2 from '../assets/Images/question-image2.png';
import read from '../assets/message-read.png'
import dollar from '../assets/dollar.png'


const AskQuestionBanner = React.forwardRef(function AskQuestionBanner(parentRef) {

    const [startAnimtion, setStartAnimation] = useState(false);

    const [isDivInViewport, askQuestionReference] = useIsInViewport({
        target: parentRef
    });

    useEffect(() => {
        isDivInViewport ? setStartAnimation(true) : null
    }, [isDivInViewport])

    const poppingOutAnimation = (delay) => useSpring({
        from: { x: 0, y: 0, zoom: 0, scale: 0 },
        to: { x: 0, y: 0, zoom: startAnimtion ? 1 : 0, scale: startAnimtion ? 1 : 0 },
        delay: startAnimtion ? delay : 0
    });

    const defaultAnimation = (delay) => useSpring({
        from: { opacity: 0 },
        to: { opacity: startAnimtion ? 1 : 0 },
        delay: startAnimtion ? delay : 0
    });
    const styles2 = useSpring({     
        from: { x: 0, y: 0, opacity: 1 },
        to: [
            { x: 0, y: -100, opacity: 0 },
            { x: 0, y: 0, opacity:0},
            {x: 0, y: 0, opacity:1,delay:200}
        ],
        delay: 3500,
        config: { mass: 10, tension: 280, friction: 120, duration: 2000 },
      })

    const style3 = useSpring({
        from: { opacity: 0 },
        to: { opacity: startAnimtion ? 1 : 0 },
        delay: startAnimtion ? 2000 : 0
    });

    return (
         <div className="earn-money-main2" ref={askQuestionReference}>
              <div className="ask-question-left-container">
                   <div className="ask-firstavatar">
                   
                        <animated.div style={defaultAnimation(1000)}>
                             <div className="ask-firstavatar-question">
                                  <span className="ask-firstavatar-question-detail">
                                  Mark, my company is based in London, and we are planning to open multiple stores in Paris, where you are located. What factors should we consider since we both work in the same industry?
                                  </span>
                             </div>
                        </animated.div>
                        <animated.div className={'ask-secondavatar-img1'} style={poppingOutAnimation(2000)}>
                             <img
                                  className="earn-money-imageimg1 ask-question-avatar2"
                                  src={Image2}
                             />
                        </animated.div>
                   </div>
                   <div className="ask-secondavatar">
                        <animated.div className={'ask-secondavatar-img'} style={poppingOutAnimation(1300)}>
                             <img
                                  className="earn-money-image ask-question-avatar2"
                                  src={Image1}
                             />
                        </animated.div>
                        <animated.div style={defaultAnimation(2000)}>
                             <div className="ask-secondavatar-question">
                                  <span className="ask-secondavatar-question-detail">
                                       Hi Zama, thank you for choosing me to answer your
                                       question. Based on my 10 years of experience as
                                       a...
                                  </span>
                             </div>
                             {/* read icons */}
                             <animated.div style={defaultAnimation(2500)}>
                                  <div style={{paddingLeft: '3px'}} className="ask-time-container">
                                       <span style={{ marginLeft: "0%" }}>11:23 AM</span>
                                       <animated.div
                                            style={{
                                                 marginLeft: "10px",
                                                 marginTop: "4px",
                                                 ...defaultAnimation(3000),
                                            }}
                                       >
                                            <img
                                                 style={{
                                                      width: "17px",
                                                      height: "14px",
                                                      position: "absolute",
                                                 }}
                                                 src={read}
                                                 alt="message"
                                            />
                                            <img
                                                 style={{
                                                      width: "17px",
                                                      height: "14px",
                                                      position: "absolute",
                                                      marginLeft: "5px",
                                                 }}
                                                 src={read}
                                                 alt="message2"
                                            />
                                       </animated.div>

                                       <animated.div
                                            style={{
                                                 marginLeft: "30px",
                                                 marginTop: "-6px",
                                                 ...defaultAnimation(3500),
                                            }}
                                       >
                                            <animated.img
                                                 style={{
                                                      width: "22px",
                                                      height: "22px",
                                                      ...styles2,
                                                 }}
                                                 src={dollar}
                                                 alt="dollar"
                                            />
                                       </animated.div>
                                  </div>
                             </animated.div>
                        </animated.div>
                   </div>
              </div>
              <div className="earn-money-detail">
                   <span className="earn-money-title">Ask Questions</span>
                   <span className="earn-money-subheading">
                        Interacting with anyone is possible by paying a fee to receive a
                        reply to your message or question.
                   </span>
                   <br></br>
                   <span className="earn-money-subheading">
                        PAAQ is the right platform to direct a message or question to
                        anyone based on the content they posted or based on their area of
                        expertise.
                   </span>
              </div>
         </div>
    );
})

export default AskQuestionBanner;