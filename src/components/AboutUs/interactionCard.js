import Image from 'next/image';


const InteractionCard = (props) => {
    const { alignImageRight, heading, detail, image, imageHeight, imageWidth, leftAbsolute, count} = props;
  return (
    <div className="interaction-card-main" style={{ flexDirection: alignImageRight ? 'row' : 'row-reverse', background: count ? '#ffffff' : '#F6F6F6' }}>
        <div className="interaction-card-left">
            <p className="interaction-card-left-heading">
                {heading}
            </p>
            <p className="interaction-card-left-text">
                {detail}
            </p>
        </div>

        <div className="interaction-card-right" style={{ justifyContent: alignImageRight ? 'end' : 'start' }}>
            <Image src={image} width={imageWidth} height={imageHeight} />
            {count &&
            <span className="interaction-card-count" style={{ left: leftAbsolute }}>{count}</span>
            }
        </div>
    </div>
  );
};

export default InteractionCard;
