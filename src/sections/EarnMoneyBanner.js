import ReplyEarnSlider from 'components/ReplyEarnSlider';
import React, {useEffect, useState, useCallback, useRef} from 'react'
import ReactPlayer from 'react-player';
import useIsInViewport from 'use-is-in-viewport'

const EarnMoneyBanner = React.forwardRef(function EarnMoneyBanner(parentRef) {

    const [startAnimtion, setStartAnimation] = useState(false); 

    const [isDivInViewport, earnMoneyReference] = useIsInViewport({
        target: parentRef
    });
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, []);

    useEffect(() => {
        isDivInViewport ? setStartAnimation(true) : null
    }, [isDivInViewport])

    return (
        <div  className='earn-money-main earn-money-main-modify'>
            <div ref={earnMoneyReference}  className='earn-money-image-container'>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <ReplyEarnSlider/>
                </div>
            {/* {domLoaded && (
                <div className='player-wrapper'>
                <ReactPlayer 
                    className='react-player-person'
                    url='gifs/persons2.mov' 
                    width='100%'
                    height='100%'
                    loop={true}
                    playing={true}
                    muted={true}
                />
                </div>
            )} */}
            </div>
            <div className='earn-money-detail'>
                <span className='earn-money-title'>
                    Reply And Earn Rewards
                </span>
                <span className='earn-money-subheading'>
                    Earning money can only be accomplished once you have replied to a paid question.
                </span>
                <br></br>
                <span className='earn-money-subheading'>
                    If you have no knowledge of the paid question, you have the option to answer freely or reject the question. Our community rules prohibit answering without adequate knowledge.
                </span>

            </div>
        </div>
    )
})

export default EarnMoneyBanner;