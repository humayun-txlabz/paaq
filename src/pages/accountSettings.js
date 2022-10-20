import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import { Container, Text, Image, Input } from "theme-ui";
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
import HelpBanner from "components/helpBanner";
import TopBanner from "../components/HelpCenter/top";
import BgImage from "../assets/webbg.png";
import BgMobileImage from "../assets/mobilebg.png";

export default function AccountSetting() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 007" />
          {/* <HelpBanner /> */}
          <div className="help-center-page-main-container">
            <div className="bg-container-for-all">
              <img className="web-img" src={BgImage} />
              <img className="mobile-img" src={BgMobileImage} />
              <TopBanner />
            </div>
          </div>
          <Container sx={styles.headingContainer}>
            <Text sx={styles.heading}>Account Settings</Text>
          </Container>

          <Container sx={styles.innerContainer}>
            <Text sx={styles.subHeading}>How To Reset Password</Text>
            <Text sx={styles.text}>
              Note: In order to reset your password, the phone number you used
              in registering your account and email address must be up to date
              and accessible by you. 
            </Text>
            <Text sx={styles.text}>
              1. Change password while still logged in
            </Text>
            <Text sx={styles.text}>
              2. Request a password via email or phone
            </Text>
            <Text sx={styles.textHeading}>
              A. Change password while still logged in
            </Text>
            <Text sx={styles.text}>
              Step 1: Go to your profile section and tap on Options IMAGE.
            </Text>
            <Text sx={styles.text}>
              Step 2: Tap on settings, then change password.
            </Text>
            <Text sx={styles.text}>Step 3: Enter your current password.</Text>
            <Text sx={styles.text}>Step 4: Create a new password.</Text>
            <Text sx={styles.text}>
              Step 5: To update your new password, click Save.
            </Text>
            <Text sx={styles.textHeading}>
              B. Request a password to your email or phone
            </Text>
            <Text sx={styles.text}>
              Step 1: Go to the login section of PAAQ app. and tap “reset
              password” IMAGE.
            </Text>
            <Text sx={styles.text}>
              Step 2: Enter your Phone number, Username or Email address.
            </Text>
            <Text sx={styles.text}>
              Step 3: Choose how you would like to receive the password reset
              link; Email address or Phone number.
            </Text>
            <Text sx={styles.textHeading}>If you choose Email address</Text>
            <Text sx={styles.text}>
              (The email address should already be associated with your account)
            </Text>
            <Text sx={styles.text}>
              01. Check your Email inbox for a code. The code will expire after
              1 hour.
            </Text>
            <Text sx={styles.text}>
              02. Enter this code into the text field on the password reset page
              and tap Submit.
            </Text>
            <Text sx={styles.text}>
              03. When prompted, choose a new password.
            </Text>
            <Text sx={styles.textHeading}>If you choose a Phone number</Text>
            <Text sx={styles.text}>
              01. Tap Text a code to my phone number and click continue.
            </Text>
            <Text sx={styles.text}>
              02. A code will be sent to you through SMS and it will last for
              only 1 Hour.
            </Text>
            <Text sx={styles.text}>
              03. Enter this code into the text field on the password reset page
              and tap Submit.
            </Text>
            <Text sx={styles.text}>
              04. When prompted, choose a new password.
            </Text>
            <Text sx={styles.text}>
              05. If these guidelines are not helping you access your account,
              click here to contact us directly.
            </Text>
          </Container>
          <AppAndPlayStoreFooter />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

const styles = {
  headingContainer: {
    width: "80%",
    "@media screen and (max-width: 720px)": {
      width: "95%",
    },
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
    "@media screen and (max-width: 720px)": {
      marginTop: 70,
    },
  },
  heading: {
    fontSize: "66px",
    fontFamily: "Sofia-Pro",
    "@media screen and (max-width: 720px)": {
      fontSize: "30px",
    },
    fontWeight: "700",
    textAlign: "center",
    color: "#252F44",
  },
  innerContainer: {
    width: "66%",

    justifyContent: "space-between",
    marginTop: 50,
    "@media screen and (max-width: 720px)": {
      marginTop: 50,
      width: "80%",
    },
  },
  subHeading: {
    fontSize: "40px",
    fontFamily: "Sofia-Pro",

    "@media screen and (max-width: 720px)": {
      fontSize: "24px",
    },
    display: "flex",
    fontWeight: "400",
    color: "#252F44",
  },
  textHeading: {
    fontSize: "28px",
    fontFamily: "Sofia-Pro",

    "@media screen and (max-width: 720px)": {
      fontSize: "16px",
    },
    display: "flex",
    fontWeight: "700",
    color: "#4B5157",
    marginTop: 50,
  },
  text: {
    fontSize: "24px",
    fontFamily: "SofiaPro-Light",

    "@media screen and (max-width: 720px)": {
      fontSize: "14px",
      lineHeight: "24px",
    },
    display: "flex",
    fontWeight: "400",
    lineHeight: "34px",
    color: "#4B5157",
    marginTop: 15,
  },
};
