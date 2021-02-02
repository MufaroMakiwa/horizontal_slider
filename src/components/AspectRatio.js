import React from 'react';
import "./AspectRatio.css";

const AspectRatio = (child) => {

  return (
    <div className="AspectRatio-4x3">
      <div className="AspectRatio-4x3-innerWrapper">{child}</div>
    </div>
  )
}

export default AspectRatio;
