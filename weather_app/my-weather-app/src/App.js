import './App.css';

import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6a3bbf6268da14ba00ef8494a5f149`
      );
      setWeatherData(result.data);
    };
    fetchData();
  }, [city]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" onChange={handleInputChange} />
      <div>
        {weatherData && weatherData.main && (
          <div>
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>Temperature: {weatherData.main.temp} K</p>
            <p>Humidity: {weatherData.main.humidity}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
