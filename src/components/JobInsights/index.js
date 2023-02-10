import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

import JobInsightsForm from "./form";
import locImgIcon from '../../assets/loc-svg.png';
import heartIcon from '../../assets/heart-icon.png';
import { BLOCKS } from '@contentful/rich-text-types';
import rotatedTag from '../../assets/rotated-tag.png';
import LinkedInIcon from 'assets/Icons/jobs/linkedin.svg';
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";
import jobInsightsImg1 from '../../assets/Images/job-insights-1.png';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Image } from 'theme-ui';


const JobInsightsMain = (props) => {

  const { jobItem } = props;
  const RichParagraph = ({ children }) => <p className="rich-text-jobs" >{children}</p>;

  const Heading1 = ({ children }) => <h1 className="richtext-job-h1" >{children}</h1>;
  const Heading2 = ({ children }) => <h2 className="richtext-job-h2" >{children}</h2>;
  const Heading3 = ({ children }) => <h3 className="richtext-job-h3" >{children}</h3>;
  const Heading4 = ({ children }) => <h4 className="richtext-job-h4" >{children}</h4>;
  const Heading5 = ({ children }) => <h5 className="richtext-job-h5" >{children}</h5>;
  const Heading6 = ({ children }) => <h6 className="richtext-job-h6" >{children}</h6>;
  const Hr = ({ children }) => <hr style={{ width: '100%' }} />;



  const richTextOptions = {
    renderMark: {
      // [MARKS.BOLD]: text => (
      //     <RichBold>{text}</RichBold>
      // ),
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, `</br>`)}</p>`
      ,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const mimeType = file.contentType
        const mimeGroup = mimeType.split('/')[0]

        switch (mimeGroup) {
          case 'image':
            return <img
              title={title ? title : null}
              alt={description ? description : null}
              width={"100%"}
              height={'auto'}
              src={file.url}
              style={{ borderRadius: 22, objectFit: 'cover', margin: '40px 0px' }}
            />
          case 'application':
            return <a
              alt={description ? description : null}
              href={file.url}
            >{title ? title : file.details.fileName}
            </a>
          default:
            return <span style={{ backgroundColor: 'red', color: 'white' }}> {mimeType} embedded asset </span>
        }

      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <RichParagraph>{children}</RichParagraph>
      ),
      [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading5>{children}</Heading5>,
      [BLOCKS.HEADING_6]: (node, children) => <Heading6>{children}</Heading6>,
      [BLOCKS.HR]: (node, children) => <Hr>{children}</Hr>,
    },
    renderText: text => text.replace('!', '?'),
  };

  return (
    <>
      <div className="job-insights-main">
        <div className="job-in-bg-main-left">
          <h3 className="cac">
            Career and Culture &gt; <span className="cjobs">jobs</span>
          </h3>
          <div className="left-bottom-div">
            <span className="bold-text">
              {jobItem?.title}
              {/* Principle Full <br />
              Stack Engineer */}
            </span>
            <div className="h-line" />
          </div>
          <div className="left-bottom">
            <h3>
              {" "}
              <img style={{width: 14, height: 18, marginRight: '10px'}} src={locImgIcon} />
              <p className="jobdetail-type">
                {jobItem?.jobType ?? 'Remote'}
              </p>
            </h3>
            <h3>
            <img style={{width: 19, height: 18, marginRight: '10px'}} src={rotatedTag} />
            <p className="jobdetail-type">
              {jobItem?.category ?? 'Engineering'}
            </p>
            </h3>
          </div>
          <div className="mobile-btns-apply-and-heart">
            <div className="apply-btn">
              Apply Now
            </div>
            <div className="heart-btn">
              <img src={heartIcon} style={{width: 13, height: 13}} />
            </div>
          </div>
        </div>
        <div className="job-in-bg-main-right">
          <img className="picOuterDiv" src={jobInsightsImg1} />
          {/* <div className="picOuterDiv"></div> */}
        </div>
      </div>
      <div className="job-insights-main-content">
        <div className="job-insights-main-content-left">
          {/* Socials */}
          <div className="job-insights-main-content-left-socials">
            <p>Share this job post</p>
            <div className="social-icon">
              <FaFacebookF />
            </div>
            <div className="social-icon">
              <FiTwitter />
            </div>
            <div className="social-icon">
              <RiLinkedinFill />
            </div>
          </div>
          <div>
              {documentToReactComponents(jobItem?.details, richTextOptions)}
          </div>

          {/* Form Here */}
          <br style={{ marginTop: "2rem" }} />
          <JobInsightsForm />
        </div>
        <div className="job-insights-main-content-right">
          <Link href={jobItem?.jobLink ?? ''}>
            <div style={{ background: "#0a66c2" }} className="btn">
              <Image src={LinkedInIcon} />
              <h3 style={{ color: "#fff" }}>Apply With LinkedIn</h3>
            </div>
          </Link>
          <br style={{ marginTop: "1rem" }} />
          <div style={{ background: "#F8F8F8" }} className="btn">
            <h3 style={{ color: "#000" }}>
              Save this job <span style={{ paddingRight: "0.2rem" }} />{" "}
              <BiHeart />
            </h3>
          </div>

          {/* Socials */}
          <div className="job-insights-main-content-right-socials">
            <p>Share this job post</p>
            <div className="social-icon">
              <FaFacebookF />
            </div>
            <div className="social-icon">
              <FiTwitter />
            </div>
            <div className="social-icon">
              <RiLinkedinFill />
            </div>
          </div>

          {/* Releated Jobs */}
          {/* <h1>Related Jobs</h1> */}
          {/* Single Card */}
          {/* <div className="job-insights-related-job-single">
            <div className="job-insights-related-job-single-left">
              <h3>Related Jobs</h3>
              <div className="job-insights-related-job-single-loc-type">
                <p>
                  <GrLocation className="locIcon" /> Remote
                </p>
                <p>
                  <BiTag className="tagIcon" /> Engineering
                </p>
              </div>
            </div>
            <div className="job-insights-related-job-single-right">
              <BiHeart />
            </div>
          </div> */}
          {/* Single Card */}
          {/* <div className="job-insights-related-job-single">
            <div className="job-insights-related-job-single-left">
              <h3>Related Jobs</h3>
              <div className="job-insights-related-job-single-loc-type">
                <p>
                  <GrLocation className="locIcon" /> Remote
                </p>
                <p>
                  <BiTag className="tagIcon" /> Engineering
                </p>
              </div>
            </div>
            <div className="job-insights-related-job-single-right">
              <BiHeart />
            </div>
          </div> */}
          {/* Single Card */}
          {/* <div className="job-insights-related-job-single">
            <div className="job-insights-related-job-single-left">
              <h3>Related Jobs</h3>
              <div className="job-insights-related-job-single-loc-type">
                <p>
                  <GrLocation className="locIcon" /> Remote
                </p>
                <p>
                  <BiTag className="tagIcon" /> Engineering
                </p>
              </div>
            </div>
            <div className="job-insights-related-job-single-right">
              <BiHeart />
            </div>
          </div> */}
        </div>
      </div>
      <AppAndPlayStoreFooter />
    </>
  );
};

export default JobInsightsMain;
