import React from 'react';

const MiniCardWithIdentity = ({image, name, id, position}) => {
  return (
       <div className="mini-card-with-identity">
            <img src={image} />
            <h2>{name}</h2>
            <p>{id}</p>
            <h2>{position}</h2>
            <div className="button-bottom">Follow</div>
       </div>
  );
}

export default MiniCardWithIdentity