import Image from 'next/image';
import EarnImage from '../assets/Images/earn.png';
import EarnImage2 from '../assets/Images/earn2.png';
import EarnImage3 from '../assets/Images/earn3.png';
import EarnImage4 from '../assets/Images/earn4.png';
import EarnImage5 from '../assets/Images/earn5.png';

const AskQuestionBanner = () => {


    return (
        <div className='earn-money-main'>
            <div className='ask-question-left-container'>
                <div className='ask-firstavatar'>
                    <div className='ask-firstavatar-question'>
                        <span className='ask-firstavatar-question-detail'>
                            What is difference between 
                            company and enterprise?
                        </span>
                    </div>
                    <div className=''>
                        <Image className='earn-money-image' src={EarnImage3} width={82} height={82}  />
                    </div>  
                </div>
                <div className='ask-secondavatar'>
                    <div className=''>
                        <Image className='earn-money-image' src={EarnImage3} width={82} height={82}  />
                    </div> 
                    <div className='ask-secondavatar-question'>
                        <span className='ask-secondavatar-question-detail'>
                            A business enterprise can be an 
                            entirely person-owned outfit, 
                            not covered under corporate 
                            governance laws of a nation, and 
                            the owner is personally liable.
                        </span>
                    </div>
                </div>
            </div>
            <div className='earn-money-detail'>
                <span className='earn-money-title'>
                    Ask Questions
                </span>
                <span className='earn-money-subheading'>
                    Interacting with anyone is possible by paying a fee to receive a 
                    reply to your message or question.
                </span>
                <br></br>
                <span className='earn-money-subheading'>
                    PAAQ is the right platform to direct a message or question to 
                    anyone based on the content they posted or based on their 
                    area of expertise.
                </span>

            </div>
        </div>
    )
}

export default AskQuestionBanner;