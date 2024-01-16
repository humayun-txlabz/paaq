import React, { useState, useEffect } from "react";
import { ThemeProvider, Link } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import { Container, Text, Image, Input, Button } from "theme-ui";
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
import NewsSection from "sections/newsSection";
import { newsSectionObjects } from "constants/newsSectionObjects";
import arrow from "assets/page1.png";
import arrow2 from "assets/page2.png";
// import image1 from "assets/news/6.png";
// import arrow3 from "assets/upRightArrow.png";
// import collage1 from "assets/news/7.png";
// import collage2 from "assets/news/8.png";
// import collage3 from "assets/news/9.png";
// import collage4 from "assets/news/10.png";

import { StickyProvider } from "../../contexts/app/app.provider";
import { apiClientContentFul } from "services/apiClient";

export default function News2() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const posts = await apiClientContentFul("news", 0, 6);
      setData(posts);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData().then(_=>setLoading(s=>!s));
  }, [])
  
  console.log(data);


  const { items } = data;
  console.log("items", items)
  const [active, setActive] = useState(1);
  const pages = [];

  if (!Loading) {
    let count = data.items?.length / 5 + 1;
  
    for (let i = 1; i <= count; i++) {
      pages.push({
        id: i,
      });
    }
  }

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5);

  const increase = () => {
    setActive(active + 1);
    setMin(min + 5);
    setMax(max + 5);
    window.scrollTo(0, 0);
  };

  const decrease = () => {
    setActive(active - 1);
    setMin(min - 5);
    setMax(max - 5);
    window.scrollTo(0, 0);
  };

  const setDirectWithPage = (id) => {
    setActive(id);
    setMin((id - 1) * 5);
    setMax((id - 1) * 5 + 5);
    window.scrollTo(0, 0);
  };

  return (
      <StickyProvider>
        <Layout>
          <SEO title="News" />
          <Container sx={styles.mainContainer}>
            <Container sx={styles.headingContainer}>
              {
                !Loading && <NewsSection list={items} />
              }
            </Container>
            {
              !Loading && pages.length > 1 && <Container className="parent news-parent" sx={styles.paginations}>
                <div className="news-parent-div"
                  onClick={() => {
                    active > 1 ? decrease() : null;
                  }}
                  style={styles.circle}
                >
                  <img style={styles.arrow} src={arrow} />
                </div>
                {pages.map((item) => {
                  return (
                    <div className="news-parent-div"
                      onClick={() => setDirectWithPage(item.id)}
                      style={item.id == active ? styles.circle3 : styles.circle2}
                    >
                      <Text className="news-text-modify">{item.id}</Text>
                    </div>
                  );
                })}
                <div className="news-parent-div"
                  onClick={() => {
                    active < pages.length ? increase() : null;
                  }}
                  style={styles.circle}
                >
                  <img style={styles.arrow} src={arrow2} />
                </div>
              </Container>
            }
          </Container>
          <AppAndPlayStoreFooter />
        </Layout>
      </StickyProvider>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    paddingTop: "0px",
    "@media screen and (max-width: 720px)": {
      paddingTop: "50px",
      ".parent": {
        "div:nth-child(6)": {
          display: "none",
        },
      },
    },
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "70px",
    fontWeight: "600",
    "@media screen and (max-width: 720px)": {
      fontSize: "50px",
    },
    color: "#1e1e1e",
    fontFamily: "Sofia-Pro",
    textTransform: "capitalize",
    lineHeight: "70px",
  },
  detail: {
    fontSize: "19px",
    "@media screen and (max-width: 720px)": {
      fontSize: "15px",
      marginTop: "0px",
    },
    fontWeight: "400",
    fontFamily: "Sofia-Pro",
    color: "#6D6D6D",
    lineHeight: "28px",
    whiteSpace: "pre-wrap",
    marginTop: "20px",
  },
  headingContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    "@media screen and (max-width: 720px)": {
      width: "81%",
    },
    alignItems: "center",
    justifyContent: "center",
  },
  paginations: {
    width: "40%",
    "@media screen and (max-width: 720px)": {
      width: "90%",
      gap: "0px",
    },
    justifyContent: "center",
    height: "50px",
    marginTop: "90px",
    display: "flex",
    flexDirection: "row",
    gap: "30px",
  },
  circle: {
    width: "60px",
    height: "60px",
    margin:'0 15px',
    "@media screen and (max-width: 720px)": {
      width: "65px",
    },
    border: "solid",
    borderWidth: "1px",
    borderColor: "#000000",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width: 0px) and (max-width: 567px)": {
      width: "36px",
    height: "36px",
    },
  },
  circle2: {
    width: "60px",
    height: "60px",
    borderRadius: "30px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    "@media (min-width: 0px) and (max-width: 567px)": {
      width: "36px",
    height: "36px",
    },
  },
  circle3: {
    width: "60px",
    height: "60px",
    "@media screen and (max-width: 720px)": {
      width: "65px",
    },
    "@media (min-width: 0px) and (max-width: 567px)": {
      width: "36px",
    height: "36px",
    },
    borderRadius: "30px",
    backgroundColor: "#00B5B4",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  arrow: {
    height: "12px",
    width: "22px",
  },
  image: {
    height: "438px",
    objectFit: "cover",
    "@media screen and (max-width: 720px)": {
      height: "347px",
      marginTop: "30px",
    },
    width: "100%",
  },
  imageContainer: {
    width: "45%",
    "@media screen and (max-width: 720px)": {
      width: "100%",
    },
  },
  section: {
    width: "80%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    "@media screen and (max-width: 720px)": {
      flexDirection: "column-reverse",
      width: "90%",
      gap: "0px",
      marginTop: "10px",
    },
    marginTop: "80px",
    alignItems: "center",
    gap: "80px",
  },
  section2: {
    width: "80%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    "@media screen and (max-width: 720px)": {
      flexDirection: "column",
      width: "90%",
      gap: "0px",
      marginTop: "10px",
    },
    marginTop: "80px",
    alignItems: "center",
    gap: "80px",
  },
  publishContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
  },
  textContainer: {
    width: "55%",
    "@media screen and (max-width: 720px)": {
      width: "100%",
    },
    display: "flex",
    gap: "20px",
    marginTop: "85px",
    flexDirection: "column",
  },
  readmore: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#000000",
    lineHeight: "12px",
    fontFamily: "Sofia-Pro",
  },
  upArrow: {
    height: "12px",
    width: "12px",
  },
  collageContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "45%",
    "@media screen and (max-width: 720px)": {
      width: "100%",
      marginTop: "100px",
    },
  },
  row1Collage: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  row2Collage: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  collageImage: {
    height: "240px",
    width: "280px",
    borderRadius: "14px",
    "@media screen and (max-width: 720px)": {
      height: "160px",
    },
    objectFit: "cover",
  },
  collageSectionHeading: {
    fontWeight: "600",
    fontSize: "70px",
    fontFamily: "Sofia-Pro",
    "@media screen and (max-width: 720px)": {
      fontSize: "30px",
      lineHeight: "35px",
      textAlign: "center",
    },
    lineHeight: "70px",
    color: " #1e1e1e",
  },
  textFieldContainer: {
    width: "80%",
    marginLeft: 0,
    height: "70px",
    "@media screen and (max-width: 720px)": {
      height: "60px",
      width: "100%",
      justifyContent: "center",
    },
    borderRadius: "50px",
    marginTop: 20,
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    border: "solid",
    borderWidth: "1px",
    borderColor: "#E0E0E0",
    boxShadow: "30px 34px 84px rgba(0, 0, 0, 0.09)",
  },
  textField: {
    marginLeft: 30,
    width: "65%",
    "@media screen and (max-width: 720px)": {
      width: "45%",
    },
    height: "60px",
    borderWidth: "0px",
    border: "none",
    outline: "none",
  },
  buttonSubscribe: {
    borderRadius: 40,
    width: "35%",
    marginRight: "10px",
    height: "50px",
    "@media screen and (max-width: 720px)": {
      position: "absolute",
      width: "40%",
      marginTop: "150px",
      height: "50px",
    },
    fontSize: "16px",
    fontFamily: "Sofia-Pro",
    flexShrink: 0,
    backgroundColor: "#00B5B4",
    boxShadow: "5px 10px 44px rgba(0, 181, 180, 0.35)",
    borderColor: null,
    color: null,

    ":hover": {
      opacity: 0.8,
      boxShadow: "4px 7px 24px 0px rgb(0 0 0 / 28%)",
    },
  },
};
