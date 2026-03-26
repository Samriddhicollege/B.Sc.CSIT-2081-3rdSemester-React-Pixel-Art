import React from 'react';

function Pixel({ color, onPixelClick, onPixelEnter }) {
  // Requirement 3: Event handling (onClick, onMouseEnter custom logic)
  return (
    <div
      className="pixel"
      style={{ backgroundColor: color || 'transparent' }}
      onMouseDown={onPixelClick}
      onMouseEnter={onPixelEnter}
    ></div>
  );
}

export default Pixel;
