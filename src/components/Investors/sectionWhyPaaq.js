import React from 'react';
import image1 from '../../assets/Images/investors-why-paaq-section.png';

const SectionWhyPaaq = () => {
  return (
    <div className='investors-page-why-paaq'>
        <div className='main-content'>
            <div className='left'>
                <h1>Why Paaq?</h1>
                <p>PAAQ allows you to receive exclusive engagement from your desired expert. Users have a wide range of content experts, from politics, technology, history, academia, music, to sports. In addition, users will receive a tailor-made response instead of community requests like a man seeking attention in a jamboree.</p>
            </div>
            <div className='right'>
                <img src={image1} />
            </div>
        </div>
        <div className='h-line' />
    </div>
  )
}

export default SectionWhyPaaq