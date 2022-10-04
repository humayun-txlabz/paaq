import React from 'react'

const TextPillComponent = ({text, textSize}) => {
  const tSize = textSize ? {fontSize: textSize} : {};
  return (
    <div style={tSize} className="text-pill-component">
          {text}
    </div>
  )
}

export default TextPillComponent