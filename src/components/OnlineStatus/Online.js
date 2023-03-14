/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
const Online = ({ width, height, left, bottom, display = "none" }) => {
  return (
    <div
      className="online-container"
      style={{
        width: width,
        height: height,
        left: left,
        bottom: bottom,
        display: display,
      }}
    >
      <div className="online-container-circle"></div>
    </div>
  );
};

export default Online;
