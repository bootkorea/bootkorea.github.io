import React from 'react';
import SnakeGame from '../components/Game/SnakeGame';
import Leaderboard from '../components/Game/Leaderboard';
import './Game.css';

const Game = () => {
  return (
    <div className="game-page-container">
      <div className="container">
        <h1 className="game-title">Enjoy & Relax</h1>
        <p className="game-subtitle">Take a break and play a classic game of Snake!</p>
        
        <div className="game-layout">
          <div className="game-section">
            <SnakeGame />
          </div>
          <div className="leaderboard-section">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
