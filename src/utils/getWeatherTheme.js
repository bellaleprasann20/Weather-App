/**
 * Get weather theme based on weather condition
 * @param {string} weatherCondition - Weather condition from API (e.g., 'clear', 'rain', 'clouds')
 * @returns {string} Theme name
 */
export const getWeatherTheme = (weatherCondition) => {
  const condition = weatherCondition.toLowerCase();
  
  // Map weather conditions to themes
  const themeMap = {
    // Clear weather
    'clear': 'clear',
    'sunny': 'clear',
    
    // Cloudy weather
    'clouds': 'clouds',
    'cloudy': 'clouds',
    'overcast': 'clouds',
    'partly cloudy': 'clouds',
    
    // Rainy weather
    'rain': 'rain',
    'drizzle': 'rain',
    'shower': 'rain',
    'light rain': 'rain',
    'moderate rain': 'rain',
    'heavy rain': 'rain',
    
    // Snowy weather
    'snow': 'snow',
    'sleet': 'snow',
    'light snow': 'snow',
    'heavy snow': 'snow',
    
    // Thunderstorm
    'thunderstorm': 'thunder',
    'thunder': 'thunder',
    'storm': 'thunder',
    
    // Atmospheric conditions
    'mist': 'clouds',
    'fog': 'clouds',
    'haze': 'clouds',
    'smoke': 'clouds',
    'dust': 'clouds',
    'sand': 'clouds',
    'ash': 'clouds',
    'squall': 'clouds',
    'tornado': 'thunder'
  };
  
  // Return matching theme or default to 'clear'
  return themeMap[condition] || 'clear';
};

/**
 * Get background gradient based on theme
 * @param {string} theme - Theme name
 * @returns {string} CSS gradient string
 */
export const getThemeGradient = (theme) => {
  const gradients = {
    clear: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    clouds: 'linear-gradient(135deg, #a8b8d8 0%, #7f8c9f 100%)',
    rain: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
    snow: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
    thunder: 'linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%)'
  };
  
  return gradients[theme] || gradients.clear;
};

/**
 * Get weather icon emoji based on condition
 * @param {string} weatherCondition - Weather condition
 * @returns {string} Emoji icon
 */
export const getWeatherEmoji = (weatherCondition) => {
  const condition = weatherCondition.toLowerCase();
  
  const emojiMap = {
    'clear': '☀️',
    'sunny': '☀️',
    'clouds': '☁️',
    'cloudy': '☁️',
    'rain': '🌧️',
    'drizzle': '🌦️',
    'snow': '❄️',
    'thunderstorm': '⛈️',
    'thunder': '⚡',
    'mist': '🌫️',
    'fog': '🌫️',
    'haze': '🌫️'
  };
  
  return emojiMap[condition] || '🌤️';
};

/**
 * Get time of day
 * @returns {string} 'morning', 'afternoon', 'evening', or 'night'
 */
export const getTimeOfDay = () => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
};

/**
 * Get greeting based on time of day
 * @returns {string} Greeting message
 */
export const getGreeting = () => {
  const timeOfDay = getTimeOfDay();
  
  const greetings = {
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    night: 'Good Night'
  };
  
  return greetings[timeOfDay];
};