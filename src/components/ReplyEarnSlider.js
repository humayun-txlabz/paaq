import React, { useState, useEffect } from 'react';

import img1 from '../assets/replyEarn/img1.png'
import img2 from '../assets/replyEarn/img2.png'
import img3 from '../assets/replyEarn/img3.png'

const ReplyEarnSlider = () => {
    const [images, setImages] = useState([
        img1,
        img2,
        img3,
      ]);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1200); // Change the duration (in milliseconds) as needed
    
        return () => clearInterval(interval);
      }, [currentIndex, images.length]);

      console.log("currentIndex", currentIndex)
    
      return (
        <div className='reply-silder'>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            style={{
              width: currentIndex == 0 ? '101%' : '',
              height: currentIndex == 0 ? '101%' : '',
          }}
          />
        </div>
      );
    };
    

export default ReplyEarnSlider