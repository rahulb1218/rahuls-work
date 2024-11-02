// src/Platform.js

import React from 'react';
import { Body } from 'react-game-kit';

function Platform({ x, y, width, height }) {
  return (
    <Body
      args={[x, y, width, height]}
      shape="rectangle"
      isStatic={true}
      restitution={0}
      friction={1}
    >
      <div
        style={{
          position: 'absolute',
          width: `${width}px`,
          height: `${height}px`,
          left: `${x}px`,
          bottom: `${y}px`,
          backgroundColor: '#8B4513', // Brown color for the platform
        }}
      />
    </Body>
  );
}

export default Platform;
