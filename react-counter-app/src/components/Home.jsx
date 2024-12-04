import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container"> 
        <h1>Welcome to my home page</h1>
        <ul>
            <li><Link to="/counter">CounterApp</Link></li>
            <li><Link to="/stopwatch">StopWatch App</Link></li>
        </ul>
    </div>
  );
}

export default Home;