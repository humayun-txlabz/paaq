import React, { useEffect, useState } from 'react'

// react-slick files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// png img 
import img1 from '../assets/socially/img1.png'
import img2 from '../assets/socially/img2.png'
import img3 from '../assets/socially/img3.png'
import img4 from '../assets/socially/img4.png'
import img5 from '../assets/socially/img5.png'
import img6 from '../assets/socially/img6.png'
import img7 from '../assets/socially/img7.png'
import img8 from '../assets/socially/img8.png'
import img9 from '../assets/socially/img9.png'
import img10 from '../assets/socially/img10.png'
import img11 from '../assets/socially/img11.png'
import img12 from '../assets/socially/img12.png'
import img13 from '../assets/socially/img13.png'
import img14 from '../assets/socially/img14.png'

let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1.3,
    slidesToScroll: 2,
    autoplay: true,
    customPaging: function (i) {
        return (
            <div className='custom-dot'
                style={{
                    width: '12px ',
                    height: '12px !important',
                    fontSize: '9px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    opacity: '.25',
                    color: 'transparent',
                    borderRadius: '12px',
                    backgroundColor: sliderData[i].btnColor,
                }}
            >
                •
            </div>
        );
    },
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 826,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 580,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const sliderData = [{
    id: 0,
    img: img1,
},
{
    id: 1,
    img: img2,
},
{
    id: 2,
    img: img3,
},
{
    id: 3,
    img: img4,
},
{
    id: 4,
    img: img5,
},
{
    id: 5,
    img: img6,
},
{
    id: 6,
    img: img7,
},
{
    id: 7,
    img: img8,
},
{
    id: 8,
    img: img9,
},
{
    id: 9,
    img: img10,
},
{
    id: 10,
    img: img11,
},
{
    id: 11,
    img: img12,
},
{
    id: 12,
    img: img13,
},
{
    id: 13,
    img: img14,
},
]

const SociallySlider = () => {
    const [hideState, setHideState] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setHideState(true)
    //     }, 10000);
    // }, [])

    return (
        <div className=''>
            <Slider {...settings}>
                {sliderData.map((element, index) => {
                    return (
                        <div className={`silder-div-modify`}>
                            <div className='socially-slider-img' >
                                <img src={element?.img} alt="" style={{objectFit:'contain'}}/>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}

export default SociallySlider