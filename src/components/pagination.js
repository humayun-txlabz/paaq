import React from 'react'
import leftArrow from '../assets/Icons/left-arrow-black.png';
import rightArrow from '../assets/Icons/right-arrow-white.png';
const PaginationComponent = () => {
  return (
       <div className="pagination-wih-left-right">
            <div className="pagination-left">
                 <img src={leftArrow} />
            </div>
            <div className="digit">1</div>
            <div className="digit">2</div>
            <div className="digit active">3</div>
            <div className="pagination-right">
                 <img src={rightArrow} />
            </div>
       </div>
  );
}

export default PaginationComponent