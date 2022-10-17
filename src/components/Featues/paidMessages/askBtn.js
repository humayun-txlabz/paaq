import React from 'react'

const AskButtonComponent = ({height, fontSize, style}) => {
          const ifHeight = height ? {height: height} : {};
          const ifFontSize = fontSize ? {fontSize: fontSize} : {};
  return (
       <div style={ifHeight} className="inner-ask-button-fl">
            <h1 style={{ifFontSize, ...style}}>Ask</h1>
       </div>
  );
}

export default AskButtonComponent