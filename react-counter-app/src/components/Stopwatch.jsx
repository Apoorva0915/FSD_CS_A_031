import React, { useEffect, useState } from 'react';
import './Home.css'; 

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]); 

    const handleStart = () => {
        setIsRunning(prev => !prev);
    };

    const handleRestart = () => {
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="stopwatch-container">
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(time)}</p>
            <button onClick={handleStart}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={handleRestart}>Reset</button>
        </div>
    );
};

export default Stopwatch;