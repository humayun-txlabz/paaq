import Image from 'next/image';
import { Badge } from 'theme-ui'
// import { Container, Box, Heading, Text, Button, Image } from 'theme-ui';

// import { Tag } from 'antd';
// import dummyImage2 from "../assets/Images/dummyImage2.jpeg";
// import FeaturedTag from "../assets/Icons/featuredTag.svg";

const ItemCard = (props) => {

    const { blog } = props;

    return (
        <div className='item-card-container'>
            <div className='item-card-container-inner'>

                <div className='item-card-image'>
                    <Image src={blog.blogImage} className='item-card-image-inner' 
                    // style={{
                    //     width: 330,
                    //     height: 233,
                    //   }}
                    //   layout='fill' 
                    width={330} height={233}
                     />
                </div>
                <div className='item-card-tag-outer'>
                    <Badge className='item-card-tag'>Fashion</Badge>
                    <Badge className='item-card-tag'>Health</Badge>
                    <Badge className='item-card-tag'>Business</Badge>
                    {/* <Tag className='item-card-tag'>Fashion</Tag>
                    <Tag className='item-card-tag'>Health</Tag>
                    <Tag className='item-card-tag'>Business</Tag> */}
                </div>
                <div className='item-card-title'>
                    <span className='item-card-title-inner'>
                        {blog.blogTitle}
                    </span>
                </div>
                <div className='item-card-owner'>
                    <span className='item-card-by'>
                        by&nbsp;
                    </span>
                    <span className='item-card-ownername'>
                        Baju Handksk
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;