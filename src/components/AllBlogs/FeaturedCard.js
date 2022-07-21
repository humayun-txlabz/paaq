// import Image from 'next/image';
import { Container, Box, Heading, Text, Button, Image } from 'theme-ui';

import DummyImage from "../../assets/Images/FeatureImage.png";
import DummyImage2 from "../../assets/Images/FeatureImage2.png";
import FeaturedTag from "../../assets/Icons/featuredTag.svg";

const FeaturedCard = (props) => {

    const { alignImageRight } = props;

    console.log('FeaturedCard==>', alignImageRight)

    return (
        <div className="featured-card">
            <div className='featured-card-inner' style={{flexDirection: alignImageRight ? 'row-reverse' : 'row'}}>
                <div className='featured-card-image'>
                    <Image src={alignImageRight ? DummyImage2 : DummyImage} className='featured-card-image-inner' 
                    alt="Picture of the phone"
                    // style={{
                    //   width: 484,
                    //   height: 416,
                    // }}
                    // layout='fill'

                    width={484} height={416} 
                    />
                </div>
                <div className='featured-card-content'>
                    <div className='featured-card-category-section'>
                        <span className='featured-card-category'>
                            HEALTH & WELLNESS
                        </span>
                        {/* <Image src={FeaturedTag} /> */}
                    </div>
                    <span className='featured-card-title'>
                        A Revolution Has Been Brewing For Quite Some Time Now. But Now Im Now In Second Line.
                    </span>
                    <span className='featured-card-description'>
                        Its a little description of this blog. And in this blog a Revolution Has Been Brewing For Quite Some Time Now. So Need To Check in to thei that either it goes into the next line or not
                    </span>
                    <div className='featured-card-readmore'>
                        <span className='featured-card-readmore-inner'>
                            R e a d &nbsp;&nbsp; M o r e 
                        </span>
                        <span className='featured-card-readmore-date'>
                            18 Oct 2022
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedCard;