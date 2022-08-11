import { useRef } from 'react'
import CustomSlider from 'components/CustomSlider';
import Image from 'next/image';
import VectorImage from '../assets/Images/VectorOval.png';

const SkillsBanner = () => {
     const ref1= useRef()
    // const { blog } = props;

    const sliderData = [
        {
            title: 'Communication',
            color: '#8436F4',
            defaultValue: 70
        }
        ,{
            title: 'Ideas And Solutions',
            color: '#19CDA6',
            defaultValue: 80
        },
        {
            title: 'Overall Skill',
            color: '#FF703E',
            defaultValue: 60
        },
    ]

    return (
        <div className='skills-banner-container'>
            <div className='skills-mobile-container' style={{ color: 'white', width: '60%', textAlign: 'left', }}>
            <div className='show-skill-mobile-text' style={{ fontSize: '60px', fontWeight: 'bold', lineHeight: '84px', fontFamily: 'Sofia-Pro' }}>Show Your skills</div>
            <div>
                
            <div className='skill-detail-mobile-text' style={{ position:'relative', fontSize: '18px', marginTop: 20, lineHeight: 1.5, fontWeight: 'lighter', fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            My Skills shows the areas in which a person is good at something. 
            People will feel more comfortable asking you questions if your skills 
            are available for them to see.
            <span className='learn-more-mobile'  style={{position:'absolute',zIndex:2, fontSize: '1.0em', textDecoration: 'underline', color: '#B7EFFF',fontFamily:'Sofia-Pro',bottom:2,right:47 }}>learn more</span>
              {/* <br /><br />
              PAAQ is a knowledge based social media application designed to
              facilitate people's exchange of valuable insights and knowledge
            as well as earn money from answering questions. */}
            </div>
            {/* <br /> */}
            <span className='learn-more-mobile-view' style={{ fontSize: '1.2em', textDecoration: 'underline', color: '#B7EFFF',fontFamily:'Sofia-Pro' }}>learn more</span>
            </div>
          </div>
          <div className='skills-banner-imagevector' style={{ color: 'white', fontSize: 18, fontFamily: 'Sofia-Pro', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40%' }}>
            {/* <Slider defaultValue={25} /> */}
            {
                sliderData.map((item, index)=> (
                    <CustomSlider ref={ref1} item={item} index={index} />
                ))
            }
            {/* <CustomSlider color={'#8436F4'} />
            <CustomSlider color={'#19CDA6'} /> */}
          </div>
        </div>
    )
}

export default SkillsBanner;