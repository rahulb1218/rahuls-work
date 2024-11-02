// src/Character.js

import React, { useEffect, useState } from 'react';
import idleImage from './Assets/Main Characters/Pink Man/Idle (32x32).png';
import walkImage from './Assets/Main Characters/Pink Man/Run (32x32).png';
import jumpImage from './Assets/Main Characters/Pink Man/Jump (32x32).png';

function Character({ scale = 1, onReachFlag, onReachPortal }) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animationState, setAnimationState] = useState('idle'); // 'idle', 'walk', 'jump'
  const [spriteSheet, setSpriteSheet] = useState(idleImage);
  const [frameCount, setFrameCount] = useState(11); // Number of frames in the current sprite sheet
  const frameWidth = 128;
  const frameHeight = 128;
  const animationSpeed = 100; // Animation speed in milliseconds

  const [position, setPosition] = useState({ x: 100, y: 64 }); // Initial position
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [keys, setKeys] = useState({});
  const [direction, setDirection] = useState('right'); // 'left' or 'right'

  const gravity = -0.5; // Gravity pulls the character down (negative value)
  const moveSpeed = 5;
  const jumpSpeed = 20;
  const floorY = 64; // Y-position of the floor

  // Handle key presses
  useEffect(() => {
    function handleKeyDown(e) {
      setKeys((prevKeys) => ({ ...prevKeys, [e.key.toLowerCase()]: true }));
    }

    function handleKeyUp(e) {
      setKeys((prevKeys) => ({ ...prevKeys, [e.key.toLowerCase()]: false }));
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Update position based on keys pressed
  useEffect(() => {
    const interval = setInterval(() => {
      let newVelocity = { ...velocity };
      let newPosition = { ...position };
      let newAnimationState = animationState;

      // Horizontal movement
      if (keys['a'] || keys['arrowleft']) {
        newVelocity.x = -moveSpeed;
        newAnimationState = 'walk';
        setDirection('left');
      } else if (keys['d'] || keys['arrowright']) {
        newVelocity.x = moveSpeed;
        newAnimationState = 'walk';
        setDirection('right');
      } else {
        newVelocity.x = 0;
        if (newVelocity.y === 0) {
          newAnimationState = 'idle';
        }
      }

      // Jumping
      if ((keys['w'] || keys[' '] || keys['arrowup']) && newVelocity.y === 0 && newPosition.y === floorY) {
        newVelocity.y = jumpSpeed; // Set upward velocity
        newAnimationState = 'jump';
      }

      // Apply gravity
      newVelocity.y += gravity; // Gravity decreases y-velocity

      // Update position
      newPosition.x += newVelocity.x;
      newPosition.y += newVelocity.y;

      // Prevent falling below floor
      if (newPosition.y <= floorY) {
        newPosition.y = floorY;
        newVelocity.y = 0;
        if (newVelocity.x === 0) {
          newAnimationState = 'idle';
        } else {
          newAnimationState = 'walk';
        }
      } else if (newVelocity.y < 0) {
        newAnimationState = 'jump';
      }

      setVelocity(newVelocity);
      setPosition(newPosition);
      setAnimationState(newAnimationState);
      const portalX = window.innerWidth - 50; // Adjust based on portal size
      const portalY = 400; // Adjust to match platform position
      
      if (position.x >= portalX && position.y >= portalY) {
        onReachPortal(); // Call the function to trigger the page transition
      }
      // Check for reaching the flag
      const FLAG_X_POSITION = window.innerWidth * 0.8; // 80% from the left of the screen

      if (onReachFlag && newPosition.x >= FLAG_X_POSITION) {
          onReachFlag();
      }
      
    }, 16); // Approximately 60 FPS

    return () => clearInterval(interval);
  }, [keys, position, velocity, animationState, onReachFlag]);

  // Update sprite sheet and frame count based on animation state
  useEffect(() => {
    switch (animationState) {
      case 'idle':
        setSpriteSheet(idleImage);
        setFrameCount(11); // Number of frames in Idle sprite sheet
        break;
      case 'walk':
        setSpriteSheet(walkImage);
        setFrameCount(12); // Number of frames in Walk sprite sheet
        break;
      case 'jump':
        setSpriteSheet(jumpImage);
        setFrameCount(1); // Number of frames in Jump sprite sheet
        break;
      default:
        setSpriteSheet(idleImage);
        setFrameCount(11);
    }
    setCurrentFrame(0); // Reset animation to first frame
  }, [animationState]);

  // Handle animation frames
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frameCount);
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [animationSpeed, frameCount]);

  return (
    <div
      style={{
        position: 'absolute',
        width: `${frameWidth * scale}px`,
        height: `${frameHeight * scale}px`,
        left: `${position.x}px`,
        bottom: `${position.y}px`,
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: `-${currentFrame * frameWidth}px 0px`,
        backgroundSize: `${frameWidth * frameCount}px ${frameHeight}px`,
        imageRendering: 'pixelated',
        transform: direction === 'left' ? 'scaleX(-1)' : 'none',
        transformOrigin: 'center',
      }}
    />
  );
}

export default Character;
