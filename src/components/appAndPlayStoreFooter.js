import React from 'react'
import apple from 'assets/apple.png'
import googlePlay from 'assets/googlePlay.png'
import { Container, Text, Image} from 'theme-ui'; 

const AppAndPlayStoreFooter = () => {
    return (
        <div>
            <Container sx={styles.shareKnowledgeContainer}>
                <Text sx={styles.shareText}>Share Knowledge <br /> & Earn Rewards</Text>
            </Container>
            <Container sx={styles.buttonsContainer}>
                <Container sx={styles.button}>
                    <Image sx={styles.image} src={apple} />
                    <Text>Apple Store</Text>
                </Container>
                <Container sx={styles.button}>
                    <Image sx={styles.image} src={googlePlay} />
                    <Text>Google Play</Text>
                </Container>
            </Container>
        </div>
    )
}

const styles={
    shareKnowledgeContainer: {
        marginTop: 30,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        textAlign: 'center',
    },
    shareText: {
        fontSize: '70px',
        '@media screen and (max-width: 720px)': {
            fontSize: '34px',
            lineHeight:'38px'
        },
        display: 'flex',
        fontWeight: '700',
        color: '#1e1e1e',
        backgroundImage: 'linear-gradient(98.47deg, #00B5B4 -1.37%, #4293C5 76.55%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        lineHeight: '76px',
        marginTop: 16,
        fontFamily: 'Sofia-Pro',
        textAlign: 'center'
    },
    button: {
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: "43%",
        '@media (min-width: 719px) and (max-width: 1030px)': {
            width: "53%",
            marginLeft:'5px',
            marginRight:'5px',
        },
        '@media screen and (max-width: 720px)': {
            width: '65%',
            marginLeft:1
        },
        cursor: 'pointer',
        height: "50px",
        marginTop: 40,
        display: 'flex',
        fontFamily: 'Sofia-Pro',
        backgroundColor: '#1E1E1E',
        boxShadow: '4px 7px 24px 0px rgb(0 0 0 / 28%)',
        borderColor: null,
        color: 'white',
        transition: '1s all',
        ':hover': {
            opacity: 0.8,
            boxShadow: '4px 7px 24px 0px rgb(0 0 0 / 28%)',
        },
    },
    image: {
        width: '13px',
        height: '16px',
        marginRight: '10px',
        marginBottom: '4px'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 100,
        height: '50%',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        width: '30%',
        '@media (min-width: 767px) and (max-width: 1030px)': {
            width: '40%',
        },
        '@media screen and (max-width: 920px)': {
            width: '80%'
        }
    }
}; 

export default AppAndPlayStoreFooter
