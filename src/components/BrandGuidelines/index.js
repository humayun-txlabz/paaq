import React from 'react';
import { Image } from 'theme-ui';

import HeaderImage from 'assets/brandguide-imagebg.png';

const BrandGuidelinesMain = () => {

    return (
        <div className='brand-guidelines-main'>
            <div className='brand-guidelines-main-left'>
                <p className='brand-guidelines-main-heading'>
                    Brand Guildelines
                </p>
                <p className='brand-guidelines-main-description'>
                    In this guide, we've provided the do’s and don'ts of using PAAQ's brand elements. 
                    This includes our Question-mark and acronym.
                </p>
                <div className='brand-guidelines-main-buttons'>
                    <div className='brand-guidelines-main-download'>
                        Download Guildlines
                    </div>
                    <div className='brand-guidelines-main-downloadlogo'>
                        Download Logo
                    </div>
                </div>
            </div>
            <div className='brand-guidelines-main-right'>
                <Image src={HeaderImage} />
            </div>
        </div>
    );
}

export default BrandGuidelinesMain;