import Image from 'next/image';
import useIsInViewport from 'use-is-in-viewport'
import React, { useState, useEffect } from 'react'
import { animated, useSprings, useSpring, to } from "react-spring";
import Image1 from '../assets/Images/question-image1.png';
import Image2 from '../assets/Images/question-image2.png';
import read from '../assets/message-read.png'
import dollar from '../assets/dollar.png'
import ReactTyped from 'react-typed';


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
               { x: 0, y: 0, opacity: 0 },
               { x: 0, y: 0, opacity: 1, delay: 200 }
          ],
          delay: 3500,
          config: { mass: 10, tension: 280, friction: 120, duration: 2000 },
     })

     const style3 = useSpring({
          from: { opacity: 0 },
          to: { opacity: startAnimtion ? 1 : 0 },
          delay: startAnimtion ? 2000 : 0
     });

     const [showTyped, setShowTyped] = useState(false);
     const [showTypedWrite, setShowTypedWrite] = useState(false);
     const [showTypedSecond, setShowTypedSecond] = useState(false);
     const [showAnswer, setShowAnswer] = useState(false);
     const [showQuestion, setShowQuestion] = useState(false);

     useEffect(() => {
          // After 5 seconds, set showTyped to true
          const timeoutId = setTimeout(() => {
               startAnimtion === true ? setShowTyped(true) : setShowTyped(false)
          }, 2500);

          // Cleanup the timeout to avoid memory leaks
          return () => clearTimeout(timeoutId);
     }, [startAnimtion]);

     useEffect(() => {
          // After 5 seconds, set showTyped to true
          const timeoutId = setTimeout(() => {
               showTypedSecond === true ? setShowTypedWrite(true) : setShowTypedWrite(false)
          }, 1000);

          // Cleanup the timeout to avoid memory leaks
          return () => clearTimeout(timeoutId);
     }, [showTypedSecond]);


     useEffect(() => {
          // After 5 seconds, set showTyped to true
          const timeoutId = setTimeout(() => {
               showTypedSecond === true ? setShowTypedWrite(true) : setShowTypedWrite(false)
          }, 1000);

          // Cleanup the timeout to avoid memory leaks
          return () => clearTimeout(timeoutId);
     }, [showTypedSecond]);

     useEffect(() => {
          // After 5 seconds, set showTyped to true
          const timeoutId = setTimeout(() => {
               showTyped === true ? setShowQuestion(true) : setShowQuestion(false)
          }, 500);

          // Cleanup the timeout to avoid memory leaks
          return () => clearTimeout(timeoutId);
     }, [showTyped]);

     console.log("startAnimtion", startAnimtion)

     useEffect(() => {
          // After 5 seconds, set showTyped to true
          const timeoutId = setTimeout(() => {
               showTypedWrite === true ? showTypedSecond=== true ? setShowAnswer(true) : setShowAnswer(false) : null 
          }, 1000);

          // Cleanup the timeout to avoid memory leaks
          return () => clearTimeout(timeoutId);
     }, [showTypedWrite === true && showTypedSecond=== true]);

     return (
          <div className="earn-money-main2" ref={askQuestionReference}>
               <div className="ask-question-left-container">
                    <div className="ask-firstavatar ask-firstavatar-modify">

                         <animated.div style={defaultAnimation(1000)}>
                              <div className="ask-firstavatar-question" style={{ position: 'relative', width: showTyped === false ? '109px' : '', transition:'0.2s all' }}>
                                   <span className="ask-firstavatar-question-detail">
                                        {/* Mark, my company is based in London, and we are planning to open multiple stores in Paris, where you are located. What factors should we consider since we both work in the same industry? */}
                                        {showTyped === true ? (<ReactTyped
                                             strings={[
                                                  'Mark, my company is based in London, and we are planning to open multiple stores in Paris, where you are located. What factors should we consider since we both work in the same industry?',
                                             ]}
                                             typeSpeed={40}
                                             onComplete={() => {
                                                  setShowTypedSecond(true)
                                             }}
                                             showCursor={false}
                                             className="typed-header"
                                        />) : '...'}
                                   </span>
                                   <div className='question-num' style={{display: showQuestion === true ? '' :  'none', transition:'0.5s all' }}>
                                        <span className='question-num-text'>Question 1 out of 13</span>
                                   </div> 
                              </div>
                         </animated.div>
                         <animated.div className={'ask-secondavatar-img1'} style={poppingOutAnimation(1000)}>
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
                              <div className="ask-secondavatar-question" style={{ position: 'relative', backgroundColor: !showTypedSecond === true ? 'transparent' : '', border: !showTypedSecond === true ? 'none' : '', width: showTypedWrite === true ? '' : showTypedSecond === true ? '120px' : '120px', height: showTypedWrite === true ? '' : showTypedSecond === true ? '65px' : '65px', transition: showTypedSecond === true ?  '1s all' : '0.5s all'}}>
                                   <span className="ask-secondavatar-question-detail">
                                        {showTypedWrite === true ? (<ReactTyped
                                             strings={[
                                                  'Hi Zama, thank you for choosing me to answer your question. Based on my 10 years of experience',
                                             ]}
                                             typeSpeed={40}
                                             className="typed-header"
                                             showCursor={false}
                                        />) : showTypedSecond === true ? <div style={{ display:'flex', justifyContent:'center', padding:'10px 0 0 0'}}> <span>...</span> </div> : ''}
                                   </span>
                                   {showAnswer === true ?   <div className='question-num1' style={{ display: !showTypedSecond === true ? 'none' : 'block', transition: '0.5s all' }}>
                                        <span className='question-num-text1'>Answer 1 out of 13</span>
                                   </div> : null}
                              </div>
                              {/* read icons */}
                              <animated.div style={defaultAnimation(2500)}>
                                   <div style={{ paddingLeft: '3px' }} className="ask-time-container">
                                        {showTypedWrite === true ? showTypedSecond === true ? <span style={{ marginLeft: "0%" }}>11:23 AM</span> : null : null}
                                        <animated.div
                                             style={{
                                                  marginLeft: "10px",
                                                  marginTop: "4px",
                                                  ...defaultAnimation(3000),
                                             }}
                                        >
                                             {showTypedWrite === true ? showTypedSecond === true ? <img
                                                  style={{
                                                       width: "17px",
                                                       height: "14px",
                                                       position: "absolute",
                                                       display: !showTypedSecond === true ? 'none' : ''
                                                  }}
                                                  src={read}
                                                  alt="message"
                                             /> : null : null}

                                             {showTypedWrite === true ? showTypedSecond === true ?
                                                  <img
                                                       style={{
                                                            width: "17px",
                                                            height: "14px",
                                                            position: "absolute",
                                                            marginLeft: "5px",
                                                            display: !showTypedSecond === true ? 'none' : ''
                                                       }}
                                                       src={read}
                                                       alt="message2"
                                                  />
                                                  : null : null}
                                        </animated.div>

                                        <animated.div
                                             style={{
                                                  marginLeft: "30px",
                                                  marginTop: "-6px",
                                                  ...defaultAnimation(7500),
                                             }}
                                        >
                                              {showTypedWrite === true ? showTypedSecond=== true ? 
                                             <animated.img
                                                  style={{
                                                       width: "22px",
                                                       height: "22px",
                                                       ...styles2,
                                                       display: !showTypedSecond === true ? 'none' : ''
                                                  }}
                                                  src={dollar}
                                                  alt="dollar"
                                             />
                                             : null : null}
                                        </animated.div>
                                   </div>
                              </animated.div>
                         </animated.div>
                    </div>
               </div>
               <div className="earn-money-detail">
                    <span className="earn-money-title">Ask Questions</span>
                    <span className="earn-money-subheading">
                    Interacting with anyone is possible by paying a fee to receive an answer your questions.
                    </span>
                    <br></br>
                    <span className="earn-money-subheading">
                    PAAQ has a network of experts in different fields, so you can be sure that there is someone available who can provide you with the best possible answer.
                    </span>
               </div>
          </div>
     );
})

export default AskQuestionBanner;