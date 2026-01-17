# Weather Application

A responsive weather application that provides current weather conditions and forecasts for any location worldwide using real-time weather data.

## Features

- Current weather conditions display
- 5-day weather forecast
- Search by city name
- Geolocation support for automatic location detection
- Temperature in Celsius and Fahrenheit
- Wind speed, humidity, and pressure information
- Weather icons and animations
- Beautiful UI with dynamic backgrounds based on weather conditions
- Responsive design for all devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Weather API (OpenWeatherMap / WeatherAPI)
- Geolocation API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather.git
```

2. Navigate to the project directory:
```bash
cd weather
```

3. Get your API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Copy your API key

4. Create a `config.js` file:
```javascript
const API_KEY = 'your_api_key_here';
```

5. Open `index.html` in your browser

## Usage

1. Enter a city name in the search box
2. Press Enter or click the search button
3. View current weather and forecast
4. Click the location icon to use your current location

## API Used

This project uses the OpenWeatherMap API:
- Current Weather Data
- 5 Day / 3 Hour Forecast

## Project Structure

```
weather/
├── index.html
├── style.css
├── script.js
├── config.js
├── assets/
│   └── icons/
└── README.md
```

## Screenshots

Add screenshots of your application here.

## Future Enhancements

- Hourly forecast
- Weather alerts and notifications
- Multiple location tracking
- Historical weather data
- Air quality index

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

MIT License

## Acknowledgments

- Weather data provided by OpenWeatherMap
- Icons from [source]

---

**Commit Message:** `docs: add README with API setup and usage instructions for weather app`