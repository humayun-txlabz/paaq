import React from 'react';
import Image1 from '../../assets/Images/investors-why-paaq-section.png';

const SectionWhyPaaq = () => {
  return (
    <div className='investors-page-why-paaq'>
        <div className='main-content'>
            <div className='left'>
                <h1>Why PAAQ?</h1>
                <p>PAAQ allows you to receive exclusive engagement from your desired expert. Users have a wide range of content experts, from politics, technology, history, academia, music, to sports. In addition, users will receive a tailor-made response instead of community requests like a man seeking attention in a jamboree.</p>
            </div>
            <div className='right'>
                <img src={Image1} />
            </div>
        </div>
        <div className='h-line' />
        <div className='bottom-content'>
            <div className='left'>
                <p>PAAQ’s model <br/>motivates experts</p>
            </div>
            <div className='right'>
                <p>To respond to requests as they get remunerated for their responses, structured through text or video. Thus, regardless of your background, social class, or social network.</p>
            </div>
        </div>
        <div className='bottom-card'>
            <h1>Let's talk</h1>
            <p>Investing in PAAQ will make it a perfect solution for global use.</p>
            <div className='white-btn'>
                Let’s talk
            </div>
        </div>
    </div>
  )
}

export default SectionWhyPaaq