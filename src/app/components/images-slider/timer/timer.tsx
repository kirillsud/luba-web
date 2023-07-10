import { useEffect, useState } from 'react';
import { Seconds } from 'src/app/utils/units';

import styles from './timer.module.css';

export interface TimerProps {
  play: boolean;
  pause: boolean;
  duration: Seconds;
  finish: () => void;
}

export function Timer({ play, pause, duration, finish }: TimerProps) {
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [start, setStart] = useState(0 as Seconds);

  useEffect(() => () => clearInterval(intervalId), []);
  useEffect(() => (play ? startTimer(start) : stopTimer()), [play]);
  useEffect(() => (pause ? pauseTimer() : resumeTimer()), [pause]);

  function startTimer(start: Seconds = 0 as Seconds, force = false) {
    const intevalStep: Seconds = 0.05 as Seconds;

    if (pause && !force) {
      return;
    }

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      start = ((start + intevalStep) % duration) as Seconds;
      setStart(start as Seconds);

      if (start < intevalStep) {
        finish();
        clearInterval(newIntervalId);
      }
    }, intevalStep * 1000);

    setIntervalId(newIntervalId);
  }

  function stopTimer() {
    clearInterval(intervalId);
    setStart(0 as Seconds);
  }

  function pauseTimer() {
    clearInterval(intervalId);
  }

  function resumeTimer() {
    startTimer(start, true);
  }

  const startClass = play ? styles['play'] : '';
  const pauseClass = pause ? styles['pause'] : '';
  const style = { '--duration': duration } as React.CSSProperties;

  return (
    <div
      className={`${styles['container']} ${startClass} ${pauseClass}`}
      style={style}
    ></div>
  );
}

export default Timer;
