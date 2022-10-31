import React from 'react'
import RightImage from '../../assets/help-center-1.png';
import SearchIcon from '../../assets/Icons/search-icon.png';
 
const HelpCenterTop = ({isAccountSettings}) => {
  return (
    <div className='grid-container-media-page-top'>
        <div className='left'>
          <div className='aSBreadCrump'>{`Help Centre >`}  <span>Account Settings</span></div>
            <h2>How Can We Help You?</h2>
            <div className='input-with-search-icon'>
              <input placeholder='Search Here...' />
              <div className='searchIcon'>
                <img className='iconImg' src={SearchIcon} />
              </div>
            </div>
        </div>
        <div className='right'>
            <img src={RightImage} />
        </div>
    </div>
  )
}

export default HelpCenterTop