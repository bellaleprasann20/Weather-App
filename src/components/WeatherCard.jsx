import React from 'react';
import '../styles/weather.css';

const WeatherCard = ({ weather }) => {
  const { name, sys, main, weather: weatherData } = weather;
  
  const weatherCondition = weatherData[0].main.toLowerCase();
  const weatherDescription = weatherData[0].description;
  const temperature = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  
  // Get weather icon from OpenWeatherMap
  const iconCode = weatherData[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  
  // Format date
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <div className="location-info">
          <h1 className="city-name">
            {name}, {sys.country}
          </h1>
          <p className="date">{formattedDate}</p>
        </div>
      </div>

      <div className="weather-main">
        <div className="weather-icon-container">
          <img 
            src={iconUrl} 
            alt={weatherDescription}
            className="weather-icon-main"
          />
        </div>
        
        <div className="temperature-container">
          <div className="temperature">
            <span className="temp-value">{temperature}</span>
            <span className="temp-unit">°C</span>
          </div>
          <p className="weather-description">{weatherDescription}</p>
          <p className="feels-like">Feels like {feelsLike}°C</p>
        </div>
      </div>

      <div className="weather-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-label">Min Temp</span>
            <span className="stat-value">{Math.round(main.temp_min)}°C</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-label">Max Temp</span>
            <span className="stat-value">{Math.round(main.temp_max)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;