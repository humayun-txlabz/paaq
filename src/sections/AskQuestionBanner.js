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
        <div className='earn-money-main' ref={askQuestionReference}>
            <div className='ask-question-left-container'>
                <div className='ask-firstavatar'>
                    <animated.div style={defaultAnimation(1000)} >

                        <div className='ask-firstavatar-question'>
                            <span className='ask-firstavatar-question-detail'>
                                What is difference between
                                company and enterprise?
                            </span>
                        </div>
                    </animated.div>
                    <animated.div style={poppingOutAnimation(300)} >
                        <Image className='earn-money-image' src={Image2} width={82} height={82} />
                    </animated.div>
                </div>
                <div className='ask-secondavatar'>
                    <animated.div style={poppingOutAnimation(1300)} >
                        <Image className='earn-money-image' src={Image1} width={82} height={82} />
                    </animated.div>
                    <animated.div style={defaultAnimation(2000)} >

                        <div className='ask-secondavatar-question'>
                            <span className='ask-secondavatar-question-detail'>
                                A business enterprise can be an
                                entirely person-owned outfit,
                                not covered under corporate
                                governance laws of a nation, and
                                the owner is personally liable.
                            </span>
                        </div>
                    </animated.div>
                </div>
                <animated.div style={defaultAnimation(2500)} >
                    <div className='ask-time-container'>
                        <span style={{ marginLeft: '20%' }}>
                            11:23 AM
                        </span>
                        <animated.div style={{ marginLeft: '10px', marginTop: '4px', ...defaultAnimation(3000) }}>
                            <img style={{ width: '17px', height: '14px', position: 'absolute' }} src={read} alt='message' />
                            <img style={{ width: '17px', height: '14px', position: 'absolute', marginLeft: '5px' }} src={read} alt='message2' />
                        </animated.div>

                        <animated.div style={{ marginLeft: '40px', marginTop: '-6px',...defaultAnimation(3500)  }}>
                            <animated.img style={{ width: '36px', height: '36px',...styles2, }} src={dollar} alt='dollar' />
                        </animated.div>

                    </div>
                </animated.div>
            </div>
            <div className='earn-money-detail'>
                <span className='earn-money-title'>
                    Ask Questions
                </span>
                <span className='earn-money-subheading'>
                    Interacting with anyone is possible by paying a fee to receive a
                    reply to your message or question.
                </span>
                <br></br>
                <span className='earn-money-subheading'>
                    PAAQ is the right platform to direct a message or question to
                    anyone based on the content they posted or based on their
                    area of expertise.
                </span>

            </div>
        </div>
    )
})

export default AskQuestionBanner;