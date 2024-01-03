import React, { useEffect, useState } from "react";
import { Container, Text, Image, Button } from "theme-ui";
import moment from "moment";
import Link from "next/link";
import LazyLoad from "react-lazyload";
const NewsSection = ({ list }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Update state based on screen width
      setIsSmallScreen(window.innerWidth <= 567);
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

  return list.map((item, index) => {
    return (
      <Container sx={index % 2 === 1 ? styles.section : styles.sectionReverse}>
        <Container sx={styles.textContainer}>
          <Text sx={styles.title}>{item.fields.title}</Text>
          {isSmallScreen ? <Container sx={styles.imageContainer}>
        <LazyLoad height={200} offset={100}>
          <Image
            sx={styles.image}
            src={item.fields.thumbnail.fields.file.url}
          />
            </LazyLoad>
        </Container> : null}
          <Text sx={styles.detail}>{item.fields.description}</Text>
          <Link href="/news/[id]" as={`/news/${item?.sys?.id}`}>
            <Button
              className={
                index === 1 ? "contact_button_green" : "contact_button"
              }
              aria-label="Read More"
            >
              Read More
            </Button>
          </Link>
          <Container sx={styles.publishContainer}>
            <Text sx={styles.publisher}>By</Text>
            <Text sx={styles.publisher2}>{item.fields.author}</Text>
            <Text sx={styles.date}>
              PUBLISHED:{" "}
              {moment(item.fields.publishedDate).format("DD MMM YYYY")}
            </Text>
          </Container>
        </Container>
        {!isSmallScreen ? <Container sx={styles.imageContainer}>
        <LazyLoad height={200} offset={100}>
          <Image
            sx={styles.image}
            src={item.fields.thumbnail.fields.file.url}
          />
            </LazyLoad>
        </Container> : null}
      </Container>
    );
  });
};

const styles = {
  title: {
    fontSize: "32px",
    "@media screen and (max-width: 720px)": {
      fontSize: "24px",
    },
    "@media (min-width: 0px) and (max-width: 567px)": {
      marginTop:'-40px',
      marginBottom:'10px',
      fontSize:'22px'
    },
    fontWeight: "700",
    fontFamily: "Sofia-Pro",
    color: "#1E1E1E",
    textTransform: "capitalize",
    lineHeight: "36px",
  },
  detail: {
    fontSize: "18px",
    fontFamily: "Sofia-Pro",
    fontWeight: "400",
    color: "#6D6D6D",
    lineHeight: "34px",
    "@media (min-width: 0px) and (max-width: 567px)": {
      marginTop:'8px',
      marginBottom:'-3px',
      fontSize:'14px'
    },
  },
  imageContainer: {
    width: "45%",
    "@media screen and (max-width: 720px)": {
      width: "100%",
    },
  },
  textContainer: {
    width: "45%",
    "@media screen and (max-width: 720px)": {
      width: "100%",
    },
    display: "flex",
    gap: "10px",
    paddingRight: "5%",
    flexDirection: "column",
    ".contact_button_green": {
      borderRadius: 40,
      width: 181,
      height: 60,
      fontSize: "16px",
      fontFamily: "Sofia-Pro",
      flexShrink: 0,
      backgroundColor: "#00B5B4",
      // boxShadow: "5px 10px 44px rgba(0, 181, 180, 0.35)",
      border: "solid",
      borderWidth: "1px",
      borderColor: "#00B5B4",
      borderColor: null,
      color: "#00B5B4",
      backgroundColor: "white",
      marginTop: "10px",
      cursor:"pointer",
      transition:'1s all',
      ":hover": {
        color:'white',
        backgroundColor: "#00B5B4",
        opacity: 0.8,
        boxShadow: "5px 10px 44px rgba(0, 181, 180, 0.35)",
      },
    },
    ".contact_button": {
      borderRadius: 40,
      width: 181,
      height: 60,
      fontSize: "16px",
      color: "#00B5B4",
      fontFamily: "Sofia-Pro",
      flexShrink: 0,
      backgroundColor: "white",
      border: "solid",
      borderWidth: "1px",
      borderColor: "#00B5B4",
      marginTop: "10px",
      cursor:"pointer",
      transition:'1s all',
      ":hover": {
        color:'white',
        backgroundColor: "#00B5B4",
        opacity: 0.8,
      boxShadow: "5px 10px 44px rgba(0, 181, 180, 0.35)",
      },
    },
  },
  image: {
    height: "438px",
    "@media screen and (max-width: 720px)": {
      height: "280px",
    },
    objectFit: "cover",
    width: "100%",
    borderRadius: "15px",
  },
  sectionReverse: {
    width: "100%",
    borderRadius: "20px",
    marginTop: "80px",
    display: "flex",
    flexDirection: "row",
    "@media screen and (max-width: 720px)": {
      flexDirection: "column",
      marginTop: "10px",
    },
    alignItems: "center",
    gap: "20px",
  },
  section: {
    width: "100%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    "@media (min-width: 0px) and (max-width: 567px)": {
      flexDirection: "column",
      marginTop: "10px",
    },
    marginTop: "80px",
    alignItems: "center",
    gap: "20px",
    paddingTop: "0px",
  },
  publishContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
    marginTop: "40px",
    "@media (min-width: 0px) and (max-width: 567px)": {
      marginTop: "20px",
    },
  },
  publisher: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "24.1px",
    fontFamily: "Sofia-Pro",
    "@media (min-width: 0px) and (max-width: 567px)": {
      fontSize: "14px",
    },
  },
  publisher2: {
    fontFamily: "Sofia-Pro",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "24.1px",
    color:'#1E1E1E',
    "@media (min-width: 0px) and (max-width: 567px)": {
      fontSize: "14px",
    },
  },
  date: {
    fontFamily: "Sofia-Pro",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16.1px",
    color: "#6D6D6D",
    marginLeft: "30px",
    "@media screen and (max-width: 720px)": {
      marginLeft: "0px",
    },
    "@media (min-width: 0px) and (max-width: 567px)": {
      fontSize: "10px",
    },
  },
};

export default NewsSection;
