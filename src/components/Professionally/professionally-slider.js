import React, { useEffect, useState } from 'react'

// react-slick files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// png img 
import img1 from '../../assets/professionally/img1.png'
import img2 from '../../assets/professionally/img2.png'
import img3 from '../../assets/professionally/img3.png'
import img4 from '../../assets/professionally/img4.png'
import img5 from '../../assets/professionally/img5.png'
import img6 from '../../assets/professionally/img6.png'



let settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  customPaging: function (i) {
    return (
      <div className='custom-dot'
        style={{
          width: '12px ',
          height: '12px ',
          fontSize: '9px',
          lineHeight: '20px',
          textAlign: 'center',
          opacity: '.25',
          color: 'transparent',
          borderRadius:'12px',
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
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 826,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
};

const sliderData = [{
  id: 0,
  name: 'Paulina Wehmeyer',
  des: 'President of Paulmeyer Global Holdings',
  img: img1,
  btnText: 'Why...?',
  btnColor: '#4EAD66',
  backgroundColor:'radial-gradient(circle, #4ead6649, rgba(255, 255, 255, 0.80)), rgba(255, 255, 255, 0.80)',
},
{
  id: 1,
  name: 'Jared Shippel',
  des: 'Head of operations at Google',
  img: img2,
  btnText: 'Could...?',
  btnColor: '#DC9A00',
  backgroundColor:'radial-gradient(circle, #eba5034f, rgba(255, 255, 255, 0.80)), rgba(255, 255, 255, 0.80)',
},
{
  id: 2,
  name: 'Leila Carmen',
  des: 'Founder & CEO of Apex Modelling International Agency ',
  img: img3,
  btnText: 'When...?',
  btnColor: '#000000',
  backgroundColor:'radial-gradient(circle, #0000003e, rgba(255, 255, 255, 0.80)), rgba(255, 255, 255, 0.80)',
},
{
  id: 3,
  name: 'Fisayo Adeyiga ',
  des: 'Founder & CEO of MuchMore Global Holdings',
  img: img4,
  btnText: 'What...?',
  btnColor: '#00B5B4',
  backgroundColor:'radial-gradient(circle, #00b5b53f, rgba(255, 255, 255, 0.441)), rgba(255, 255, 255, 0.107)',
},
{
  id: 4,
  name: 'Louise Mandla',
  des: 'Multi-Award winning Actor',
  img: img5,
  btnText: 'How...?',
  btnColor: '#EF3C5E',
  backgroundColor:'radial-gradient(circle, #ef3c5d60, rgba(255, 255, 255, 0.441)), rgba(255, 255, 255, 0.107)',
},
{
  id: 5,
  name: 'Mariam Gomez Snr.',
  des: 'Direct of Marketing at Flavour Neighbour',
  img: img6,
  btnText: 'Would...?',
  btnColor: '#1490CB',
  backgroundColor:'radial-gradient(circle, #1491cb4e, rgba(255, 255, 255, 0.441)), rgba(255, 255, 255, 0.107)',
},
]

const ProfessionallySlider = () => {
  const [hideState, setHideState] = useState(false)

  useEffect(()=>{
setTimeout(() => {
  setHideState(true)
}, 10000);
  },[])

  return (
    <div >
      <Slider {...settings}>
        {sliderData.map((element, index) => {
          return (
            <div className={`silder-div`}>
              <div className={`silder-div-inner ${index === sliderData.length-1 && hideState == false ? 'hide-class' : ''}`} style={{ background: element?.backgroundColor, }}>
                <div className='silder-div-img'>
                  <img src={element?.img} alt="Slider Image" />
                </div>
                <p className='silder-div-text1'>{element?.name}</p>
                <p className='silder-div-text2'>{element?.des}</p>
                <button className='silder-div-btn' style={{ backgroundColor: element?.btnColor }}>
                  {element?.btnText}
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  )
}

export default ProfessionallySlider