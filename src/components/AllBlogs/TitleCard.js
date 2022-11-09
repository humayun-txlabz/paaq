import Image from "next/image";
import FbIcon from "../../assets/Icons/Facebook.svg";
import InstagramIcon from "../../assets/Icons/instagram.svg";
import LinkedinIcon from "../../assets/Icons/linkedin.svg";
import TwitterIcon from "../../assets/Icons/twitter.svg";

const TitleCard = (props) => {
  const { title } = props;

  return (
    <div className="title-card">
      <span className="title-card-heading">{title}</span>
      <div className="title-icons-container">
        <span className="share-text-blogs-page">SHARE</span>
        {/* <FbIcon /> */}
        <div className="facebook-icon">
          <Image src={FbIcon} width={52} height={52} />
        </div>
        <div className="facebook-icon">
          <Image src={InstagramIcon} width={52} height={52} />
        </div>
        <div className="facebook-icon">
          <Image src={TwitterIcon} width={52} height={52} />
        </div>
        <div className="facebook-icon">
          <Image src={LinkedinIcon} width={52} height={52} />
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
