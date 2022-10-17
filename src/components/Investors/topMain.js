import React from 'react'
import BgImage from '../../assets/webbg.png';
import BgMobileImage from '../../assets/mobilebg.png';

const TopMain = () => {
  return (
    <div className='investors-top-main-container'>
        <div className="bg-container-for-all">
        <img className="web-img" src={BgImage} />
        <img className="mobile-img" src={BgMobileImage} />

        
      </div>
    </div>
  )
}

export default TopMain