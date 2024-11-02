// src/Flag.js

import React, { useEffect, useState } from 'react';
import flagImage from './Assets/Items/Checkpoints/Checkpoint/Checkpoint (No Flag).png'; // Update the path

function Flag({ scale = 1 }) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frameCount = 1; // Number of frames in the sprite sheet
  const frameWidth = 256; // Width of each frame
  const frameHeight = 256; // Height of each frame
  const animationSpeed = 100; // Speed of animation in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frameCount);
    }, animationSpeed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [animationSpeed, frameCount]);

  return (
    <div
      style={{
        position: 'absolute',
        width: `${frameWidth * scale}px`,
        height: `${frameHeight * scale}px`,
        left: '80% ', // Adjust position as needed
        bottom: '14px',
        backgroundImage: `url(${flagImage})`,
        backgroundPosition: `-${currentFrame * frameWidth}px 0px`,
        backgroundSize: `${frameWidth * frameCount}px ${frameHeight}px`,
        imageRendering: 'pixelated',
      }}
    />
  );
}

export default Flag;
