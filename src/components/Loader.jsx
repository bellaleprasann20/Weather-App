import React from 'react';
import '../styles/weather.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="cloud">
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
        </div>
        <div className="rain">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p className="loader-text">Loading weather data...</p>
    </div>
  );
};

export default Loader;