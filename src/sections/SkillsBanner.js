import { useRef } from "react";
import CustomSlider from "components/CustomSlider";
import Image from "next/image";
import VectorImage from "../assets/Images/VectorOval.png";
import img1 from '../assets/Images/main2.png'
import img2 from '../assets/professionally/img6.png'
import img3 from '../assets/Images/main44.png'

const SkillsBanner = () => {
  const ref1 = useRef();
  // const { blog } = props;

  const sliderData = [
    {
      title: "Vusi Nyovest wrote a review:",
      des: 'I’m very impressed with your answers to my questions. You delivered more than I expected.  ❤️',
      color: "#FF703E",
      defaultValue: 5,
      img: img1,
    },
    {
      title: "Zama Adeleke wrote a review:",
      des: "Wow! I’m absolutely blown away by the incredible answers you've provided to my questions! 👍🙏🏽",
      color: "#8436F4",
      defaultValue: 4,
      img: img2,
    },
    {
      title: "Fizzy Adeyiga wrote a review:",
      des: "Seriously, you've left me with a big smile on my face and a brain full of fascinating information. 😍",
      color: "#19CDA6",
      defaultValue: 5,
      img: img3,
    },
  ];

  return (
    <div className="skills-banner-container" style={{position:'relative'}}>
      <img className="skills-banner-container-img-bg" style={{ position: "absolute", right: "20%" }} src={VectorImage} />
      <div
        className="skills-mobile-container"
        style={{ color: "white", width: "60%", textAlign: "left" }}
      >
        <div
          className="show-skill-mobile-text"
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            lineHeight: "84px",
            fontFamily: "Sofia-Pro",
          }}
        >
          Expert Reviews
        </div>
        <div>
          <div
            className="skill-detail-mobile-text"
            style={{
              position: "relative",
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Reviews written by people who asked experts questions are available for everyone to read and help them make informed decisions, assess the expertise and quality of the advice provided, and develop trust in the expert before asking them questions.
            <span
              className="learn-more-mobile"
              style={{
                position: "absolute",
                zIndex: 2,
                fontSize: "1.0em",
                textDecoration: "underline",
                color: "#B7EFFF",
                fontFamily: "Sofia-Pro",
                bottom: 2,
                right: 47,
              }}
            >
              learn more
            </span>
            {/* <br /><br />
              PAAQ is a knowledge based social media application designed to
              facilitate people's exchange of valuable insights and knowledge
            as well as earn money from answering questions. */}
          </div>
          {/* <br /> */}
        </div>
      </div>
      <div
        className="skills-banner-imagevector"
        style={{
          color: "white",
          fontSize: 18,
          fontFamily: "Sofia-Pro",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
        }}
      >
        {/* <Slider defaultValue={25} /> */}
        {sliderData.map((item, index) => (
          <CustomSlider ref={ref1} item={item} index={index} />
        ))}
        {/* <CustomSlider color={'#8436F4'} />
            <CustomSlider color={'#19CDA6'} /> */}
      </div>
    </div>
  );
};

export default SkillsBanner;
