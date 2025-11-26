import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SnakeGame from '../components/Game/SnakeGame';
import Leaderboard from '../components/Game/Leaderboard';
import './Game.css';

const Game = () => {
  const { language } = useLanguage();
  return (
    <div className="game-page-container">
      <div className="container">
        <h1 className="game-title">
          {language === 'kr' ? '찾아주셔서 감사합니다' : 'Thank you for visiting'}
        </h1>
        <p className="game-subtitle">
          {language === 'kr' 
            ? '잠깐 쉬어가며 미니게임을 즐겨보세요!' 
            : 'Take a break and enjoy a mini-game!'}
        </p>
        
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
