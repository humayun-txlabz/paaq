import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';

const SingleCategoryHelpCenter = (props) => {
  const { fields, id } = props;

    const RichParagraph = ({ children }) => <p className="rich-text-helpcenter" >{children}</p>;

    const Heading1 = ({ children }) => <h1 className="blog-detail-heading1" >{children}</h1>;
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
              return <img
                title={title ? title : null}
                alt={description ? description : null}
                width={"100%"}
                height={'auto'}
                src={file.url}
                style={{ borderRadius: 22, objectFit: 'cover', margin: '40px 0px' }}
              />
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
      renderText: text => text.replace('!', '?'),
    };

    useEffect(() => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
 }, []);

 console.log("firstasdasd", fields)

 const router = useRouter();

  // Extract the 'id' parameter from the query object
  const { iddd } = router.query

  console.log("router.query",router?.query?.id?.slice(0,1))

  return (
      <div>
      
      <div className='background-image-hc'>
          <span className='background-image-hc-title'>
            <Link href={'/helpCenter'}>
              <span className='background-image-hc-nav'>
                {'Help Center > '}
              </span>
            </Link>
            {fields['0']?.fields?.title} {'>'} {fields[router?.query?.id === '2lpVATuhy2Z7ay96He1LDw' ? '0':
          router?.query?.id === '2VxNT6rcKefXuxU8Z8QQdb' ? '1' : 
          router?.query?.id === "6FFHACoJjyqFii6bY1NzTI" ? '2' : 
          router?.query?.id === "5YHhTPQHL3MiPUD8ddn1qa" ? '3' : 
          router?.query?.id === "3Hg6KaX5hpvOuP8Cctxp4b" ? '4' : 
          router?.query?.id === "5HS8yZDr7pf9ZNlz5g73lV" ? '5' : 
          router?.query?.id === "3mV9LgLKoPEVUO5cnLq3Za" ? '6' : 
          router?.query?.id === "38KHu3qKwuK1HipqL3OFlK" ? '7' : 
          '0'
          ]?.fields?.question}
          </span>
      </div>
      <div className='single-hc'>
          { fields ? Object.keys(fields).map((keys)=>(
              <>
              
              <p className='single-hc-question' id={fields[keys]?.sys?.id}>
                  {fields[keys]?.fields?.question}
              </p>
              <div>
                {documentToReactComponents(fields[keys]?.fields?.answer, richTextOptions)}
              </div>
              
              </>
           )) : null}

      </div>
      </div>
    //   <>
    //   <Image src={BackgroundImage} className="background-image-faq" />
      
    //   </>

    // <div style={mTop} className='help-center-faq-single-card'>
    //     <h1>Safety & Security</h1>
    //     {
    //       items ?
    //       items.map((value) => (
    //         <SinlgeFaqItem text={titleCase(value.question)} />

    //       )) :  null 
    //     }
    //     {/* <SinlgeFaqItem text={titleCase('How to block a user')} />
    //     <SinlgeFaqItem text={titleCase('How to report a user')} />
    //     <SinlgeFaqItem text={titleCase('How to unfollow a user')} />
    //     <SinlgeFaqItem text={'Status (Available/Unavailable)'} />
    //     <SinlgeFaqItem text={'Two-Factor Authentication'} /> */}
    //     {/* <div className='h-line' /> */}
    // </div>
  )
}

export default SingleCategoryHelpCenter;