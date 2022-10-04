import React from 'react'
import ProgressComponent from '../../../components/progressComponent';

const MySkillImageComponent = () => {
  return (
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
            <div className="mini-left-badge">

            </div>
       </div>
  );
}

export default MySkillImageComponent