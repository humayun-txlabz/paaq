import CustomSlider from 'components/CustomSlider';
import Image from 'next/image';
import VectorImage from '../assets/Images/VectorOval.png';

const SkillsBanner = () => {

    // const { blog } = props;

    const sliderData = [
        {
            title: 'Overall Skill',
            color: '#FF703E',
            defaultValue: 60
        },
        {
            title: 'Communication',
            color: '#8436F4',
            defaultValue: 70
        }
        ,{
            title: 'Ideas And Solutions',
            color: '#19CDA6',
            defaultValue: 80
        }
    ]

    return (
        <div className='skills-banner-container'>
            <div style={{ color: 'white', width: '60%', textAlign: 'left', }}>
            <div style={{ fontSize: '60px', fontWeight: 'bold', lineHeight: '84px' }}>Show Your skills</div>

            <div style={{ fontSize: '18px', marginTop: 20, lineHeight: 1.5, fontWeight: 'lighter', fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            My Skills shows the areas in which a person is good at something. 
            People will feel more comfortable asking you questions if your skills 
            are available for them to see.
              {/* <br /><br />
              PAAQ is a knowledge based social media application designed to
              facilitate people's exchange of valuable insights and knowledge
              as well as earn money from answering questions. */}
            </div>
            {/* <br /> */}
            <span style={{ fontSize: '1.2em', textDecoration: 'underline', color: '#B7EFFF' }}>learn more</span>
          </div>
          <div className='skills-banner-imagevector' style={{ color: 'white', fontSize: 18, fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40%' }}>
            {/* <Slider defaultValue={25} /> */}
            {
                sliderData.map((item, index)=> (
                    <CustomSlider item={item} index={index} />
                ))
            }
            {/* <CustomSlider color={'#8436F4'} />
            <CustomSlider color={'#19CDA6'} /> */}
          </div>
        </div>
    )
}

export default SkillsBanner;