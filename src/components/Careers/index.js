import { Image } from "theme-ui";

import CareersImage1 from "assets/careers/careers-main.png";
import CareersImage2 from "assets/careers/careers-main1.png";
import CareersImage3 from "assets/careers/careers-main2.png";
import CareersImage4 from "assets/careers/careers-main3.png";
import CareersImage5 from "assets/careers/careers-left.png";
import CareersImage6 from "assets/careers/careers-right.png";
import CareerMain from "components/Career";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import CareersTopMain from "./top";

const CareersMain = () => {

    return (
        <>
        <CareersTopMain />
        {/* <div className="background-image-main" style={{ display: 'flex' }}>
            <div className="careers-left-section">
                <span className="careers-title">
                    Who We Are
                </span>
                <span className="careers-description">
                    At PAAQ, we strive to make people's lives easier by providing easy access to expert’s
                    tailor-made knowledge that would otherwise be unavailable.
                </span>
                <span className="careers-description-new">
                    Everyone is capable of achieving their goals if only they have the right expert to guide
                    them. In this way, PAAQ contributes to human progress.
                </span>
            </div>
            <div className="careers-right-section">
                <div >
                    <Image className="careers-right-bg" src={CareersImage1} width={600} height={600} />
                </div>
                <div style={{opacity: 0,animation: 'bounceIn2 2s forwards 1s'}} className="careers-image2">
                    <Image className="careers-right-bg careers-right-bgg" src={CareersImage2} width={82} height={82} />
                </div>
                <div style={{opacity: 0,animation: 'bounceIn2 2s forwards 1s'}} className="careers-image3">
                    <Image className="careers-right-bg careers-right-bgg" src={CareersImage3} width={62} height={62} />
                </div>
                <div style={{opacity: 0,animation: 'bounceIn2 2s forwards 1s'}} className="careers-image4">
                    <Image className="careers-right-bg careers-right-bgg" src={CareersImage4} width={82} height={82} />
                </div>
                <div className="careers-image5" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Image className="careers-right-bg" src={CareersImage5} width={125} height={42} />
                    <div style={{position: 'absolute', zIndex: 10000, width: '90%'}}>
                        <Skeleton count={2} borderRadius={'2rem'} />
                    </div>
                </div>
                <div className="careers-image6" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Image className="careers-right-bg" src={CareersImage6} width={165} height={56} />
                    <div style={{position: 'absolute', zIndex: 10000, width: '80%'}}>
                        <Skeleton count={2} borderRadius={'2rem'} />
                    </div>
                </div>
                <div className="careers-image7" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Image className="careers-right-bg" src={CareersImage5} width={165} height={56} />
                    <div style={{position: 'absolute', zIndex: 10000, width: '80%'}}>
                        <Skeleton count={2} borderRadius={'2rem'} />
                    </div>
                </div>
            </div>
        </div> */}
        <CareerMain />
        </>
    );
}

export default CareersMain;