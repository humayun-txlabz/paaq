import React, { useState, useEffect } from 'react'
import { Slider } from 'antd';
import useIsInViewport from 'use-is-in-viewport'

const CustomSlider = React.forwardRef(function CustomSlider(props, parentRef) {

    const [isDivInViewport, progressBarReference] = useIsInViewport({
        target: parentRef
    })
    const [value, setValue] = useState(0);
    const { item, index } = props;

    useEffect(() => {
        isDivInViewport ? setValue(item.defaultValue) : null
    }, [isDivInViewport])

    return (

        <div ref={progressBarReference} className='skills-banner-slider-container' style={{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
            <div className='skills-banner-slider-container-modify'>
                <div className='skills-banner-slider-container-modify-first-row'>
                    <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4213_11635)">
                            <path d="M14.9605 6.24438C14.8624 5.94063 14.593 5.725 14.2742 5.69625L9.94486 5.30312L8.23299 1.29625C8.10674 1.0025 7.81924 0.8125 7.49986 0.8125C7.18049 0.8125 6.89299 1.0025 6.76674 1.29688L5.05486 5.30312L0.724862 5.69625C0.406737 5.72563 0.137987 5.94063 0.0392374 6.24438C-0.0595126 6.54812 0.0317374 6.88125 0.272362 7.09125L3.54486 9.96125L2.57986 14.2119C2.50924 14.5244 2.63049 14.8475 2.88986 15.035C3.02924 15.1356 3.19236 15.1869 3.35674 15.1869C3.49861 15.1869 3.63924 15.1487 3.76549 15.0731L7.49986 12.8413L11.233 15.0731C11.5061 15.2375 11.8505 15.2225 12.1092 15.035C12.3686 14.8469 12.4899 14.5237 12.4192 14.2119L11.4542 9.96125L14.7267 7.09188C14.9674 6.88125 15.0592 6.54875 14.9605 6.24438Z" fill="#FFC107" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4213_11635">
                                <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </span>
                    <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4213_11635)">
                            <path d="M14.9605 6.24438C14.8624 5.94063 14.593 5.725 14.2742 5.69625L9.94486 5.30312L8.23299 1.29625C8.10674 1.0025 7.81924 0.8125 7.49986 0.8125C7.18049 0.8125 6.89299 1.0025 6.76674 1.29688L5.05486 5.30312L0.724862 5.69625C0.406737 5.72563 0.137987 5.94063 0.0392374 6.24438C-0.0595126 6.54812 0.0317374 6.88125 0.272362 7.09125L3.54486 9.96125L2.57986 14.2119C2.50924 14.5244 2.63049 14.8475 2.88986 15.035C3.02924 15.1356 3.19236 15.1869 3.35674 15.1869C3.49861 15.1869 3.63924 15.1487 3.76549 15.0731L7.49986 12.8413L11.233 15.0731C11.5061 15.2375 11.8505 15.2225 12.1092 15.035C12.3686 14.8469 12.4899 14.5237 12.4192 14.2119L11.4542 9.96125L14.7267 7.09188C14.9674 6.88125 15.0592 6.54875 14.9605 6.24438Z" fill="#FFC107" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4213_11635">
                                <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </span>
                    <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4213_11635)">
                            <path d="M14.9605 6.24438C14.8624 5.94063 14.593 5.725 14.2742 5.69625L9.94486 5.30312L8.23299 1.29625C8.10674 1.0025 7.81924 0.8125 7.49986 0.8125C7.18049 0.8125 6.89299 1.0025 6.76674 1.29688L5.05486 5.30312L0.724862 5.69625C0.406737 5.72563 0.137987 5.94063 0.0392374 6.24438C-0.0595126 6.54812 0.0317374 6.88125 0.272362 7.09125L3.54486 9.96125L2.57986 14.2119C2.50924 14.5244 2.63049 14.8475 2.88986 15.035C3.02924 15.1356 3.19236 15.1869 3.35674 15.1869C3.49861 15.1869 3.63924 15.1487 3.76549 15.0731L7.49986 12.8413L11.233 15.0731C11.5061 15.2375 11.8505 15.2225 12.1092 15.035C12.3686 14.8469 12.4899 14.5237 12.4192 14.2119L11.4542 9.96125L14.7267 7.09188C14.9674 6.88125 15.0592 6.54875 14.9605 6.24438Z" fill="#FFC107" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4213_11635">
                                <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </span>
                    <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4213_11635)">
                            <path d="M14.9605 6.24438C14.8624 5.94063 14.593 5.725 14.2742 5.69625L9.94486 5.30312L8.23299 1.29625C8.10674 1.0025 7.81924 0.8125 7.49986 0.8125C7.18049 0.8125 6.89299 1.0025 6.76674 1.29688L5.05486 5.30312L0.724862 5.69625C0.406737 5.72563 0.137987 5.94063 0.0392374 6.24438C-0.0595126 6.54812 0.0317374 6.88125 0.272362 7.09125L3.54486 9.96125L2.57986 14.2119C2.50924 14.5244 2.63049 14.8475 2.88986 15.035C3.02924 15.1356 3.19236 15.1869 3.35674 15.1869C3.49861 15.1869 3.63924 15.1487 3.76549 15.0731L7.49986 12.8413L11.233 15.0731C11.5061 15.2375 11.8505 15.2225 12.1092 15.035C12.3686 14.8469 12.4899 14.5237 12.4192 14.2119L11.4542 9.96125L14.7267 7.09188C14.9674 6.88125 15.0592 6.54875 14.9605 6.24438Z" fill="#FFC107" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4213_11635">
                                <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </span>
                    <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4213_11635)">
                            <path d="M14.9605 6.24438C14.8624 5.94063 14.593 5.725 14.2742 5.69625L9.94486 5.30312L8.23299 1.29625C8.10674 1.0025 7.81924 0.8125 7.49986 0.8125C7.18049 0.8125 6.89299 1.0025 6.76674 1.29688L5.05486 5.30312L0.724862 5.69625C0.406737 5.72563 0.137987 5.94063 0.0392374 6.24438C-0.0595126 6.54812 0.0317374 6.88125 0.272362 7.09125L3.54486 9.96125L2.57986 14.2119C2.50924 14.5244 2.63049 14.8475 2.88986 15.035C3.02924 15.1356 3.19236 15.1869 3.35674 15.1869C3.49861 15.1869 3.63924 15.1487 3.76549 15.0731L7.49986 12.8413L11.233 15.0731C11.5061 15.2375 11.8505 15.2225 12.1092 15.035C12.3686 14.8469 12.4899 14.5237 12.4192 14.2119L11.4542 9.96125L14.7267 7.09188C14.9674 6.88125 15.0592 6.54875 14.9605 6.24438Z" fill="#FFC107" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4213_11635">
                                <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </span>
                    <span className='skills-banner-slider-container-modify-first-row-text'>{item.defaultValue}</span>
                </div>
                <div className='skills-banner-slider-container-modify-second-row'>
                    <div className='skills-banner-slider-container-modify-second-row-img'>
                        <img src={item?.img} alt="" />
                    </div>
                    <div className='skills-banner-slider-container-modify-second-row-text'>{item?.title}</div>
                </div>
                <div className='skills-banner-slider-container-modify-third-row'>
{item?.des}
                </div>
            </div>
            {/* <div className='skills-banner-slider-head'>
                <span className='skills-banner-subheading'>{item.title}</span>
                <span className='skills-banner-rank'>Skills: {item.defaultValue / 10}/10</span>
            </div>
            <div className='skills-banner-slider' style={{ ['--sliderColor']: item.color,['--delayTime']:index == 0? '0.5s':index == 1?'1.2s':'2.0s' }}>
                <Slider handleStyle={{ transition: '1.5s ease', transitionDelay: index == 0? '0.5s':index == 1?'1.2s':'2.0s' }} value={value} tooltipVisible={false}  />
            </div> */}
        </div>
    )
})

export default CustomSlider;