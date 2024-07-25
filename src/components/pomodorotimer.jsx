import React, { useState, useEffect } from 'react';
import '../style/pomodoro.css'; // Ensure this path is correct

const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60); // Initial time set to 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            // Timer ends
            clearInterval(interval);
            setIsActive(false);
            if (!isBreak) {
              // Switch to break time
              setIsBreak(true);
              setTime(5 * 60); // Set time for break (5 minutes)
            } else {
              // Reset time for work period
              setIsBreak(false);
              setTime(25 * 60); // Reset time for work (25 minutes)
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isActive, time, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const totalTime = isBreak ? 5 * 60 : 25 * 60;
  const progressPercentage = (time / totalTime) * 100;
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className='pomodoro-widget'>
      <h2>{isBreak ? 'Break Time' : 'Work Time'}</h2>
      <div className='timer'>
        {formatTime(time)}
      </div>
      <div className='progress-container'>
        <svg
          className='progress-circle'
          width={radius * 2 + strokeWidth}
          height={radius * 2 + strokeWidth}
          viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}
        >
          <circle
            className='progress-circle-background'
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            className='progress-circle-bar'
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            strokeWidth={strokeWidth}
            style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
          />
        </svg>
      </div>
      <div className='controls'>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => {
          setIsActive(false);
          setTime(isBreak ? 5 * 60 : 25 * 60);
        }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
