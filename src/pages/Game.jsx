import React from 'react';
import SnakeGame from '../components/Game/SnakeGame';
import Leaderboard from '../components/Game/Leaderboard';
import './Game.css';

const Game = () => {
  return (
    <div className="game-page-container">
      <div className="container">
        <h1 className="game-title">찾아주셔서 감사합니다</h1>
        <p className="game-subtitle">잠깐 쉬어가며 미니게임을 즐겨보세요!</p>
        
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
