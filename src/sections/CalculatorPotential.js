
import React, { useState, useEffect } from 'react'

import Calculate from '../../src/assets/feature/calculate.svg'
const CalculatorPotential = React.forwardRef(function CalculatorPotential(parentRef) {

     return (
          <div className="earn-money-main2" >
               <div className="ask-question-left-container">
               <span className="earn-money-title text_center">Calculate Potential Rewards</span>
                    <span className="earn-money-subheading text_center">
                    Calculate how much you've been wasting by not <br></br>sharing your knowledge.
                    </span>
                    <br></br>
                    <span className="earn-money-subheading btn_center">
                    <div className='calculate' style={{color:'rgba(0, 0, 0, 1)'}}>
                    Calculate
                        </div>
                    </span>
               </div>
               <div className="earn-money-detail imageContainer">
                   <span className='imageDesktop'> <img src={Calculate} alt='calculate image '/></span>
               </div>
          </div>
     );
})

export default CalculatorPotential;