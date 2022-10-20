import MiniCardWithIdentity from 'components/miniCardWithIdentity';
import React from 'react'
import ProgressComponent from '../../../components/progressComponent';
import MiniImage from "../../../assets/Icons/featureSecLast/left-mini.png";
import MiniImageRight from "../../../assets/Icons/featureSecLast/right-mini.png";
import useIsInViewport from "use-is-in-viewport";

const MySkillImageComponent = () => {
          const [isInViewport, targetRef] = useIsInViewport();

  return (
       <div ref={targetRef} style={{ position: "relative", marginTop: "3rem" }}>
            <div className="my-skill-img-component">
                 <div className="inner-component">
                      <h1>My Skills</h1>
                      <p>
                           Skills shows the areas in which a person is good at something.
                           People will feel more comfortable asking you questions if your
                           skills are available for them to see.{" "}
                      </p>
                      <div className="h-line" />
                      <ProgressComponent
                           progressColor={"#67AC5B"}
                           title="Overall Skills"
                           progress={40}
                           isAnimate
                           isAboutIcon
                      />
                      <div className="h-line" />
                      <ProgressComponent
                           title="Communication"
                           progress={70}
                           marginBottom={1.5}
                           progressColor={"#9DACAC"}
                           isAnimate
                      />
                      <ProgressComponent
                           title="Property investments"
                           progress={35}
                           marginBottom={1.5}
                           progressColor={"#9DACAC"}
                           isMenu
                           isAnimate
                      />
                      <ProgressComponent
                           title="Financial literacy"
                           progress={45}
                           marginBottom={1.5}
                           progressColor={"#9DACAC"}
                           isMenu
                           isAnimate
                      />
                      <ProgressComponent
                           title="Wealth creation"
                           progress={20}
                           marginBottom={1.5}
                           progressColor={"#9DACAC"}
                           isMenu
                           isAnimate
                      />
                      <ProgressComponent
                           title="International markets"
                           progress={40}
                           marginBottom={1.5}
                           progressColor={"#9DACAC"}
                           isMenu
                           isAnimate
                      />
                      <ProgressComponent
                           title="Financial forecast"
                           progress={65}
                           marginBottom={1.5}
                           progressColor={"#9DACAC"}
                           isMenu
                           isAnimate
                      />
                 </div>
            </div>
            <div
                 className={`mini-left-badge-myskill-features-page ${
                      true ? "mini-left-badge-myskill-features-page-anim" : ""
                 }`}
            >
                 <MiniCardWithIdentity
                      image={MiniImage}
                      name={"Lerato"}
                      id="@LeratoK"
                      position="Financial Analyst"
                      buttonText={"Follow"}
                 />
            </div>
            <div
                 className={`mini-right-badge-myskill-features-page ${
                      true ? "mini-right-badge-myskill-features-page-anim" : ""
                 }`}
            >
                 <MiniCardWithIdentity
                      image={MiniImageRight}
                      name={"Zoe Van..."}
                      id="@TheRealWil..."
                      position="CEO"
                      buttonTextColor={"black"}
                      buttonText={"Following"}
                 />
            </div>
       </div>
  );
}

export default MySkillImageComponent