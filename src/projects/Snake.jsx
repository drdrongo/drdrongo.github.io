import { ThemeProvider } from '@emotion/react';
import { Checkbox, Radio, createMuiTheme, createTheme } from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const config = {
  width: 10,
  height: 10,
};

const Snake = () => {
  const [currDot, setCurrDot] = useState([0, 0]);

  const [snake, setSnake] = useState([
    [5, 5],
    [5, 6],
    [5, 7],
  ]);

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

  const scrambleDot = () => {
    setCurrDot(findOkDot());
  };

  const moveSnake = () => {
    setSnake(prev => {
      let nextDot = [prev[0][0], prev[0][1]];
      if (key === 'ArrowUp') {
        nextDot[1]--;
      } else if (key === 'ArrowLeft') {
        nextDot[0]--;
      } else if (key === 'ArrowRight') {
        nextDot[0]++;
      } else if (key === 'ArrowDown') {
        nextDot[1]++;
      }

      setPrevKey(key);

      return [nextDot, ...prev.slice(0, -1)];
    });
  };

  const [key, setKey] = useState('ArrowUp');
  const [prevKey, setPrevKey] = useState('ArrowUp');

  const ticker = useRef(null);
  const [timer, setTimer] = useState(0);
  const startGame = () => {
    ticker.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    moveSnake();
  }, [timer]);

  useEffect(() => {
    return () => reset();
  }, []);

  const reset = () => {
    clearInterval(ticker.current);
  };

  useEffect(() => {
    setInterval(() => {});
  }, []);

  /*
  TODOS:
  [ ] Ensure user can't just go backwards
  [ ] enable eating the food
  [ ] speed up gradually
  [ ] clean up
  */

  return (
    <div onKeyDown={e => setKey(e.key)}>
      <button onClick={scrambleDot}>Scramble</button>
      <button onClick={startGame}>Start</button>
      <button onClick={reset}>Stop</button>
      <h1>{timer} </h1>

      {Array.from(Array(config.height)).map((x, idxY) => {
        return (
          <div style={{ display: 'flex' }} key={`row-${idxY}`}>
            {Array.from(Array(config.width)).map((y, idxX) => {
              if (idxX === currDot[0] && idxY === currDot[1])
                return <Radio key={[idxX, idxY]} style={{ backgroundColor: 'rgba(256, 255, 0, 0.3' }} checked={true} />;

              return <Checkbox key={[idxX, idxY]} checked={isSnake(idxX, idxY)} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Snake;
