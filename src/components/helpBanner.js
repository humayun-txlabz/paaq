import React from 'react'
import { Container, Text, Image, Input } from 'theme-ui';
import banner from 'assets/banner_account_setting.png'
import search from 'assets/search.png'

const HelpBanner = () => {
    return (
            <Container sx={styles.imageContainer}>
                <Container sx={styles.helpContainer}>
                    <Text sx={styles.helpText}>How Can We Help You?</Text>
                    <Container sx={styles.textFieldContainer}>
                        <Input sx={styles.textField} placeholder='Search Here ...' />
                        <Image sx={styles.searchImage} src={search} />
                    </Container>
                </Container>
                <Image src={banner} sx={styles.bannerStyle} />
            </Container>
    )
}

const styles={
    imageContainer: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        '@media screen and (max-width: 720px)': {
            flexDirection: 'column',
           
        },
        alignItems: 'center'
    },
    bannerStyle: {
        width: '100%',
        height: '690px',
        
        '@media screen and (max-width: 720px)': {
            height: '390px',
        },
    },
    helpContainer: {
        marginBottom: 70,
        position: 'absolute',
        '@media screen and (max-width: 720px)': {
            position: 'relative',
            marginTop: 70,
            width: '80%',
            marginLeft: 35
        },
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 120,
       
       
    },
    helpText: {
        fontSize: '60px',
        fontFamily: 'Sofia-Pro',
        '@media screen and (max-width: 720px)': {
            fontSize:'40px',
        },
        display: 'flex',
        fontWeight: '600',
        color: '#1e1e1e',
        textAlign: 'center'
    },
    textFieldContainer: {
        width: '95%',
        height: '90px',
        '@media screen and (max-width: 720px)': {
            height: '70px',
            width: '100%',
        },
        borderRadius: '50px',
        marginTop: 40,
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        border:'solid',
        borderWidth:'1px',
        borderColor:'#F5F5F5',
        boxShadow: '30px 34px 84px rgba(0, 0, 0, 0.09)'

    },
    textField: {
        marginLeft: 30,
        width: "79%",
        height: '60px',
        borderWidth: '0px',
        border: 'none',
        outline: 'none'
    },
    searchImage: {
        marginLeft: 10,
        marginRight: 15,
        width: '72px',
        height: '72px',
        '@media screen and (max-width: 720px)': {
            height: '52px',
            width: '52px',

        },
    }
};

export default HelpBanner
