import Image from 'next/image';
import useWindowSize from 'Hooks/windowSize';


const InteractionCard = (props) => {
  const [width] = useWindowSize();

    const { alignImageRight, heading, detail, image, imageHeight, imageWidth, leftAbsolute, count, topAbsolute} = props;
  return (
    <div className="interaction-card-main" style={{ flexDirection: width < 760 ? 'column' : alignImageRight ? 'row' : 'row-reverse', background: count ? '#ffffff' : width > 760 ? '#F6F6F6' : '#ffffff' }}>
        <div className="interaction-card-left">
            <p className="interaction-card-left-heading">
                {heading}
            </p>
            <p className="interaction-card-left-text">
                {detail}
            </p>
        </div>

        <div className="interaction-card-right" style={{ justifyContent: alignImageRight }}>
            <Image src={image} width={imageWidth} height={imageHeight} />
            {count && 
            <span className="interaction-card-count" style={{ left: leftAbsolute, top: topAbsolute ? topAbsolute : "20%"}}>{count}</span>
            }
        </div>
    </div>
  );
};

export default InteractionCard;
