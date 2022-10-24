import React from 'react';
import { ThemeProvider, Container, Text, Image } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import facebook from '../assets/fb.svg'
import linkedIn from '../assets/linkedIn.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import banner from '../assets/bannerBlogDetail.png'
import chatBlog from '../assets/chatBlog.svg'
import clock from '../assets/clock.svg'
import heart from '../assets/heart.svg'
import video from '../assets/Video.png'
import ItemCard from 'components/AllBlogs/ItemCard';
import Image7 from '../assets/Images/blog7.png';
import Image8 from '../assets/Images/blog8.png';
import Image9 from '../assets/Images/blog9.png';
import Image10 from '../assets/Images/blog10.png';
import Image11 from '../assets/Images/blog13.png';
import Image12 from '../assets/Images/blog12.png';

export default function BlogsDetail() {
    let svgs = [facebook, instagram, twitter, linkedIn]
    let timeArray = [
        {
            img: clock,
            text: 'Aug 6, 10:23 pm'
        },
        {
            img: heart,
            text: '830'
        },
        {
            img: chatBlog,
            text: '43'
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
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Startup Landinggg 006" />
                    <Container style={styles.main}>
                        <Container style={styles.textContainer1}>
                            <Text style={styles.heading}>
                                5 Simple Money Moves
                            </Text>
                            <Text style={styles.heading}>
                                That Will Impact Your Finances
                            </Text>
                            <Text style={styles.heading}>
                                in a Big Way
                            </Text>
                        </Container>
                        <Container style={styles.nextContainer}>
                            <Text style={styles.next}>
                                Next
                            </Text>
                            {
                                svgs.map((item) => {
                                    return (
                                        <Container style={styles.iconContainer}>
                                            <Image style={styles.icon} src={item} />
                                        </Container>
                                    )
                                })
                            }
                        </Container>
                        <Container style={styles.bannerContainer}>
                            <Image style={styles.banner} src={banner} />
                        </Container>
                        <Container style={styles.timeContainer}>
                            {
                                timeArray.map((item, index) => {
                                    return (
                                        <Container style={index == 2 ? styles.timeInnerContainer2 : styles.timeInnerContainer}>
                                            <Image style={styles.timeIcon} src={item.img} />
                                            <Text style={styles.textTime}>{item.text}</Text>
                                        </Container>
                                    )
                                })
                            }
                        </Container>
                        <Container style={styles.descriptionContainer}>
                            <Text style={styles.capital}>A</Text>
                            <Text style={styles.description}>lthough many geographers are trained in toponymy and cartology, this is not their main preoccupation. Geographers study the space and the temporal database distribution of phenomena, processes, and features as. Well as the interaction of humans and their environment. Because space and place affect a variety of topics,</Text>
                        </Container>
                        <Container style={styles.remainingDescriptionContainer}>
                            <Text style={styles.remainingDescription}>well as the interaction of humans and their environment. Because space and place affect a variety of topics, such as economics, health, climate, plants and animals, geography is highly interdisciplinary. The interdisciplinary nature of the geographical approach depends on an attentiveness to the relationship between physical and human phenomena and its spatial patterns.</Text>
                        </Container>
                        <Container style={styles.detailContainer}>
                            <Text style={styles.detailHeading}>Integrated Geography</Text>
                            <Text style={styles.description2}>
                                {
                                    `Geography as a discipline can be split broadly into two main subsidiary fields: human geography and physical geography. The former largely focuses on the built environment and how humans create, view, manage, and influence space. The latter examines the natural environment, and how organisms, climate, soil, water, and landforms produce and interact.
                                
                
The difference between these approaches led to a third field, environmental geography, which combines physical and human geography and concerns the interactions between the environment and humans.`
                                }
                            </Text>
                            <Image src={video} style={styles.banner2} />
                            <Text style={styles.description2}>The Greeks, who were the first to explore geography as both art and science, achieved this through Cartography, Philosophy, and Literature, or through Mathematics. There is some debate about who was the first person to assert that the Earth is spherical in shape, with the credit going either to Parmenides or Pythagoras. Anaxagoras was able to demonstrate that the profile of the Earth was circular by explaining eclipses. However, he still believed that the Earth was a flat disk, as did many of his contemporaries.</Text>
                            <Text style={styles.detailHeading}>Human geography</Text>
                            <Text style={styles.description2}>
                                {
                                    `The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though
                                   
The Greeks, who were the first to explore geography as both art and science, achieved this through Cartography, Philosophy, and Literature, or through Mathematics. There is some debate about who was the first person to assert that the Earth is spherical in shape, with the credit going either to Parmenides or Pythagoras. Anaxagoras was able to demonstrate that the profile of the Earth was circular by explaining eclipses. However, he still believed that the Earth was a flat disk, as did many of his contemporaries.

Geography as a discipline can be split broadly into two main subsidiary fields: human geography and physical geography. The former largely focuses on the built environment and how humans create, view, manage, and influence space. The latter examines the natural environment, and how organisms, climate, soil, water, and landforms produce and interact.`
                                }
                            </Text>
                        </Container>
                        <Container style={styles.moreBlogContainer}>
                            <Text style={styles.moreBlog}>More Blogs...</Text>
                        </Container>
                        <div className='blog-items'>

                            {data2.map((item, index) => (
                                <ItemCard blog={item} key={index} />
                            ))
                            }
                        </div>
                    </Container>

                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginTop: '150px'
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: "10px"
    },
    textContainer1: {
        width: "90%"
    },
    nextContainer: {
        marginTop: '50px',
        width: "90%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    heading: {
        fontSize: '70px',
        fontWeight: '700',
        fontFamily: 'Sofia-Pro',
        lineHeight: '78px',
        color: '#252F44'
    },
    next: {
        fontSize: '20px',
        fontWeight: "500",
        fontFamily: 'Sofia-Pro',
        lineHeight: '27px',
        color: '#252F44'
    },
    icon: {
        width: '12px',
        height: '12px'
    },
    iconContainer: {
        marginLeft: 0,
        marginRight: 0,
        height: '50px',
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #E4E4E4',
        borderRadius: 30
    },
    bannerContainer: {
        marginTop: '50px',
        width: '90%'
    },
    banner: {
        borderRadius: 5,
        objectFit: 'contain'
    },
    descriptionContainer: {
        marginTop: '50px',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
        alignItems: 'center'
    },
    capital: {
        fontSize: '100px',
        width: '5%',
        fontFamily: 'Sofia-Pro',
        fontWeight: '700px',
        lineHeight: '78px',
        marginTop: 15
    },
    description: {
        width: '90%',
        fontSize: '18px',
        fontWeight: '400',
        fontFamily: 'Sofia-Pro',
        lineHeight: '30px',
        color: '#4B5157'
    },
    description2: {
        width: '90%',
        fontSize: '18px',
        fontWeight: '400',
        fontFamily: 'Sofia-Pro',
        lineHeight: '30px',
        color: '#4B5157',
        whiteSpace: 'pre-wrap',
        marginTop: '40px'
    },
    remainingDescriptionContainer: {
        marginTop: 20,
        width: "90%"
    },
    remainingDescription: {
        fontSize: '18px',
        fontWeight: '400',
        fontFamily: 'Sofia-Pro',
        lineHeight: '30px',
        color: '#4B5157'
    },
    timeContainer: {
        marginTop: '50px',
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: '0px',

    },
    timeInnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
    },
    timeInnerContainer2: {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        marginLeft: '-60px'

    },
    timeIcon: {
        width: '20px',
        height: '20px',

    },
    textTime: {
        fontFamily: 'Sofia-Pro',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '24px',
        color: '#646464',
    },
    detailContainer: {
        width: '90%',

    },
    detailHeading: {
        marginTop: '80px',
        fontSize: '35px',
        fontWeight: '700',
        fontFamily: 'Sofia-Pro',
        lineHeight: '40px',
        color: ' #252F44'
    },
    banner2: {
        width: '100%',
        marginTop: '50px'
    },
    moreBlogContainer:{
        width:'90%',
        textAlign:'center'
    },
    moreBlog:{
        marginTop: '80px',
        fontSize: '55px',
        fontWeight: '700',
        fontFamily: 'Sofia-Pro',
        lineHeight: '63px',
        color: ' #252F44'
    }

}
