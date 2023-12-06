import Image from 'next/image';
import useWindowSize from 'Hooks/windowSize';


const InteractionCard = (props) => {
  const [width] = useWindowSize();
console.log("props", props)
    const { alignImageRight, heading, detail, image, imageHeight, imageWidth, leftAbsolute, count, topAbsolute} = props;
  // console.log("alignImageRight==>", alignImageRight)
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
            <span className={`${props?.alignImageRight === 'end' ? "interaction-card-count-end" : "interaction-card-count"}`} style={{ left: '7%', top: topAbsolute ? 0 : "20%", transform:'transition(50%, 50%)', color:"#1E1E1E"}}>{count}</span>
            }
        </div>
    </div>
  );
};

export default InteractionCard;
