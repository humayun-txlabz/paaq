import React, {useEffect, useState, useCallback, useRef} from 'react'
import Image from 'next/image';
import EarnImage from '../assets/Images/earn.png';
import EarnImage2 from '../assets/Images/earn2.png';
import EarnImage3 from '../assets/Images/earn3.png';
import EarnImage4 from '../assets/Images/earn4.png';
import EarnImage5 from '../assets/Images/earn5.png';
import { animated, useSpring } from "react-spring";
import useIsInViewport from 'use-is-in-viewport'

const EarnMoneyBanner = React.forwardRef(function EarnMoneyBanner(parentRef) {

    const [startAnimtion, setStartAnimation] = useState(false); 

    const [isDivInViewport, earnMoneyReference] = useIsInViewport({
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

    return (
        <div  className='earn-money-main'>
            <div ref={earnMoneyReference}  className='earn-money-image-container'>
                <div className='earn-money-image-upper'>
                    <animated.div style={poppingOutAnimation(500)} className='earn-money-image-upper-left'>
                        <Image className='earn-money-image' src={EarnImage2} width={60} height={60}  />
                    </animated.div>
                    <animated.div style={poppingOutAnimation(1000)} className='earn-money-image-upper-right'>
                        <Image className='earn-money-image' src={EarnImage4} width={64} height={64}  />
                    </animated.div>
                    <div className='earn-money-image-lower-left'>
                        <Image className='earn-money-image' src={EarnImage5} width={73} height={73}  />
                        
                        <div className='earn-money-tag'>
                            <span className='earn-money-name'>
                                Jhon Sakulah
                            </span>
                            <span className='earn-money-category'>
                                Entrepreneur
                            </span>
                        </div> 
                    </div>
                    <animated.div style={defaultAnimation(2000)} className='earn-money-question-container '>
                        <div  className={`earn-money-question ${startAnimtion ? 'animate' : ''}`}>
                            <p style={{marginBottom:'0px'}}>
                            Enterprise Customer means
                            </p>
                            <p style={{marginBottom:'0px'}}>
                            any business, enterprise or
                            </p>
                            <p style={{marginBottom:'0px'}}>
                            public sector customer of
                            </p>
                            <p style={{marginBottom:'0px'}}>
                            the Company or any
                            </p>
                            <p style={{marginBottom:'0px'}}>
                            Company.
                            </p>     
                        </div>
                    </animated.div>
                    <animated.div style={poppingOutAnimation(1500)} className='earn-money-image-lower-right'>
                        <Image className='earn-money-image' src={EarnImage3} width={82} height={82}  />
                    </animated.div>  
                </div>
                
            </div>
            <div className='earn-money-detail'>
                <span className='earn-money-title'>
                    Reply And Earn Money
                </span>
                <span className='earn-money-subheading'>
                    Earning money can only be accomplished once you have replied 
                    to the message/question.
                </span>
                <br></br>
                <span className='earn-money-subheading'>
                    If you do not know the proper response to the message or question, 
                    you have the option to respond for free or reject it. Our community 
                    rules prohibit responding without adequate knowledge.
                </span>

            </div>
        </div>
    )
})

export default EarnMoneyBanner;