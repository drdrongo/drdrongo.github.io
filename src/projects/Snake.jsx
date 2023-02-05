import { Checkbox, Radio } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';

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

  return (
    <div>
      <button onClick={scrambleDot}>Scramble</button>

      {Array.from(Array(config.height)).map((x, idxY) => {
        return (
          <div style={{ display: 'flex' }}>
            {Array.from(Array(config.width)).map((y, idxX) => {
              if (idxX === currDot[0] && idxY === currDot[1]) return <Radio checked={true} style={{ color: 'pink' }} />;

              return <Checkbox checked={isSnake(idxX, idxY)} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Snake;
