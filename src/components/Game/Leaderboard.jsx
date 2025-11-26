import React, { useState, useEffect } from 'react';
import { subscribeToTopScores } from '../../config/firebase';
import './Leaderboard.css';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Subscribe to Firebase updates
    const unsubscribe = subscribeToTopScores((newScores) => {
      setScores(newScores);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="leaderboard-container">
      <h3>🏆 순위표</h3>
      {scores.length === 0 ? (
        <p className="no-scores">아직 기록이 없습니다. 첫 번째 도전자가 되어보세요!</p>
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
