import React, { useState, useEffect } from 'react';

import img1 from '../assets/replyEarn/img11.png'
import img2 from '../assets/replyEarn/img22.png'
import img3 from '../assets/replyEarn/img33.png'

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
        }, 3000); // Change the duration (in milliseconds) as needed
    
        return () => clearInterval(interval);
      }, [currentIndex, images.length]);

      // console.log("currentIndex", currentIndex)
    
      return (
        <div className='reply-silder bg-shadow-img' data-index={currentIndex+1}>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          //   style={{
          //     width: currentIndex == 0 ? '110%' : '100%',
          //     height: currentIndex == 0 ? '110%' : '100%',
          // }}
          />
        </div>
      );
    };
    

export default ReplyEarnSlider