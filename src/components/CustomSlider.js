
import React, {  useState, useLayoutEffect, useEffect } from 'react'
// import { Slider } from 'theme-ui';
import { Slider, Switch } from 'antd';
import useIsInViewport from 'use-is-in-viewport'

const CustomSlider = React.forwardRef(function CustomSlider(props, parentRef){
    const [isDivInViewport, progressBarReference] = useIsInViewport({
        target: parentRef
      })
    const [value, setValue] = useState(0);
    const { item, index } = props;
    
    useEffect(()=>{
        isDivInViewport ?  setValue(item.defaultValue)  : null
    },[isDivInViewport])
    
   
    return (
       
        <div ref={progressBarReference}  className='skills-banner-slider-container' style={{ alignSelf: index%2 === 0 ? 'flex-start' : 'flex-end'}}>
                <div className='skills-banner-slider-head'>
                    <span className='skills-banner-subheading'>{item.title}</span>
                    <span className='skills-banner-rank'>Skills: {item.defaultValue/10}/10</span>
                </div>
                <div className='skills-banner-slider' style={{ ['--sliderColor']: item.color }}>
                    <Slider defaultValue={item.defaultValue} tooltipVisible={false} />
                </div>
        </div>
    )
})

export default CustomSlider;