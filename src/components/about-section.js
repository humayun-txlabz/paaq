import React from 'react'
import { Container, Text, Image } from 'theme-ui';

const AboutSection = ({image, sectionStyle, title, detail}) => {
    return (
        <Container sx={sectionStyle} >
            <Container sx={styles.textContainer}>
                <Text sx={styles.title}>{title}</Text>
                <Text sx={styles.detail}>{detail}</Text>
            </Container>
            <Container sx={styles.imageContainer}>
                <Image sx={styles.image} src={image} />
            </Container>
        </Container>
    )
}

const styles = {
    title:{
       fontSize:'40px',
       fontWeight:'600',
       color:'#252F44',
       fontFamily: 'Sofia-Pro',
       textTransform:'capitalize',
       lineHeight:'54px'
    },
    detail:{
       fontSize:'18px',
       fontWeight:'600',
       fontFamily: 'Sofia-Pro',
       color:'#4B5157',
       lineHeight:'30px'
    },
    imageContainer:{
        width:'50%',
        '@media screen and (max-width: 720px)': {
            width:'100%',
        },
    },
    textContainer:{
        width:'50%',
        '@media screen and (max-width: 720px)': {
            width:'100%',
        },
        display:'flex',
        gap:'20px',
        flexDirection:'column'
    },
    image:{
        height:'472px',
        objectFit:'cover',
        '@media screen and (max-width: 720px)': {
            height:'372px',
        },
        width:'100%',
        borderRadius:'20px'
    }
};

export default AboutSection
