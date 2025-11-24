import React, { useState, useEffect } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  const loadScores = () => {
    const savedScores = JSON.parse(localStorage.getItem('snake_scores') || '[]');
    setScores(savedScores);
  };

  useEffect(() => {
    loadScores();

    // Listen for storage updates (from SnakeGame component)
    const handleStorageChange = () => {
      loadScores();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="leaderboard-container">
      <h3>🏆 Hall of Fame</h3>
      {scores.length === 0 ? (
        <p className="no-scores">No scores yet. Be the first!</p>
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
