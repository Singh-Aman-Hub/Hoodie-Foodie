// client/src/pages/Home.js

import React from 'react';
import './Home.css'; // We'll create this next
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <h1>🍕 Welcome to FoodieFiesta 🍔</h1>
        <p>Your hunger ends here! Explore our delicious menu or recommend your own favorite dish.</p>

        <div className="home-buttons">
          <Link to="/menu" className="btn">View Menu</Link>
          <Link to="/recommend" className="btn btn-outline">Recommend a Dish</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
