import React from 'react';

const MiniCardWithIdentity = ({
     image,
     name,
     imageComponent,
     id,
     position,
     isButton,
     marginNameTop,
     buttonTextColor,
     buttonText,
}) => { 
     const marginOnNameTop = marginNameTop ? { paddingTop: marginNameTop } : {};
     const btnTextColor = buttonTextColor
          ? {
                 color: "#181F1F",
                 backgroundColor: "white",
                 border: "1px solid #9DACAC",
                 paddingLeft: "0.5rem",
                 paddingRight: "0.5rem",
                 
            }
          : {paddingLeft: "1rem",
          paddingRight: "1rem"};
     return (
          <div className="mini-card-with-identity">
               <img src={image} />
               {name ? <h2 style={marginOnNameTop}>{name}</h2> : null}
               {id ? <p>{id}</p> : null}
               {position ? <h3>{position}</h3> : null}
               {isButton == false ? null : (
                    <div style={btnTextColor} className="button-bottom">
                         {buttonText}
                    </div>
               )}
          </div>
     );
};

export default MiniCardWithIdentity