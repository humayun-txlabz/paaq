import Image from 'next/image';
import FbIcon from "../../assets/Icons/Facebook.svg";
import InstagramIcon from "../../assets/Icons/instagram.svg";
import LinkedinIcon from "../../assets/Icons/linkedin.svg";
import TwitterIcon from "../../assets/Icons/twitter.svg";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderToStaticMarkup } from 'react-dom/server';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import TitleCard from './TitleCard';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import Clock from '../../assets/Images/clock.png'


const SingleBlogItem = ({blogItem,date}) => {


  // const RichBold = ({ children }) => <p className="bold"  style={{ fontFamily: 'Sofia-Pro'}}>{children}</p>;
console.log('Item__)',blogItem)
  const RichParagraph = ({ children }) => <p className="align-center" style={{ fontFamily: 'Sofia-Pro', fontSize: 18,color:"#4B5157" }}>{children}</p>;

  const Heading1 = ({ children }) => <h1 className="blog-detail-heading1" >{children}
  <TitleCard title={""} />
  </h1>;
  const Heading2 = ({ children }) => <h2 style={{ fontFamily: 'Sofia-Pro' }} >{children}</h2>;
  const Heading3 = ({ children }) => <h3 style={{ fontFamily: 'Sofia-Pro' }} >{children}</h3>;
  const Heading4 = ({ children }) => <h4 style={{ fontFamily: 'Sofia-Pro' }} >{children}</h4>;
  const Heading5 = ({ children }) => <h5 style={{ fontFamily: 'Sofia-Pro' }} >{children}</h5>;
  const Heading6 = ({ children }) => <h6 style={{ fontFamily: 'Sofia-Pro' }} >{children}</h6>;
  const Hr = ({ children }) => <hr style={{ width: '100%' }} />;



  const richTextOptions = {
    renderMark: {
      // [MARKS.BOLD]: text => (
      //     <RichBold>{text}</RichBold>
      // ),
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const mimeType = file.contentType
        const mimeGroup = mimeType.split('/')[0]

        switch (mimeGroup) {
          case 'image':
            return (
              <div>
                <img
                  title={title ? title : null}
                  alt={description ? description : null}
                  width={"100%"}
                  height={'auto'}
                  src={file.url}
                  style={{ borderRadius: 22, objectFit: 'cover', margin: '10px 0px' }}
                />
                {true && <p style={{ fontFamily: 'Sofia-Pro', fontSize: 18, color: "#777",width:'100%',textAlign:'center' }}><img style={{width:'20px',marginBottom:'3px'}} src={Clock}/> {date}</p>}
              </div>
            );
          case 'application':
            return <a
              alt={description ? description : null}
              href={file.url}
            >{title ? title : file.details.fileName}
            </a>
          default:
            return <span style={{ backgroundColor: 'red', color: 'white' }}> {mimeType} embedded asset </span>
        }

      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <RichParagraph>{children}</RichParagraph>
      ),
      [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading5>{children}</Heading5>,
      [BLOCKS.HEADING_6]: (node, children) => <Heading6>{children}</Heading6>,
      [BLOCKS.HR]: (node, children) => <Hr>{children}</Hr>,
    },
    renderText: text => text.replace('!', '!'),
  };

  return (
    <>
      <div className='blog-items' style={{ flexDirection: 'column', flexWrap: 'nowrap', width: '80%', margin: '0 auto', marginTop: 90, marginBottom: "3rem" }}>
        {
          console.log(blogItem,  "blogitem")
          
        }
        {console.log( richTextOptions, "richText")}
        {documentToReactComponents(blogItem, richTextOptions)}
      </div>
       <AppAndPlayStoreFooter />
    </>
  )
}


export default SingleBlogItem;