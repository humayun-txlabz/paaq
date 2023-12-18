// import { Button } from 'antd';
import Image from 'next/image';
// import AppleIcon from '../assets/Icons/Apple.svg';


const ShareKnowledgeSection = () => {
    return (
        <div className='share-knowledge-section'>
            <span className='share-knowledge-text share-knowledge-text-modify' style={{ fontFamily: 'Sofia-Pro'}} >
                Share knowledge
            </span>
            <span className='share-knowledge-text share-knowledge-text-modify'>
                & Earn Money
            </span>
            {/* <div>
            <Button className='button-apple'>
                <Image src={AppleIcon} />
                Apple Store
            </Button>
            </div> */}

        </div>
    )
}

export default ShareKnowledgeSection;