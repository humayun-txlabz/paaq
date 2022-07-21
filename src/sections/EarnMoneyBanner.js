import Image from 'next/image';
import EarnImage from '../assets/Images/earn.png';
import EarnImage2 from '../assets/Images/earn2.png';
import EarnImage3 from '../assets/Images/earn3.png';
import EarnImage4 from '../assets/Images/earn4.png';
import EarnImage5 from '../assets/Images/earn5.png';

const EarnMoneyBanner = (props) => {


    return (
        <div className='earn-money-main'>
            <div className='earn-money-image-container'>
                <div className='earn-money-image-upper'>
                    <div className='earn-money-image-upper-left'>
                        <Image className='earn-money-image' src={EarnImage2} width={60} height={60}  />
                    </div>
                    <div className='earn-money-image-upper-right'>
                        <Image className='earn-money-image' src={EarnImage4} width={64} height={64}  />
                    </div>
                    <div className='earn-money-image-lower-left'>
                        <Image className='earn-money-image' src={EarnImage5} width={73} height={73}  />
                        
                        <div className='earn-money-tag'>
                            <span className='earn-money-name'>
                                Jhon Sakulah
                            </span>
                            <span className='earn-money-category'>
                                Entrepreneur
                            </span>
                        </div> 
                    </div>
                    <div className='earn-money-question-container'>
                        <span className='earn-money-question'>
                            Enterprise Customer means any business, enterprise or public sector 
                            customer of the Company or any Company.
                        </span>
                    </div>
                    <div className='earn-money-image-lower-right'>
                        <Image className='earn-money-image' src={EarnImage3} width={82} height={82}  />
                    </div>  
                </div>
                
            </div>
            <div className='earn-money-detail'>
                <span className='earn-money-title'>
                    Reply And Earn Money
                </span>
                <span className='earn-money-subheading'>
                    Earning money can only be accomplished once you have replied 
                    to the message/question.
                </span>
                <br></br>
                <span className='earn-money-subheading'>
                    If you do not know the proper response to the message or question, 
                    you have the option to respond for free or reject it. Our community 
                    rules prohibit responding without adequate knowledge.
                </span>

            </div>
        </div>
    )
}

export default EarnMoneyBanner;