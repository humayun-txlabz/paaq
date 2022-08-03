// import Image from 'next/image';
import { Container, Box, Heading, Button, Image } from 'theme-ui';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderToStaticMarkup } from 'react-dom/server';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
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


function renderMedia(file) {
  if (file.contentType === 'video/mp4') {
    return (
      <div className='embed-responsive embed-responsive-16by9' style={vidStyle}>
        <video controls>
          <source src={file.url} type='video/mp4'/>
          <p>Your browser doesnt support HTML5 video.</p>
        </video>
      </div>
    )
  } else if (file.contentType === 'image/jpeg') {
    {console.log('image is hereeeeee', file)}
    return (<img class="img-fluid" src={file.url} />)
  } else {
    return (<p>Unknown content type</p>)
  }
};

let options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      let file = node.data.target.fields.file
      // I'm using react so it was easier for me to use JSX for what I was doing
      // here your renderMedia function could just return DOM strings and
      // the renderToStaticMarkup function can be ignored (it's react specific)
      let jsx = renderMedia(file)
      let markup = renderToStaticMarkup(jsx)
      return markup
    }
  }
}

let options2 = {
  renderNode: {
    'embedded-asset-block': (node) =>
      `<img class="img-fluid" src="${node.data.target.fields.file.url}"/>`
  }
}
const Text = ({ children }) => <p className="align-center" style={{ fontFamily: 'Sofia-Pro'}}>{children}</p>;
const Bold = ({ children }) => <p className="bold" style={{ fontFamily: 'Sofia-Pro'}} >{children}</p>;

const richTextOptions = {
  // renderMark: {
  //   [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  // },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file.contentType
      const mimeGroup = mimeType.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return <img
            title={ title ? title : null}
            alt={description ?  description : null}
            src={file.url}
          />
        case 'application':
          return <a
            alt={description ?  description : null}
            href={file.url}
            >{ title ? title : file.details.fileName }
          </a>
        default:
          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      }
      
    },

    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    // [BLOCKS.EMBEDDED_ENTRY]: (node) => {
    //   const fields = node.data.target.fields;
    //   switch (node.data.target.sys.contentType.sys.id) {
    //     case 'blockquote':
    //       return <div>
    //         <BlockQuote quoteText={fields.quoteText} quoter={fields.quoter}/>
    //       </div>
    //     default:
    //       return <div>??????????????? {title} </div>

    //   }
    // },
  },
  // renderText: text => text.replace('!', '?'),

}

const MainBlog = (props) => {

  const { posts } = props;

  // console.log(' im in MainBlog-->>', posts.items[0].fields, 'documentToReactComponents====>>', documentToReactComponents(posts.items[0].fields.detail));

  const documentView = () => {
    return documentToReactComponents(posts.items[0].fields.detail)
  }

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
          <div>
            {documentToReactComponents(posts.items[0].fields.detail, richTextOptions)}
          </div>
        </div>
    )
}

export default MainBlog;