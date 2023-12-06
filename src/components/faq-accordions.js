import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import arrow from 'assets/accordion-close.png';
import arrow2 from 'assets/accordion-open.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import { Text, Image, Container } from 'theme-ui';
import DocumentIcon from '../assets/Icons/doc-icon.svg';
import FeedbackCard from './FeedbackCard';

const FaqAccordion = ({ list }) => {
    const RichBold = ({ children }) => <p className="bold"  style={{ fontFamily: 'Sofia-Pro'}}>{children}</p>;
  
    const RichParagraph = ({ children }) => <p className="align-center rich-paragraph">{children}</p>;
    const Heading1 = ({ children }) => <h1 className="align-center" style={{ fontFamily: 'Sofia-Pro'}}>{children}</h1>;

    const richTextOptions = {
        renderMark: {
          [MARKS.BOLD]: text => (
              <RichBold>{text}</RichBold>
          ),
        },
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
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <RichParagraph>{children}</RichParagraph>
          ),
          [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
        },
        renderText: text => text.replace('!', '?'),
      };
    return (
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
            {
                list?.map((item) => {
                    return (
                        <AccordionItem style={styles.item}>
                            <AccordionItemHeading>
                                <AccordionItemButton style={styles.accordionItemButton}>
                                    <Image style={{marginRight: '5%'}} src={DocumentIcon} />
                                    <Text sx={styles.accordionItemButtonText}> {item.fields.question}</Text>
                                    <AccordionItemState >
                                        {({ expanded }) => (expanded ?
                                            <Container sx={styles.stateAccordion}>
                                                <Image sx={styles.accordionItemButtonIcon} src={arrow2} />
                                            </Container>
                                            :
                                            <Container sx={styles.stateAccordion}>
                                                <Image sx={styles.accordionItemButtonIcon} src={arrow} />
                                            </Container>
                                        )}
                                    </AccordionItemState>

                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='admin-item-panel'>
                                    {documentToReactComponents(item.fields.answer, richTextOptions)}
                                </div>
                                {/* <Text sx={styles.accordionPanelText}>{item.fields.answers}</Text> */}
                                <FeedbackCard />
                                {item.hints ?
                                    <Container>
                                        <Text sx={styles.accordionItemHint}>Hints:</Text>
                                        <Text sx={styles.accordionPanelText}>{item.hints}</Text>
                                    </Container>
                                    :
                                    <></>
                                }
                                {item.authentic ?
                                    <Container>
                                        <Text sx={styles.accordionItemHint}>Authentic:</Text>
                                        <Text sx={styles.accordionPanelText}>{item.authentic}</Text>
                                    </Container>
                                    :
                                    <></>
                                }
                                 {item.notable ?
                                    <Container>
                                        <Text sx={styles.accordionItemHint}>Notable:</Text>
                                        <Text sx={styles.accordionPanelText}>{item.notable}</Text>
                                    </Container>
                                    :
                                    <></>
                                }
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                    
                })
            }
        </Accordion>
    )
}

const styles = {
    accordionItemButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
    },
    accordionItemHint: {
        fontWeight: '500',
        fontSize: '2.2em',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            width: '80%',
            fontSize: '0.79em',
            lineHeight: '30px',
            marginTop:'10px',
        },
        color: '#1e1e1e',
        display: 'flex',
        flexDirection: 'row',
        lineHeight: '50px',
        width: '100%',
        marginTop:'30px',
        textTransform: 'capitalize'
    },
    accordionItemButtonText: {
        width: '70%',
        '@media screen and (max-width: 720px)': {
            width: '80%',
            fontSize: '18px',
            lineHeight: '30px',
        },
        fontWeight: '500',
        fontSize: '40px',
        fontFamily: 'Sofia-Pro',
        color: '#1e1e1e',
        lineHeight: '50px',
        textTransform: 'capitalize'

    },
    accordionItemButtonIcon: {
        height: '15px',
        width: '25px',
        display: 'flex',
        marginTop: '5px',
        '@media screen and (max-width: 720px)': {
            marginTop: '2px',
            height: '15px',
            width: '25px',
        },
    },
    accordionPanelText: {
        fontWeight: '400',
        fontSize: '1.2em',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize: '0.76em',
            lineHeight: '20px',
            marginTop: '10px',
        },
        lineHeight: '36px',
        marginTop: '30px',
        color: '#4B5157',
        width: '90%',
        whiteSpace: 'pre-wrap'

    },
    stateAccordion: {
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    item: {
    
        '@media screen and (max-width: 720px)': {
            marginTop: '20px',
        },
        marginTop: '80px',
    }
};

export default FaqAccordion
