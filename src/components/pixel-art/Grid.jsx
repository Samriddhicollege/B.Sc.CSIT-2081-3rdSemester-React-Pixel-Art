import React from 'react';
import Pixel from './Pixel';

function Grid({ grid, columns, onPixelClick, onPixelEnter }) {
  return (
    <div 
      className="pixel-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      }}
      // Prevent drag events from interfering with drawing
      onDragStart={(e) => e.preventDefault()}
    >
      {grid.map((color, index) => (
        <Pixel
          key={index}
          color={color}
          onPixelClick={() => onPixelClick(index)}
          onPixelEnter={(e) => onPixelEnter(e, index)}
        />
      ))}
    </div>
  );
}

export default Grid;
