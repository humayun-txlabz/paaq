import React from 'react';
import JSZip from "jszip";
import { Image } from 'theme-ui';

import HeaderImage from 'assets/business-branding 1 (1).png';

const BrandGuidelinesMain = () => {

    const urls = [
        "https://paaq-storage-new.s3.amazonaws.com/web-files/images/PAAQ_Logo_full+_details.png", 
        "https://paaq-storage-new.s3.amazonaws.com/web-files/images/PAAQ_Logo_full_details.jpg", 
        "https://paaq-storage-new.s3.amazonaws.com/web-files/images/PAAQ_question_mark_and_acronym.jpg",
        "https://paaq-storage-new.s3.amazonaws.com/web-files/images/PAAQ_question_mark_and_acronym.png",
        "https://paaq-storage-new.s3.amazonaws.com/web-files/images/PAAQ_question_mark_Logo.jpg",
        "https://paaq-storage-new.s3.amazonaws.com/web-files/images/PAAQ_question_mark_Logo.png",
        "https://paaq-storage-new.s3.amazonaws.com/web-files/images/PAAQ_question_mark_Logo.svg"
    ];

    const saveZip = (filename, urls) => {
        if(!urls) return;
    
        const zip = new JSZip();
        const folder = zip.folder("files"); // folder name where all files will be placed in 
    
        urls.forEach((url) => {
            const blobPromise = fetch(url).then((r) => {
                if (r.status === 200) return r.blob();
                // return Promise.reject(new Error(r.statusText));
            });
            const name = url.substring(url.lastIndexOf("/") + 1);
            folder.file(name, blobPromise);
        });
    
        zip.generateAsync({ type: "blob" }).then((blob) => saveAs(blob, filename));
    
    };

    return (
        <div className='brand-guidelines-main'>
            <div className='brand-guidelines-main-left'>
                <p className='brand-guidelines-main-heading' style={{color:'#1E1E1E'}}>
                    Brand Guildelines
                </p>
                <p className='brand-guidelines-main-description' style={{color:'#1E1E1E'}}>
                    In this guide, we've provided the do’s and don'ts of using PAAQ's <br className='d-md-block d-none' /> brand elements. 
                    This includes our Question-mark and acronym.
                </p>
                <div className='brand-guidelines-main-buttons'>
                    <a href="https://paaq-storage-new.s3.amazonaws.com/web-files/pdfs/PAAQ+Guidelines.pdf" target="_blank" rel="noopener noreferrer">
                        <div className='brand-guidelines-main-download' style={{color:'#1E1E1E'}}>
                            Download Guildlines
                        </div>
                    </a>
                    <div className='brand-guidelines-main-downloadlogo' onClick={()=>saveZip("my_project_files_to_download.zip", urls)  }>
                        Download Logo
                    </div>
                </div>
            </div>
            <div className='brand-guidelines-main-right'>
                <Image src={HeaderImage} style={{maxHeight:"33rem"}} />
            </div>
        </div>
    );
}

export default BrandGuidelinesMain;