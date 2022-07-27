import Image from 'next/image';
// import { Slider } from 'theme-ui';
import { Slider, Switch } from 'antd';

const CustomSlider = (props) => {

    const { item, index } = props;
    
    return (
        <div className='skills-banner-slider-container' style={{ alignSelf: index%2 === 0 ? 'flex-start' : 'flex-end'}}>
                <div className='skills-banner-slider-head'>
                    <span className='skills-banner-subheading'>{item.title}</span>
                    <span className='skills-banner-rank'>Skills: {item.defaultValue/10}/10</span>
                </div>
                <div className='skills-banner-slider' style={{ ['--sliderColor']: item.color }}>
                    <Slider defaultValue={item.defaultValue} tooltipVisible={false} />
                </div>
        </div>
    )
}

export default CustomSlider;