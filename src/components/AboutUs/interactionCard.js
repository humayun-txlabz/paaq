import Image from 'next/image';
import useWindowSize from 'Hooks/windowSize';


const InteractionCard = ({alignImageRight, heading, detail,mobileclass, image, imageHeight, imageWidth, leftAbsolute, count, topAbsolute,textSection}) => {
  const [width] = useWindowSize();
    return (
    <div className="interaction-card-main">
        <div className='position-relative d-flex items-center justify-between grid-container-media-page-top gap-2 rounded-3' style={{flexDirection: width < 991 ? 'column' : alignImageRight ? 'row' : 'row-reverse', background: count ? '#ffffff' : width > 991 ? '#F6F6F6' : '#ffffff' }}>
          <div className="interaction-card-left" style={{paddingLeft:width > 991 && textSection && "4.5rem"}}>
              <p className="interaction-card-left-heading">
                  {heading}
              </p>
              <p className="interaction-card-left-text">
                  {detail}
              </p>
          </div>

          <div className={`${mobileclass} interaction-card-right object-fit`} style={{ justifyContent: alignImageRight }}>
            <div style={{position:"relative"}}>
                <Image src={image} width={imageWidth} height={imageHeight} />
                {count && 
                <span className={`${alignImageRight === 'end' ? "interaction-card-count-end" : "interaction-card-count"}`} style={{ top: topAbsolute ? 0 : "20%", transform:'transition(50%, 50%)', color:"#252F44"}}>{count}</span>
                }
            </div>
          </div>
        </div>
    </div>
  );
};

export default InteractionCard;
