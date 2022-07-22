import React from 'react'
import { Container, Text, Image } from 'theme-ui';


const PressImagesCard = ({image, imageStyle, text, imageCardStyle, downloadContainer, arrow, arrowStyle}) => {
    return (
        <Container sx={styles.container} >
             <Container sx={imageCardStyle}>
                 <Image sx={imageStyle} src={image} />
             </Container>
             <Container sx={styles.textContainer}>
                <Text sx={styles.text}>{text}</Text>
                <Container sx={downloadContainer}>
                     <Image src={arrow} sx={arrowStyle} />
                </Container>
             </Container>
        </Container>
    )
}

const styles = {
    container:{
        width:'50%',
        '@media screen and (max-width: 720px)': {
            width:'100%',
        },
        height:'549px',
        display:'flex',
        flexDirection:'column',
        gap:'25px',
    },
  
    textContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:'30px'
    },
   
    text:{
        fontSize:'34px',
        '@media screen and (max-width: 720px)': {
            width:'20',
            lineHeight:''
        },
        fontWeight:'700',
        color:'#252F44',
        width:'85%',
        lineHeight:'47.6px',
        fontFamily: 'Sofia-Pro',
    },
 
};

export default PressImagesCard
