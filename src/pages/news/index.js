import React, {useState, useEffect} from 'react';
import { ThemeProvider, Link } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { Container, Text, Image, Input, Button } from 'theme-ui';
import AppAndPlayStoreFooter from 'components/appAndPlayStoreFooter';
import NewsSection from 'sections/newsSection';
import { newsSectionObjects } from 'constants/newsSectionObjects';
import arrow from 'assets/page1.png'
import arrow2 from 'assets/page2.png'
import image1 from 'assets/news/6.png'
import arrow3 from 'assets/upRightArrow.png'
import collage1 from 'assets/news/7.png'
import collage2 from 'assets/news/8.png'
import collage3 from 'assets/news/9.png'
import collage4 from 'assets/news/10.png'

import * as contentful from 'contentful';
import { StickyProvider } from '../../contexts/app/app.provider';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  // host: "preview.contentful.com"
});

export async function getStaticProps (){

    const news = await client.getEntries({
        content_type: 'news',
        skip: 0,
        
      })
      .then((response) => {
        return response;
      })
      .catch(console.error)

    return {
      props: {
        ...news
      }
    }
  };

export default function News2(props) {
    const {items} = props;
    const [active, setActive] = useState(1)
    const pages = []
    let count = (props.items.length / 5)+1;
    for( let i=1 ; i <= count ; i++){
         pages.push({
             id:i
         })
    }
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(5)
     
    const increase = () =>{
        setActive(active+1)
        setMin(min+5)
        setMax(max+5)
        window.scrollTo(0, 0)
    }
    const decrease = () =>{
        setActive(active-1)
        setMin(min-5)
        setMax(max-5)
        window.scrollTo(0, 0)
    }

    const setDirectWithPage = (id) =>{
         setActive(id)
         setMin((id-1)*5)
         setMax(((id-1)*5)+5)
         window.scrollTo(0, 0)
    }

    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landing 007" />
                    <Container sx={styles.mainContainer}>
                        <Container sx={styles.headingContainer}>
                            <NewsSection list={items.slice(min,max)} />
                        </Container>
                        <Container className='parent' sx={styles.paginations}>
                            <div onClick={()=> {
                            active > 1 ? decrease():null
                            }
                        } 
                        style={styles.circle}>
                                <img   style={styles.arrow} src={arrow} />
                            </div>
                            {
                                pages.map((item) => {
                                    return (
                                        <div onClick={()=>setDirectWithPage(item.id)} style={item.id == active ? styles.circle3 : styles.circle2}>
                                            <Text>{item.id}</Text>
                                        </div>
                                      
                                    )
                                })
                            }
                            <div onClick={()=> {
                                (active < pages.length )?
                                    increase()
                                :null

                            }
                            }
                                 style={styles.circle}>
                                <img  style={styles.arrow} src={arrow2} />
                            </div>
                        </Container>
                        <Container sx={styles.section} >
                            <Container sx={styles.imageContainer}>
                                <Image sx={styles.image} src={image1} />
                            </Container>
                            <Container sx={styles.textContainer}>
                                <Text sx={styles.title}>How It Works</Text>
                                <Text sx={styles.detail}>
                                    {
                                        `Interacting with anyone is possible by paying a fee to receive a reply to your message or question.

PAAQ is the right platform to direct a message or question to anyone based on the content they posted or based on their area of expertise.                                 
                                   `
                                    }
                                </Text>
                                <Container sx={styles.publishContainer}>
                                    <Text sx={styles.readmore}>Read More</Text>
                                    <Image src={arrow3} sx={styles.upArrow} />
                                </Container>
                            </Container>

                        </Container>
                        <Container sx={styles.section2} >
                            <Container sx={styles.textContainer}>
                                <Text sx={styles.collageSectionHeading}>Subscribe Our Newsletter For more Update</Text>
                                <Container sx={styles.textFieldContainer}>
                                    <Input sx={styles.textField} placeholder='Email Address' />
                                    <Button sx={styles.buttonSubscribe}  aria-label="Subscribe Now">
                                        Subscribe Now
                                    </Button>
                                </Container>
                            </Container>
                            <Container sx={styles.collageContainer}>
                                <Container sx={styles.row2Collage}>
                                    <Image src={collage1} sx={styles.collageImage} />
                                    <Image src={collage2} sx={styles.collageImage} />
                                </Container>
                                <Container sx={styles.row1Collage}>
                                    <Image src={collage3} sx={styles.collageImage} />
                                    <Image src={collage4} sx={styles.collageImage} />
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                    <AppAndPlayStoreFooter />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    mainContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        paddingTop: '100px',
        '@media screen and (max-width: 720px)': {
            paddingTop: '50px',
            '.parent':{
                'div:nth-child(6)':{
                    display:'none'
                }
            }
        },
        justifyContent: 'center',
        flexDirection: 'column',
        
    },
    title: {
        fontSize: '70px',
        fontWeight: '600',
        '@media screen and (max-width: 720px)': {
            fontSize: '50px',
        },
        color: '#252F44',
        fontFamily: 'Sofia-Pro',
        textTransform: 'capitalize',
        lineHeight: '70px',
    },
    detail: {
        fontSize: '19px',
        '@media screen and (max-width: 720px)': {
            fontSize: '15px',
            marginTop: '0px'
        },
        fontWeight: '400',
        fontFamily: 'Sofia-Pro',
        color: '#6D6D6D',
        lineHeight: '28px',
        whiteSpace: 'pre-wrap',
        marginTop: '20px'
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        '@media screen and (max-width: 720px)': {
            width: '90%',
        },
        alignItems: 'center',
        justifyContent: 'center',
    },
    paginations: {
        width: "40%",
        '@media screen and (max-width: 720px)': {
            width: '90%',
            gap: '0px',
        },
        justifyContent:'center',
        height: '50px',
        marginTop: '90px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
    },
    circle: {
        width: '60px',
        height: '60px',
        '@media screen and (max-width: 720px)': {
            width: '65px',
        },
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#000000',
        borderRadius: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle2: {
        width: '60px',
        height: '60px',
        borderRadius: '30px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    circle3: {
        width: '60px',
        height: '60px',
        '@media screen and (max-width: 720px)': {
            width: '65px',  
        },
        borderRadius: '30px',
        backgroundColor: '#00B5B4',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
    },
    arrow: {
        height: '12px',
        width: '22px'
    },
    image: {
        height: '438px',
        objectFit:'cover',
        '@media screen and (max-width: 720px)': {
            height: '347px',
            marginTop:'30px'
        },
        width: '100%'
    },
    imageContainer: {
        width: '45%',
        '@media screen and (max-width: 720px)': {
            width: '100%',
        },
    },
    section: {
        width: '80%',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column-reverse',
            width: '90%',
            gap: '0px',
            marginTop: '10px',
        },
        marginTop: '80px',
        alignItems: 'center',
        gap: '80px',
    },
    section2: {
        width: '80%',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column',
            width: '90%',
            gap: '0px',
            marginTop: '10px',
            
        },
        marginTop: '80px',
        alignItems: 'center',
        gap: '80px',
    },
    publishContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'center',

    },
    textContainer: {
        width: '55%',
        '@media screen and (max-width: 720px)': {
            width: '100%',
        },
        display: 'flex',
        gap: '20px',
        marginTop: '85px',
        flexDirection: 'column',

    },
    readmore: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#000000',
        lineHeight: '12px',
        fontFamily: 'Sofia-Pro',
    },
    upArrow: {

        height: '12px',
        width: '12px'

    },
    collageContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '45%',
        '@media screen and (max-width: 720px)': {
            width: '100%',
            marginTop:'100px'
        },
    },
    row1Collage: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
    },
    row2Collage: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
    },
    collageImage: {
        height: '240px',
        width: '280px',
        borderRadius: '14px',
        '@media screen and (max-width: 720px)': {
            height: '160px',
        },
       objectFit:'cover'
    },
    collageSectionHeading: {
        fontWeight: '600',
        fontSize: '70px',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
           fontSize:'30px',
           lineHeight: '35px',
           textAlign:'center'
        },
        lineHeight: '70px',
        color: ' #252F44'
    },
    textFieldContainer: {
        width: '80%',
        marginLeft: 0,
        height: '70px',
        '@media screen and (max-width: 720px)': {
            height: '60px',
            width: '100%',
            justifyContent: 'center',
        },
        borderRadius: '50px',
        marginTop: 20,
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#E0E0E0',
        boxShadow: '30px 34px 84px rgba(0, 0, 0, 0.09)',
        

    },
    textField: {
        marginLeft: 30,
        width: "65%",
        '@media screen and (max-width: 720px)': {
            width: "45%",
        },
        height: '60px',
        borderWidth: '0px',
        border: 'none',
        outline: 'none'
    },
    buttonSubscribe: {
        borderRadius: 40,
        width: '35%',
        marginRight:'10px',
        height: '50px',
        '@media screen and (max-width: 720px)': {
            position:'absolute',
            width: '40%',
            marginTop:'150px',
            height: '50px',
        },
        fontSize: "16px",
        fontFamily: 'Sofia-Pro',
        flexShrink: 0,
        backgroundColor: '#00B5B4',
        boxShadow: '5px 10px 44px rgba(0, 181, 180, 0.35)',
        borderColor: null,
        color: null,
       
        ':hover': {
            opacity: 0.8,
            boxShadow: '4px 7px 24px 0px rgb(0 0 0 / 28%)',
        }

    },
};
