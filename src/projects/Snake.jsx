import 'styles/projects/Snake.scss';
import { ThemeProvider } from '@emotion/react';
import { Checkbox, Radio, createMuiTheme, createTheme } from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const config = {
  width: 10,
  height: 10,
};

const Snake = () => {
  const [currDot, setCurrDot] = useState([4, 3]);
  const [snake, setSnake] = useState([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState('ArrowUp');
  const [prevKey, setPrevKey] = useState('ArrowUp');
  const [tick, setTick] = useState(1000);
  const ticker = useRef(null);
  const [timer, setTimer] = useState(0);
  const [playing, setPlaying] = useState(false);

  const isSnake = (x, y) => snake.some(([snX, snY]) => snX === x && snY === y);

  const findOkDot = useCallback(() => {
    while (true) {
      const thisX = Math.floor(Math.random() * config.width);
      const thisY = Math.floor(Math.random() * config.height);
      const intersectsSnake = snake.some(([x, y]) => x === thisX && y === thisY);
      const isSameAsOld = thisX === currDot[0] && thisY === currDot[1];
      if (!intersectsSnake && !isSameAsOld) return [thisX, thisY];
    }
  }, [snake, currDot]);

  const scrambleDot = useCallback(() => {
    setCurrDot(findOkDot());
  }, [findOkDot]);

  const nextSnakeMove = useCallback(() => {
    let nextDot = [snake[0][0], snake[0][1]];
    if (key === 'ArrowUp') nextDot[1]--;
    else if (key === 'ArrowLeft') nextDot[0]--;
    else if (key === 'ArrowRight') nextDot[0]++;
    else if (key === 'ArrowDown') nextDot[1]++;
    setPrevKey(key);
    return nextDot;
  }, [snake, key]);

  const startGame = () => {
    setPlaying(true);
    ticker.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, tick);
  };

  const stopGame = useCallback(() => {
    setPlaying(false);
    clearInterval(ticker.current);
  }, []);

  const isIntersect = useCallback(
    (points = [0, 0], nextDot = snake[0]) => {
      console.log(points, nextDot);
      const headX = nextDot[0];
      const headY = nextDot[1];
      if (headX === points[0] && headY === points[1]) {
        return true;
      } else return false;
    },
    [snake]
  );

  const isOut = () => {
    const headX = snake[0][0];
    const headY = snake[0][0];
    return headX < 0 || headX > config.width || headY < 0 || headY > config.height;
  };

  const checkLose = (nextDot = snake[0]) => {
    let intSelf = false;
    snake.slice(1).forEach(segment => {
      if (isIntersect(segment, nextDot)) intSelf = true;
    });
    return intSelf || isOut();
  };

  const lose = useCallback(() => {
    alert(`Game over. Score: ${score}`);
    stopGame();
  }, [stopGame, score]);

  useEffect(() => {
    if (!playing) return;

    const nextDot = nextSnakeMove();
    const willEat = isIntersect(currDot, nextDot);
    const body = willEat ? snake : snake.slice(0, -1);
    if (checkLose(nextDot)) return lose();

    setSnake([nextDot, ...body]);
    if (willEat) {
      setScore(prev => prev + 1);
      scrambleDot();
      setTick(prev => prev - 50);
    }
    if (checkLose()) {
      lose();
    }
  }, [playing, timer]);

  // cleanup?
  useEffect(() => () => stopGame(), []);

  /*
  TODOS:
  [ ] speed up logarithmically?
  [ ] clean up
  [ ] Out of bounds outage
  [ ] Intersection with final segment of tail mistake
  */

  return (
    <div
      className="Snake"
      onKeyDown={e => {
        if (
          (e.key === 'ArrowUp' && prevKey === 'ArrowDown') ||
          (e.key === 'ArrowLeft' && prevKey === 'ArrowRight') ||
          (e.key === 'ArrowRight' && prevKey === 'ArrowLeft') ||
          (e.key === 'ArrowDown' && prevKey === 'ArrowUp')
        )
          return;

        setKey(e.key);
      }}
    >
      <button onClick={scrambleDot}>Scramble</button>
      <button onClick={startGame}>Start</button>
      <button onClick={stopGame}>Stop</button>
      <h1>Time: {timer} </h1>
      <h2>Score: {score}</h2>

      {Array.from(Array(config.height)).map((x, idxY) => {
        return (
          <div style={{ display: 'flex' }} key={`row-${idxY}`}>
            {Array.from(Array(config.width)).map((y, idxX) => {
              if (idxX === currDot[0] && idxY === currDot[1])
                return (
                  <Radio
                    key={[idxX, idxY]}
                    className={`${isIntersect([idxX, idxY]) ? 'highlight' : ''}`}
                    checked={true}
                  />
                );

              return (
                <Checkbox
                  className={`${isIntersect([idxX, idxY]) ? 'highlight' : ''}`}
                  key={[idxX, idxY]}
                  checked={isSnake(idxX, idxY)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Snake;
