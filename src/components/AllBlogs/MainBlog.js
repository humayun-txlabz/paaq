// import Image from 'next/image';
import { Container, Box, Heading, Text, Button, Image } from 'theme-ui';

import DummyImage from "../../assets/Images/FeatureImage.png";
import DummyImage2 from "../../assets/Images/FeatureImage2.png";
import FeaturedTag from "../../assets/Icons/featuredTag.svg";
import TitleCard from './TitleCard';
import FeaturedCard from './FeaturedCard';
import ItemCard from './ItemCard';
// import TitleCard from 'components/AllBlogs/TitleCard';
// import ItemCard from 'components/AllBlogs/ItemCard';
// import FeaturedCard from 'components/AllBlogs/FeaturedCard';
// import ShareKnowledgeSection from 'components/ShareKnowledgeSection';
import Image1 from '../../assets/Images/blog1.png';
import Image2 from '../../assets/Images/blog2.png';
import Image3 from '../../assets/Images/blog3.png';
import Image4 from '../../assets/Images/blog4.png';
import Image5 from '../../assets/Images/blog5.png';
import Image6 from '../../assets/Images/blog6.png';
import Image7 from '../../assets/Images/blog7.png';
import Image8 from '../../assets/Images/blog8.png';
import Image9 from '../../assets/Images/blog9.png';
import Image10 from '../../assets/Images/blog10.png';
import Image11 from '../../assets/Images/blog13.png';
import Image12 from '../../assets/Images/blog12.png';

const MainBlog = () => {

    const data = [
        {
          blogTitle: '5 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image1,
        },
        {
          blogTitle: '4 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image2,
        },
        {
          blogTitle: '3 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image3,
        },
        {
          blogTitle: '2 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image4,
        },
        {
          blogTitle: '1 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image5,
        },
        {
          blogTitle: '0 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image6,
        }
      ]
    
      const data2 = [
        {
          blogTitle: '5 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image7,
        },
        {
          blogTitle: '4 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image8,
        },
        {
          blogTitle: '3 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image9,
        },
        {
          blogTitle: '2 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image10,
        },
        {
          blogTitle: '1 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image11,
        },
        {
          blogTitle: '0 Simple Money Moves That Will Impact Your Finances in a Big Way',
          blogImage: Image12,
        }
      ]

    return (
        <div className='blog-main'>
          <TitleCard  title={'Our Blogs Simple Money Moves That Will Impact Your Finances in a Big Way'} />
          <FeaturedCard />
          <div className='blog-items'>
            {data.map((item, index) => (
              <ItemCard blog={item} key={index} />
            ))
            }
          </div>
          <FeaturedCard alignImageRight={true} />
          <div className='blog-items'>

            {data2.map((item, index) => (
              <ItemCard blog={item} key={index} />
            ))
            }
          </div>
        </div>
    )
}

export default MainBlog;