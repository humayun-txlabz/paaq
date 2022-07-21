import React from 'react'
import { Container, Text, Image } from 'theme-ui';
import arrow from 'assets/arrow.png'

const CardOptions = ({options, title}) => {
    return (
        <Container sx={styles.card1} >
            <Text sx={styles.heading}>{title}</Text>
            {
                options.map((item) => {
                    return (
                        <Container sx={styles.innerContainer}>
                            <Text sx={styles.option}>{item.text}</Text>
                            <Image sx={styles.arrow} src={arrow} />
                        </Container>
                    )
                })
            }
        </Container>
    )
}

const styles = {
    card1: {
        border: 'solid',
        borderWidth: '0.5px',
        borderColor: '#E5E5E5',
        width: '100%',
        borderRadius: '20px',
        marginTop: '30px',
        '@media screen and (max-width: 720px)': {
            marginTop: '15px',
        },
        padding: '35px',
        color:'#252F44'
    },

    heading: {
        fontSize: '32px',
        '@media screen and (max-width: 720px)': {
            fontSize: '18px',
        },
        fontWeight: '800',
        paddingBottom: '40px',

    },
    innerContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '27px',
        '@media screen and (max-width: 720px)': {
            paddingBottom: '17px',
            paddingTop: '17px',
        },
        paddingTop: '27px',
        borderTop: 'solid',
        borderTopWidth: '1px',
        borderTopColor: '#E5E5E5',
    
    },
    option: {
        fontSize: '20px',
        '@media screen and (max-width: 720px)': {
            fontSize: '12px',
            lineHeight:'16.26px',
            width: '100%',
        },
        fontWeight: '500',
        width: '90%',
        textTransform:'capitalize'
    },
    arrow: {
        height: '25px',
        width: '22.33px',

    }
};

export default CardOptions
