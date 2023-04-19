import './App.css';

import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "t92D6mKl5a0oICC5NVbjMZmG9Br893EA";

  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${location}&apikey=${apiKey}`);
      const data = await response.json();
      const locationKey = data[0].Key;
      const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData[0]);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  },);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Enter location" value={location} onChange={(event) => setLocation(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.Temperature.Imperial.Value} &deg;F</p>
          <p>Weather Text: {weatherData.WeatherText}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
