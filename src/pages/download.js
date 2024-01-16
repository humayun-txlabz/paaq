import React, { useState, useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import { notification } from 'antd';
import ReactPlayer from 'react-player';
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import { Container, Text, Image, Input, Button } from "theme-ui";
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
// import banner from "assets/downloadBanner.png";
import barCode from "assets/paaqQR.svg";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import { API_ENDPOINT } from "constants";
import PaaqHomeSlider from "components/PaaqHomeSlider";

export default function Download() {
  const [countryCode, setCountryCode] = useState("US");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [pending, setPending] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Update state based on screen width
      setIsSmallScreen(window.innerWidth <= 380);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize on initial mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const CountrySelect = ({ value, labels, ...rest }) => (
    <select
      {...rest}
      value={value}
      onChange={(event) => { setCountryCode(event.target.value || undefined) }}
    >
      {getCountries().map((country) => (
        <option style={{ backgroundColor: '#1e1e1e' }} key={country} value={country}>
          {country} +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  );

  const sendDownloadLink = async () => {
    const numberWithCode = `+${getCountryCallingCode(countryCode)}${phoneNumber}`
    console.log("numberWithCode", numberWithCode, phoneNumber?.length)
    if (phoneNumber && numberWithCode) {
      setPending(true);
      try {
        const res = await fetch(
          `https://apiv1.paaq.app/v1/link/number`, {
          method: 'POST',
          // mode: 'cors', // this cannot be 'no-cors'
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phoneNumber: numberWithCode,
            countryCode: numberWithCode?.slice(0, -phoneNumber?.length),
          })
        }
        );
        if (res.status === 200) {
          setPhoneNumber(null)
          notification.success({
            message: 'Download Link Sent',
            description:
              'Download link has been sent successfully to your phone number.',
          });
        } 
        else {
          notification.error({
            message: 'Error',
            description: `Couldn't reach to PAAQ at the moment. Please try after few moments`
          });
        }
        setPending(false);

      } catch (err) {
        console.log('err', err);
        notification.error({
          message: 'Error',
          description: `Couldn't reach to PAAQ at the moment. Please try after few moments`
        });
        setPending(false);
      }
    } 
    else {
      notification.error({
        message: 'Error',
        description: `Please add a valid number`
      });
      setPending(false);
    }
  }

  console.log("phoneNumber && numberWithCode", phoneNumber)

  return (
    <div >
<ThemeProvider theme={theme} >
      <StickyProvider>
        <div className="download-screen">
        <Layout >
          <SEO title="Download" />
          <Container sx={styles.mainContainer} >
            <Container sx={styles.downloadContainer}>
              <Container sx={styles.textContainer}>
                <Text sx={styles.heading}>Download PAAQ</Text>
                <Text sx={styles.detail} className='send-the-download'>
                  Send the download link to your phone
                </Text>
                <Container className="pt-2" sx={styles.contact}>
                  <Container sx={styles.codeContainer}>
                    <CountrySelect
                      style={styles.codeSelector}
                      value={countryCode}
                      labels={en}
                      name="countrySelect"
                    />
                  </Container>
                  <Container sx={styles.phoneContainer}>
                    <input className="download-placeholder" style={styles.textField} value={phoneNumber || ''} onChange={(e) => {
                      setPhoneNumber(e.target.value)
                    }} type="number" id="quantity" name="quantity" max="10" min="1" placeholder="Phone Number"/>
                  </Container>
                </Container>
                <div className="send-link-download">
                  <Button className='send-btn-download' sx={styles.button} disabled={pending || !(phoneNumber)}  style={{ background: pending || !(phoneNumber) ? '#D9D9D9' : '#FFFFFF', color: pending ? '#FFFFFF' : '#9DACAC' , cursor: pending || !(phoneNumber) ? 'not-allowed' : ''}} aria-label="Send Link" onClick={sendDownloadLink}>
                    Send Link
                  </Button>
                  <div className="or-text-download">
                  <svg width="87" height="23" viewBox="0 0 87 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.3809 15.8516C37.5723 15.8516 38.5163 15.4121 39.2129 14.5332C39.916 13.6543 40.2676 12.4043 40.2676 10.7832C40.2676 9.16862 39.916 7.92188 39.2129 7.04297C38.5163 6.15755 37.5723 5.71484 36.3809 5.71484C35.1895 5.71484 34.2389 6.1543 33.5293 7.0332C32.8197 7.91211 32.4648 9.16211 32.4648 10.7832C32.4648 12.4043 32.8197 13.6543 33.5293 14.5332C34.2389 15.4121 35.1895 15.8516 36.3809 15.8516ZM43.2754 10.7832C43.2754 13.3678 42.5495 15.347 41.0977 16.7207C40.0104 17.8405 38.4382 18.4004 36.3809 18.4004C34.3236 18.4004 32.7513 17.8405 31.6641 16.7207C30.2057 15.347 29.4766 13.3678 29.4766 10.7832C29.4766 8.14648 30.2057 6.16732 31.6641 4.8457C32.7513 3.72591 34.3236 3.16602 36.3809 3.16602C38.4382 3.16602 40.0104 3.72591 41.0977 4.8457C42.5495 6.16732 43.2754 8.14648 43.2754 10.7832ZM48.5879 6.10547V9.97266H51.9961C52.6732 9.97266 53.181 9.89453 53.5195 9.73828C54.1185 9.46484 54.418 8.92448 54.418 8.11719C54.418 7.24479 54.1283 6.65885 53.5488 6.35938C53.2233 6.1901 52.735 6.10547 52.084 6.10547H48.5879ZM52.709 3.60547C53.7181 3.625 54.4928 3.7487 55.0332 3.97656C55.5801 4.20443 56.0423 4.53971 56.4199 4.98242C56.7324 5.34701 56.9798 5.75065 57.1621 6.19336C57.3444 6.63607 57.4355 7.14062 57.4355 7.70703C57.4355 8.39062 57.263 9.06445 56.918 9.72852C56.5729 10.3861 56.0033 10.8516 55.209 11.125C55.873 11.3919 56.3418 11.7728 56.6152 12.2676C56.8952 12.7559 57.0352 13.5046 57.0352 14.5137V15.4805C57.0352 16.138 57.0612 16.584 57.1133 16.8184C57.1914 17.1895 57.3737 17.4629 57.6602 17.6387V18H54.3496C54.2585 17.681 54.1934 17.4238 54.1543 17.2285C54.0762 16.8249 54.0339 16.4115 54.0273 15.9883L54.0078 14.6504C53.9948 13.7324 53.8255 13.1204 53.5 12.8145C53.181 12.5085 52.5788 12.3555 51.6934 12.3555H48.5879V18H45.6484V3.60547H52.709Z" fill="white" fill-opacity="0.6"/>
<rect y="10" width="22" height="3" fill="white" fill-opacity="0.6"/>
<rect x="65" y="10" width="22" height="3" fill="white" fill-opacity="0.6"/>
</svg>

                  </div>
                 
                </div>
                <div className="bar-code-and-text">
                  <Image src={barCode} className={'barcode-container'} />
                  <span className="text-in-bar-code-with-text">
                  <div className="or-in-send-link or-in-send-link-modify">
                    <div className="mini-line mini-line-left"></div> OR
                    <div className="mini-line mini-line-right"></div>
                  </div>
                    Scan to download by opening the camera app on your phone.
                    Place the rear-facing camera on top of the QR code. You will
                    see a notification. Tap it.
                  </span>
                </div>
                <div className="bar-code-and-text-mobile">
                  <span className="text-in-bar-code-with-text">
                    Scan to download by opening the camera app on your phone.
                    Place the rear-facing camera on top of the QR code. You will
                    see a notification. Tap it.
                  </span>
                  <Image src={barCode} className={'image'} />
                </div>
              </Container>
              <Container className='download-animation' sx={styles.imageContainer}>
              {/* <div style={{
                position:'absolute', bottom:'-13%',
                width:'312px', height:'560px', overflow:'hidden'
              }}> */}
              <PaaqHomeSlider width={!isSmallScreen ? '312px' : '280px'} height={!isSmallScreen ? '490px' : '418px'}/>
              {/* </div> */}
                {/* {domLoaded && (
                  <div className='player-wrapper player-wrapper-download' >
                    <ReactPlayer
                      className='react-player-download'
                      url='gifs/PostInformation.mov'
                      width='100%'
                      height='101%'
                      loop={true}
                      playing={true}
                      muted={true}
                    />
                  </div>
                )} */}
              </Container>
            </Container>
          </Container>
          <div className="download-play-store" >
          <AppAndPlayStoreFooter />
          </div>
        </Layout>
        </div>
      </StickyProvider>
    </ThemeProvider>
    </div>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom:'80px',
    paddingTop: "60px",
    "@media screen and (max-width: 720px)": {
      paddingTop: "0px",
      marginBottom:'0px'
    },
    justifyContent: "center",
    flexDirection: "column",
  },
  downloadContainer: {
    background: "linear-gradient(292.38deg, #7AE2D6 0%, #4293C5 100%)",
    display: "flex",
    width: "85%",
    borderRadius: "40px",
    paddingTop: "80px",
    flexDirection: "row",
    "@media screen and (max-width: 970px)": {
      flexDirection: "column",
      borderRadius: "15px",
      width: "90%",
      paddingTop: "60px",
    },
  },
  textContainer: {
    width: "55%",
    "@media screen and (max-width: 720px )": {
      width: "100%",
      paddingLeft: "30px !important",
      marginBottom: '10%'
    },
    "@media (min-width: 720px) and (max-width: 970px)": {
      width: "100%",
      paddingLeft: "50px !important",
      marginBottom: '10%'
    },
    "@media (min-width: 970px) and (max-width: 1100px)": {
      paddingLeft: "50px !important",
    },
    "@media screen and (max-width: 970px)": {
      width: "100%",
      paddingLeft: "130px",
    },
    "@media (min-width: 0px) and (max-width: 567px)": {
      paddingLeft: "22px !important",
    },
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    justifyContent: "center",
    paddingLeft: "150px",
  },
  imageContainer: {
    width: "45%",
    "@media screen and (max-width: 767px)": {
      width: "100%",
    },
    paddingBottom: "0px",
    display: "flex",
    justifyContent: "center",
  },
  bannerImage: {
    width: "386px",
    height: "549px",
    objectFit: "cover",
    "@media screen and (max-width: 720px)": {
      width: "300px",
      height: "430px",
    },
    marginTop: "20px",
  },
  heading: {
    fontWeight: "700",
    fontSize: "60px",
    fontFamily: "Sofia-Pro",
    "@media screen and (max-width: 720px)": {
      fontSize: "34px",
    },
    lineHeight: "54px",
    color: "#FFFFFF",
  },
  detail: {
    fontWeight: "600",
    fontSize: "22px",
    fontFamily: "Sofia-Pro",
    "@media screen and (max-width: 720px)": {
      fontSize: "14px",
    },
    lineHeight: "20px",
    color: "#FFFFFF",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    marginLeft: "0px",
    gap: "10px",
  },
  codeContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight:"0",
    gap: "10px",
    width: "32%",
    height: "54px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "40px",
    background: "rgba(255, 255, 255, 0.2)",
    marginLeft: "0px",
    "@media (min-width: 0px) and (max-width: 567px)": {
      height: "44px",
    },
  },
  phoneContainer: {
    display: "flex",
    flexDirection: "row",
    width: "57%",
    height: "54px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "40px",
    marginLeft: "0px",
    "@media (min-width: 0px) and (max-width: 567px)": {
      height: '44px',
    },
  },
  textField: {
    color: "#FFFFFF",
    borderWidth: "0px",
    border: "none",
    outline: "none",
    borderRadius: "40px",
    background: "rgba(255, 255, 255, 0.2)",
    paddingLeft: "25px",
    paddingRight: "25px",
    minHeight: '54px',
    width: '100%',
  },
  button: {
    borderRadius: 40,
    cursor: "pointer",
    width: "33%",
    "@media screen and (max-width: 720px)": {
      width: "50%",
    },
    marginRight: "10px",
    height: "50px",
    fontSize: "16px",
    fontFamily: "Sofia-Pro",
    flexShrink: 0,
    backgroundColor: "#FFFFFF",
    borderColor: null,
    color: "#000000",

  },
  barCode: {
    height: "171px",
    width: "171px",
    objectFit: "cover",
  },
  codeSelector: {
    width: "65%",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "white",
  },
};
