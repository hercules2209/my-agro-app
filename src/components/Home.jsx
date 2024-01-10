import React from 'react';
import './Home.css';

function Home() {


  return (
    <div className="Home">
      <h1 className="Home-title">Grow Smarter, Grow Happier</h1>

      <div className="About" >
        <h2 className="About-title">Unlocking Nature's Secrets with AI</h2>
        <p className="About-text">
          Whether you're a seasoned farmer or nurturing your first seedling, we're here to help you cultivate success. Our AI-powered app bridges the gap between cutting-edge technology and everyday gardening, empowering you to make informed decisions and achieve bountiful yields.
        </p>

        <div className="Features">
          <h3 className="Features-title">Your Green Thumb's Best Friend</h3>
          <ul className="Features-list">
            <li>
              <i className="fas fa-seedling"></i>
              Personalized Crop Recommendations
            </li>
            <li>
              <i className="fas fa-robot"></i>
              Friendly Chatbot Explains the Science
            </li>
            <li>
              <i className="fas fa-camera"></i>
              Instant Plant Disease Diagnosis
            </li>
            <li>
              <i className="fas fa-shopping-cart"></i>
              Integrated Marketplace for Seeds & Tools
            </li>
            <li>
              <i className="fas fa-leaf"></i>
              Access to Government Subsidies (Farmers)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
