// ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ imageUrl, text }) => {
  return (
    <div>
      {/* Use the provided imageUrl prop */}
      <img
        src={imageUrl}
        alt={`Example ${text}`}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ExampleCarouselImage;
