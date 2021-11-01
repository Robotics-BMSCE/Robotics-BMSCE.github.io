import React from 'react';
import './Home.css';
import Animated from './Animated';

const Home = () => {
    return (
        <div className="home-container">
            <Animated />
            <div className="not-animation">
                <h1 className="home-h1">BMSCE ROBOTICS CLUB</h1>
                <p className="home-p">Innovation lies in learning</p>
            </div>
        </div>
    );
};

export default Home;