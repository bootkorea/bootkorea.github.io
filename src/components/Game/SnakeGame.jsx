import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { saveScoreToFirebase } from '../../config/firebase';
import './SnakeGame.css';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: 0 };
const GAME_SPEED = 100;

const SnakeGame = () => {
  const { language } = useLanguage();
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [highScoreSaved, setHighScoreSaved] = useState(false);
  
  const gameLoopRef = useRef();

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    // Check if food spawns on snake
    const isOnSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
    if (isOnSnake) return generateFood();
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setGameOver(false);
    setIsPlaying(false);
    setHighScoreSaved(false);
    setFood(generateFood());
  };

  const startGame = () => {
    setIsPlaying(true);
    setDirection({ x: 1, y: 0 }); // Start moving right
  };

  const saveScore = async () => {
    if (!playerName.trim()) return;
    
    const newScore = { name: playerName, score, date: new Date().toISOString() };
    
    // Save to Firebase
    await saveScoreToFirebase(newScore);
    
    // 2. Save to LocalStorage (DISABLED: User requested Firebase only)
    // const existingScores = JSON.parse(localStorage.getItem('snake_scores') || '[]');
    // const updatedScores = [...existingScores, newScore]
    //   .sort((a, b) => b.score - a.score)
    //   .slice(0, 10); // Keep top 10
      
    // localStorage.setItem('snake_scores', JSON.stringify(updatedScores));
    setHighScoreSaved(true);
    
    // Trigger a custom event so Leaderboard can update (if it's listening to storage)
    window.dispatchEvent(new Event('storage'));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPlaying) return;
      
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, isPlaying]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Check collision with walls
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check collision with self
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((prev) => prev + 10);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameLoopRef.current);
  }, [direction, food, isPlaying, gameOver, generateFood]);

  const handleDirection = (newDirection) => {
    if (gameOver || !isPlaying) return;
    
    // Prevent reversing direction
    if (
      (newDirection.x === 1 && direction.x === -1) ||
      (newDirection.x === -1 && direction.x === 1) ||
      (newDirection.y === 1 && direction.y === -1) ||
      (newDirection.y === -1 && direction.y === 1)
    ) {
      return;
    }
    
    setDirection(newDirection);
  };

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const gameWidth = GRID_SIZE * CELL_SIZE;
      const availableWidth = Math.min(window.innerWidth - 40, 600); // 40px padding, max 600px container
      
      if (availableWidth < gameWidth) {
        setScale(availableWidth / gameWidth);
      } else {
        setScale(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Swipe handling
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const onTouchStart = (e) => {
    touchEndRef.current = null;
    touchStartRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  const onTouchMove = (e) => {
    touchEndRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distanceX = touchStartRef.current.x - touchEndRef.current.x;
    const distanceY = touchStartRef.current.y - touchEndRef.current.y;
    const minSwipeDistance = 30;

    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe) {
      if (Math.abs(distanceX) < minSwipeDistance) return;
      if (distanceX > 0) {
        // Swiped Left
        handleDirection({ x: -1, y: 0 });
      } else {
        // Swiped Right
        handleDirection({ x: 1, y: 0 });
      }
    } else {
      if (Math.abs(distanceY) < minSwipeDistance) return;
      if (distanceY > 0) {
        // Swiped Up
        handleDirection({ x: 0, y: -1 });
      } else {
        // Swiped Down
        handleDirection({ x: 0, y: 1 });
      }
    }
  };

  return (
    <div className="snake-game-container">
      <div className="game-header">
        <div className="score-display">{language === 'kr' ? '점수:' : 'Score:'} {score}</div>
      </div>

      <div className="game-board-wrapper" style={{ height: (GRID_SIZE * CELL_SIZE * scale) }}>
        <div 
          className="game-board" 
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ 
            width: GRID_SIZE * CELL_SIZE, 
            height: GRID_SIZE * CELL_SIZE,
            transform: `scale(${scale})`,
            transformOrigin: 'top center'
          }}
        >
          {snake.map((segment, index) => (
            <div
              key={index}
              className="snake-segment"
              style={{
                left: segment.x * CELL_SIZE,
                top: segment.y * CELL_SIZE,
                width: CELL_SIZE,
                height: CELL_SIZE,
              }}
            />
          ))}
          <div
            className="food"
            style={{
              left: food.x * CELL_SIZE,
              top: food.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
            }}
          />
          
          {!isPlaying && !gameOver && (
            <div className="game-overlay">
              <button className="start-btn" onClick={startGame}>
                {language === 'kr' ? '게임 시작' : 'Start Game'}
              </button>
              <p className="instructions">
                {language === 'kr' ? '방향키로 이동하세요' : 'Use arrow keys to move'}
              </p>
            </div>
          )}

          {gameOver && (
            <div className="game-overlay">
              <h2>{language === 'kr' ? '게임 오버!' : 'Game Over!'}</h2>
              <p>{language === 'kr' ? '당신의 점수:' : 'Your Score:'} {score}</p>
              
              {!highScoreSaved ? (
                <div className="save-score-form">
                  <input
                    type="text"
                    id="playerName"
                    name="playerName"
                    placeholder={language === 'kr' ? '이름을 입력하세요' : 'Enter your name'}
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    maxLength={10}
                  />
                  <button onClick={saveScore} disabled={!playerName.trim()}>
                    {language === 'kr' ? '점수 저장' : 'Save Score'}
                  </button>
                </div>
              ) : (
                <p className="saved-msg">
                  {language === 'kr' ? '점수가 저장되었습니다!' : 'Score saved!'}
                </p>
              )}
              
              <button className="restart-btn" onClick={resetGame}>
                {language === 'kr' ? '다시 하기' : 'Play Again'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="mobile-controls">
        <div className="control-row">
          <button className="control-btn up" onClick={() => handleDirection({ x: 0, y: -1 })}>▲</button>
        </div>
        <div className="control-row">
          <button className="control-btn left" onClick={() => handleDirection({ x: -1, y: 0 })}>◀</button>
          <button className="control-btn down" onClick={() => handleDirection({ x: 0, y: 1 })}>▼</button>
          <button className="control-btn right" onClick={() => handleDirection({ x: 1, y: 0 })}>▶</button>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
