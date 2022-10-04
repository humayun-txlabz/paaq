import MiniCardWithIdentity from 'components/miniCardWithIdentity';
import React from 'react'
import ProgressComponent from '../../../components/progressComponent';
import miniImage from "../../../assets/Icons/featureSecLast/left-mini.png";
import miniImageRight from "../../../assets/Icons/featureSecLast/right-mini.png";

const MySkillImageComponent = () => {
  return (
       <div style={{ position: "relative", marginTop: '3rem' }}>
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
                      />
                      <div className="h-line" />
                      <ProgressComponent
                           title="Overall Skills"
                           progress={70}
                           marginBottom={1}
                           progressColor={"#9DACAC"}
                      />
                      <ProgressComponent
                           title="Overall Skills"
                           progress={35}
                           marginBottom={1}
                           progressColor={"#9DACAC"}
                           isMenu
                      />
                      <ProgressComponent
                           title="Overall Skills"
                           progress={45}
                           marginBottom={1}
                           progressColor={"#9DACAC"}
                           isMenu
                      />
                      <ProgressComponent
                           title="Overall Skills"
                           progress={20}
                           marginBottom={1}
                           progressColor={"#9DACAC"}
                           isMenu
                      />
                      <ProgressComponent
                           title="Overall Skills"
                           progress={40}
                           marginBottom={1}
                           progressColor={"#9DACAC"}
                           isMenu
                      />
                      <ProgressComponent
                           title="Overall Skills"
                           progress={65}
                           marginBottom={2}
                           progressColor={"#9DACAC"}
                           isMenu
                      />
                 </div>
            </div>
            <div className="mini-left-badge-myskill-features-page">
                 <MiniCardWithIdentity
                      image={miniImage}
                      name={"Lerato"}
                      id="@LeratoK"
                      position="Financial Analyst"
                 />
            </div>
            <div className="mini-right-badge-myskill-features-page">
                 <MiniCardWithIdentity
                      image={miniImageRight}
                      name={"Zoe Van..."}
                      id="@TheRealWil..."
                      position="CEO"
                 />
            </div>
       </div>
  );
}

export default MySkillImageComponent