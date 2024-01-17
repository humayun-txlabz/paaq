
import React, { useState, useEffect } from 'react'

import Calculate from '../../src/assets/feature/calculate.svg'
const CalculatorPotential = React.forwardRef(function CalculatorPotential(parentRef) {

     return (
          <div className="earn-money-main2" >
               <div className="ask-question-left-container">
               <span className="earn-money-title">Calculate Potential Rewards</span>
                    <span className="earn-money-subheading">
                    Calculate how much you've been wasting by not <br></br>sharing your knowledge.
                    </span>
                    <br></br>
                    <span className="earn-money-subheading">
                    <div className='calculate' style={{color:'rgba(0, 0, 0, 1)'}}>
                    Calculate
                        </div>
                    </span>
               </div>
               <div className="earn-money-detail imageContainer">
                   <img  src={Calculate} alt='calculate image '/>
               </div>
          </div>
     );
})

export default CalculatorPotential;