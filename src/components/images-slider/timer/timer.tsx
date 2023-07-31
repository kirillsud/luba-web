'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Seconds } from 'src/utils/units';
import styles from './timer.module.css';

export interface TimerProps {
  play: boolean;
  pause: boolean;
  duration: Seconds;
  finish: () => void;
}

export function Timer({ play, pause, duration, finish }: TimerProps) {
  const intervalId = useRef<NodeJS.Timer>();
  const [start, setStart] = useState(0 as Seconds);

  const startTimer = useCallback(
    (start = 0 as Seconds, force = false) => {
      const intervalStep = 0.05 as Seconds;

      if (pause && !force) {
        return;
      }

      clearInterval(intervalId.current);

      const newIntervalId = setInterval(() => {
        start = ((start + intervalStep) % duration) as Seconds;
        setStart(start as Seconds);

        if (start < intervalStep) {
          finish();
          clearInterval(newIntervalId);
        }
      }, intervalStep * 1000);

      intervalId.current = newIntervalId;
    },
    [duration, finish, pause]
  );

  const stopTimer = useCallback(() => {
    clearInterval(intervalId.current);
    setStart(0 as Seconds);
  }, []);

  const pauseTimer = useCallback(() => {
    clearInterval(intervalId.current);
  }, []);

  const resumeTimer = useCallback(() => {
    startTimer(start, true);
  }, [start, startTimer]);

  useEffect(() => () => clearInterval(intervalId.current), []);
  useEffect(
    () => (play ? startTimer(start) : stopTimer()),
    [play, start, startTimer, stopTimer]
  );
  useEffect(
    () => (pause ? pauseTimer() : resumeTimer()),
    [pause, pauseTimer, resumeTimer]
  );

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
