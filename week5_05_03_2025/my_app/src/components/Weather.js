import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"
import "./weather.css"
const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState('');

  const apiKey = '9c0d918e4f32893a592a2f158d9cd7d5'; // Replace with your OpenWeatherMap API key

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    if (!city) return; // Prevents an empty API request

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError(null); // Reset error if request is successful

      const weatherCondition = response.data.weather[0].main.toLowerCase();
      // Set background based on weather condition
      if (weatherCondition === 'clear') {
        setBackgroundClass('sunny-background');
      } else if (weatherCondition === 'clouds') {
        setBackgroundClass('cloudy-background');
      } else if (weatherCondition === 'rain') {
        setBackgroundClass('rainy-background');
      } else if (weatherCondition === 'snow') {
        setBackgroundClass('snowy-background');
      }
    } catch (err) {
      setError('City not found');
      setWeatherData(null); // Clear previous data
      setBackgroundClass(''); // Reset background
    }
  };

  return (
    <div className={`App ${backgroundClass}`}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <div className="weather-info">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
            <p>Temperature: {weatherData.main.temp}°C</p>
          </div>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
