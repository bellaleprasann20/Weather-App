import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import WeatherCard from '../components/WeatherCard';
import WeatherDetails from '../components/WeatherDetails';
import Loader from '../components/Loader';
import { getWeatherByCity, getWeatherByCoords } from '../services/weatherApi';
import { getWeatherTheme } from '../utils/getWeatherTheme';
import '../styles/global.css';
import '../styles/weather.css';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('clear');

  // Load default city weather on component mount
  useEffect(() => {
    fetchWeatherByCity('Bhalki');
  }, []);

  // Update theme when weather changes
  useEffect(() => {
    if (weather) {
      const weatherCondition = weather.weather[0].main.toLowerCase();
      const newTheme = getWeatherTheme(weatherCondition);
      setTheme(newTheme);
      document.body.className = `theme-${newTheme}`;
    }
  }, [weather]);

  const fetchWeatherByCity = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (coords) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getWeatherByCoords(coords.lat, coords.lon);
      setWeather(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city, coords) => {
    if (coords) {
      fetchWeatherByCoords(coords);
    } else if (city) {
      fetchWeatherByCity(city);
    }
  };

  return (
    <div className={`home-container theme-${theme}`}>
      <div className="background-overlay"></div>
      
      <div className="content-wrapper">
        <header className="app-header">
          <h1 className="app-title">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="app-icon"
            >
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
            Weather 
          </h1>
          <p className="app-subtitle">Get real-time weather updates for any location</p>
        </header>

        <SearchBox onSearch={handleSearch} loading={loading} />

        {loading && <Loader />}

        {error && (
          <div className="error-container">
            <div className="error-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="error-title">Oops! Something went wrong</h3>
            <p className="error-message">{error}</p>
            <button 
              className="retry-btn" 
              onClick={() => fetchWeatherByCity('London')}
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && weather && (
          <div className="weather-content">
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </div>
        )}

        {!loading && !error && !weather && (
          <div className="welcome-container">
            <div className="welcome-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </div>
            <h2 className="welcome-title">Welcome to Weather App</h2>
            <p className="welcome-text">Search for a city to get started or use your current location</p>
          </div>
        )}
      </div>

      <footer className="app-footer">
        <p>Powered by OpenWeatherMap API</p>
      </footer>
    </div>
  );
};

export default Home;