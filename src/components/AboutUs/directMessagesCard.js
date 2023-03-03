import React from 'react';
import Image from 'next/image';
import DmImage from '../../assets/about/dm-image.png';

const DirectMessagesCard = () => {

  return (
    <div className="dm-card-main">
      <div className="dm-card-upper">
        <div className="dm-card-upper-left">
          <p className="dm-card-upper-left-text">01</p>
        </div>
        <div className="dm-card-upper-right">
          <p className="dm-card-upper-right-text">
            Millions of direct messages are sent daily
          </p>
        </div>
      </div>
      <div className="dm-card-lower">
        <p className="dm-card-lower-text">
          Millions of direct messages are sent daily to people on social media
          asking for information about various topics. However, it has become
          increasingly challenging to respond to every one of these messages,
          especially if the question is technical.
        </p>
      </div>
      <div className="dm-card-image">
        <Image src={DmImage} width={308} height={484} />
      </div>
    </div>
  );
};

export default DirectMessagesCard;
