import Image from "next/image";
import FbIcon from "../../assets/Icons/Facebook.svg";
import InstagramIcon from "../../assets/Icons/instagram.svg";
import LinkedinIcon from "../../assets/Icons/linkedin.svg";
import TwitterIcon from "../../assets/Icons/twitter.svg";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { useRouter } from "next/router";

const TitleCard = (props) => {
  const { title } = props;
  const router = useRouter();
  const { asPath } = router;
  console.log("router", asPath)
  const shareUrl = 'https://paaq.app'+asPath;
  const caption = 'Check out this awesome photo!';

  const handleInstagramShare = () => {
    const instagramUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
      shareUrl
    )}&caption=${encodeURIComponent(caption)}`;

    // Open a new window or redirect the current one to the Instagram share URL
    window.open(instagramUrl, '_blank');
  };
  return (
    <div className="title-card" style={{flexDirection: title === ''? 'row-reverse': ''}}>
      <span className="title-card-heading">{title}</span>
      <div className="title-icons-container">
        <span className="share-text-blogs-page">SHARE</span>
        {/* <FbIcon /> */}
        <div className="facebook-icon" >
          <FacebookShareButton url={shareUrl}>
            <Image src={FbIcon} width={52} height={52} />
          </FacebookShareButton>
        </div>
        {/* <div className="facebook-icon" onClick={handleInstagramShare}>
          <Image src={InstagramIcon} width={52} height={52} />
        </div> */}
        <div className="facebook-icon">
          <TwitterShareButton url={shareUrl}>
            <Image src={TwitterIcon} width={52} height={52} />
          </TwitterShareButton>
        </div>
        <div className="facebook-icon">
        <LinkedinShareButton url={shareUrl}>
          <Image src={LinkedinIcon} width={52} height={52} />
          </LinkedinShareButton>
        </div>
        {/* <Image src={InstagramIcon} alt='' />
            <Image src={TwitterIcon} alt='' />
            <Image src={LinkedinIcon} alt='' /> */}
      </div>
    </div>
  );
};

const styles = {
  titleCard: {
    display: "flex",
    margin: "0px 90px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleCardHeading: {
    fontSize: 80,
    fontWeight: 600,
    fontFamily: "Sofia-Pro",
    margin: "50px 0px",
  },
  titleIconsContainer: {
    display: "flex",
    alignItems: "center",
  },
  shareIcon: {
    marginLeft: 20,
  },
};

export default TitleCard;
