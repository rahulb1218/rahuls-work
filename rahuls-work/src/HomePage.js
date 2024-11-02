// src/HomePage.js

import React, { useState } from 'react';
import { Loop, Stage, World } from 'react-game-kit';
import Character from './Character';
import Flag from './Flag';
import Platform from './Platform';
import './HomePage.css';

function HomePage({ gameStarted, setGameStarted }) {
  const [portalActive, setPortalActive] = useState(false);

  // Function to trigger page transition
  const handlePortalEnter = () => {
    setPortalActive(true);
    setTimeout(() => {
      // Redirect to another page after fade animation
      window.location.href = '/Education'; // Update this to your next page's route
    }, 1000); // Duration of the fade animation (in milliseconds)
  };

  return (
    <div className={`home-container ${portalActive ? 'fade-out' : ''}`}>
      {(
        <div className="name">
          <h1 style={{ marginBottom: '30px' }}>
            Hello,
            <br />
            My name is Rahul.
          </h1>
          <p>Use the navigation bar to explore different sections.</p>
          <br />
          <p style={{ marginBottom: '100px' }}>
            Alternatively, use WASD and the spacebar to control the character.
          </p>
        </div>
      )}

      <Loop>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <World>
            <Character
              onReachFlag={() => setGameStarted(true)}
              onReachPortal={handlePortalEnter} // Detect when the character reaches the portal
            />
            <Flag />
            {gameStarted && (
              <Platform x={600} y={400} width={200} height={20} />
            )}

            {/* Invisible Portal on the right side */}
            {gameStarted && (
              <div
                className="portal"
                style={{
                  position: 'absolute',
                  width: '50px',
                  height: '100px',
                  right: '0px',
                  top: '400px',
                  backgroundColor: 'transparent', // Keep it invisible
                  border: '2px dashed transparent', // Optional: Add a dashed border for development
                }}
              ></div>
            )}
          </World>
        </Stage>
      </Loop>

      <div className="home-floor"></div>
    </div>
  );
}

export default HomePage;
