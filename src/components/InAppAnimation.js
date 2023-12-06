import React, { useEffect, useState } from 'react'

import job from '../assets/inApp/job.svg'
import jobDark from '../assets/inApp/jobDark.svg'
import hand from '../assets/inApp/hand.svg'
import handDark from '../assets/inApp/handDark.svg'
import gallery from '../assets/inApp/gallery.svg'
import galleryDark from '../assets/inApp/galleryDark.svg'
import education from '../assets/inApp/education.svg'
import educationDark from '../assets/inApp/educationDark.svg'
import note from '../assets/inApp/note.svg'
import noteDark from '../assets/inApp/noteDark.svg'

const InAppAnimation = () => {

    const [img1, setImg1] = useState(false)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)
    const [img4, setImg4] = useState(false)
    const [img5, setImg5] = useState(false)

    useEffect(() => {
        // Initial rendering
        setImg1(true);

        // Set up a loop to reset the images
        const loopInterval = setInterval(() => {
            setImg1(true);

            setTimeout(() => {
                setImg1(false);
                setImg2(true);
            }, 2000);

            setTimeout(() => {
                setImg2(false);
                setImg3(true);
            }, 4000);

            setTimeout(() => {
                setImg3(false);
                setImg4(true);
            }, 6000);

            setTimeout(() => {
                setImg4(false);
                setImg5(true);
            }, 8000);

            setTimeout(() => {
                setImg5(false);
            }, 10000);
        }, 10000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(loopInterval);
    }, []);

    return (
        <div style={{paddingTop:'60px'}}>
            <div className='in-app-images-animation'>
                <img src={img1 === false ? jobDark : job} alt="job" />
                <img src={img2 === false ? handDark : hand} alt="hand" />
                <img src={img3 === false ? galleryDark : gallery} alt="gallery" />
                <img src={img4 === false ? educationDark : education} alt="education" />
                <img src={img5 === false ? noteDark : note} alt="note" />
            </div>
            <p className='in-app-images-animation-text'>If your profile picture matches the person in the <br /> introduction video, you will receive a verification <br /> badge. <span>See Guidelines.</span></p>
            <div>
<div className='in-app-images-animation-dots'>
{
    img1 === true ? <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="5" fill="#00B5B4"/>
    </svg> :
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
    <circle cx="3" cy="3" r="3" fill="#E8EDED" fill-opacity="0.7"/>
    </svg>
}
{
    img2 === true ? <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="5" fill="#00B5B4"/>
    </svg> :
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
    <circle cx="3" cy="3" r="3" fill="#E8EDED" fill-opacity="0.7"/>
    </svg>
}
{
    img3 === true ? <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="5" fill="#00B5B4"/>
    </svg> :
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
    <circle cx="3" cy="3" r="3" fill="#E8EDED" fill-opacity="0.7"/>
    </svg>
}
{
    img4 === true ? <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="5" fill="#00B5B4"/>
    </svg> :
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
    <circle cx="3" cy="3" r="3" fill="#E8EDED" fill-opacity="0.7"/>
    </svg>
}
{ 
    img5 === true ? <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="5" fill="#00B5B4"/>
    </svg> :
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
    <circle cx="3" cy="3" r="3" fill="#E8EDED" fill-opacity="0.7"/>
    </svg>
}
</div>
            </div>
        </div>
    )
}

export default InAppAnimation