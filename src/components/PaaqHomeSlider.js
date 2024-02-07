import React, { useState, useEffect } from 'react';

import img1 from '../assets/paaqHomeSlider/Screen 9.png'
import img2 from '../assets/paaqHomeSlider/Screen 8.png'
import img3 from '../assets/paaqHomeSlider/Screen 7.png'
import img4 from '../assets/paaqHomeSlider/Screen 6.png'
import img5 from '../assets/paaqHomeSlider/Screen 5.png'
import img6 from '../assets/paaqHomeSlider/Screen 4.png'
import img7 from '../assets/paaqHomeSlider/Screen 3.png'
import img8 from '../assets/paaqHomeSlider/Screen 2.png'
import img9 from '../assets/paaqHomeSlider/Screen 1.png'

const PaaqHomeSlider = ({width, height}) => {
    const [images, setImages] = useState([
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
      ]);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2300); // Change the duration (in milliseconds) as needed
    
        return () => clearInterval(interval);
      }, [currentIndex, images.length]);

      // console.log("currentIndex", images[currentIndex])
    
      return (
        <div className='paaq-home-silder' style={{width: width, height: height, paddingTop: '-30px', marginBottom: '0px',
        overflow:'hidden'
        }}>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            style={{
              width: '100%',
              height: '100%',
              borderRadius:'30px 30px 0 0',
          }}
          />
        </div>
      );
    };
    

export default PaaqHomeSlider