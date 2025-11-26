import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { subscribeToTopScores } from '../../config/firebase';
import './Leaderboard.css';

const Leaderboard = () => {
  const { language } = useLanguage();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    console.log('%c[Leaderboard] MOUNTED - Version: Firebase-Only-Top7-v3', 'background: #222; color: #bada55; font-size: 12px');
    console.log('[Leaderboard] Clearing local storage...');
    // Clear local storage cache as requested
    localStorage.removeItem('snake_scores');

    // Subscribe to Firebase updates (Firebase ONLY)
    const unsubscribe = subscribeToTopScores((newScores) => {
      setScores(newScores || []);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="leaderboard-container">
      <h3>{language === 'kr' ? '🏆 순위표' : '🏆 Leaderboard'}</h3>
      {scores.length === 0 ? (
        <p className="no-scores">
          {language === 'kr' 
            ? '아직 기록이 없습니다. 첫 번째 도전자가 되어보세요!' 
            : 'No records yet. Be the first challenger!'}
        </p>
      ) : (
        <ul className="score-list">
          {scores.map((entry, index) => (
            <li key={index} className="score-item">
              <span className="rank">#{index + 1}</span>
              <span className="player-name">{entry.name}</span>
              <span className="player-score">{entry.score}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Leaderboard;
