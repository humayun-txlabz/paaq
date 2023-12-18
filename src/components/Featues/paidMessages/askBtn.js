import React from 'react'

const AskButtonComponent = ({height, fontSize, style}) => {
          const ifHeight = height ? {height: height} : {};
          const ifFontSize = fontSize ? {fontSize: fontSize} : {};
  return (
       <div style={{ifHeight, ifFontSize, ...style}} className="inner-ask-button-fl">
            <h1 >Ask</h1>
       </div>
  );
}

export default AskButtonComponent