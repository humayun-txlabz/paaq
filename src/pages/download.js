import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import { Container, Text, Image, Input, Button } from "theme-ui";
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
import banner from "assets/downloadBanner.png";
import barCode from "assets/barCode.png";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";

export default function Download() {
  const [countryCode, setCountryCode] = useState("US");
  const CountrySelect = ({ value, labels, ...rest }) => (
    <select
      {...rest}
      value={value}
      onChange={(event) => setCountryCode(event.target.value || undefined)}
    >
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {country} +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  );

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Download" />
          <Container sx={styles.mainContainer}>
            <Container sx={styles.downloadContainer}>
              <Container sx={styles.textContainer}>
                <Text sx={styles.heading}>Download PAAQ</Text>
                <Text sx={styles.detail}>
                  Send the download link to your phone
                </Text>
                <Container sx={styles.contact}>
                  <Container sx={styles.codeContainer}>
                    <CountrySelect
                      style={styles.codeSelector}
                      value={countryCode}
                      labels={en}
                      name="countrySelect"
                    />
                  </Container>
                  <Container sx={styles.phoneContainer}>
                    <Input sx={styles.textField} placeholder="Phone Number" />
                  </Container>
                </Container>
                <div className="send-link-download">
                  <Button sx={styles.button} aria-label="Send Link">
                    Send Link
                  </Button>
                  <span className="or-in-send-link">
                    <div className="mini-line"></div> OR{" "}
                    <div className="mini-line"></div>
                  </span>
                </div>
                <div className="bar-code-and-text">
                  <Image src={barCode} className={'image'} />
                  <span className="text-in-bar-code-with-text">
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
              <Container sx={styles.imageContainer}>
                <Image src={banner} sx={styles.bannerImage} />
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
    display: "flex",
    width: "100%",
    alignItems: "center",
    paddingTop: "100px",
    "@media screen and (max-width: 720px)": {
      paddingTop: "50px",
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
    },
  },
  textContainer: {
    width: "55%",
    "@media screen and (max-width: 720px )": {
      width: "100%",
      paddingLeft: "30px !important",
    },
    "@media screen and (max-width: 970px)": {
      width: "100%",
      paddingLeft: "130px",
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
    width: "90%",
    marginLeft: "0px",
    gap: "10px",
  },
  codeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    width: "43%",
    height: "54px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "40px",
    background: "rgba(255, 255, 255, 0.2)",
    marginLeft: "0px",
  },
  phoneContainer: {
    display: "flex",
    flexDirection: "row",
    width: "57%",
    height: "54px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "40px",
    background: "rgba(255, 255, 255, 0.2)",
    marginLeft: "0px",
  },
  textField: {
    color: "#FFFFFF",
    borderWidth: "0px",
    border: "none",
    outline: "none",
    marginLeft: "10px",
    "::placeholder": {
      color: "#FFFFFF",
    },
  },
  button: {
    borderRadius: 40,
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

    ":hover": {
      opacity: 0.8,
    },
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
