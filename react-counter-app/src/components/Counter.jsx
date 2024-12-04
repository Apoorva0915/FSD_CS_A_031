import React, { useEffect, useState } from 'react';
import './Home.css'; 

const Counter = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    useEffect(() => {
        setCount1(count * 5);
    }, [count]);

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <div className="counter-value">Counter1: {count}</div>
            <div className="counter-value">Counter2: {count1}</div>
            <button id="inc" onClick={handleIncrement}>Increment</button>
            <button id="dec" onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;