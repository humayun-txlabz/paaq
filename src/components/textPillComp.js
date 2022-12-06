import React from 'react'

const TextPillComponent = ({text, textSize}) => {
  const tSize = textSize ? {fontSize: textSize} : {};
  return (
    <div style={tSize} className="text-pill-component">
          <span>
            {text}
          </span>
    </div>
  )
}

export default TextPillComponent