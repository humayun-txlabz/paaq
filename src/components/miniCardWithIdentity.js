import React from 'react';

const MiniCardWithIdentity = ({
     image,
     name,
     imageComponent,
     id,
     position,
     isButton,
     marginNameTop,
}) => {
     const marginOnNameTop = marginNameTop ? { paddingTop: marginNameTop } : {};

     return (
          <div className="mini-card-with-identity">
               <img src={image} />
               {name ? <h2 style={marginOnNameTop}>{name}</h2> : null}
               {id ? <p>{id}</p> : null}
               {position ? <h2>{position}</h2> : null}
               {isButton == false ? null : <div className="button-bottom">Follow</div>}
          </div>
     );
};

export default MiniCardWithIdentity