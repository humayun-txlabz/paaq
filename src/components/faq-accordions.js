import React from 'react'
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

const FaqAccordion = ({ list }) => {
    return (
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
            {
                list?.map((item) => {
                    return (
                        <AccordionItem style={styles.item}>
                            <AccordionItemHeading>
                                <AccordionItemButton style={styles.accordionItemButton}>
                                    <Text sx={styles.accordionItemButtonText}> {item.heading}</Text>
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
                                <Text sx={styles.accordionPanelText}>{item.panel}</Text>
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
    },
    accordionItemHint: {
        fontWeight: '500',
        fontSize: '2.2em',
        '@media screen and (max-width: 720px)': {
            width: '80%',
            fontSize: '0.79em',
            lineHeight: '30px',
            marginTop:'10px',
        },
        color: '#252F44',
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
            fontSize: '1em',
            lineHeight: '20px',
        },
        fontWeight: '500',
        fontSize: '2.2em',
        color: '#252F44',
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
