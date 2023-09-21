import React, { useState } from "react";
import styles from "./WeatherApp.module.css";

function WeatherApp() {
  //object to store weather characteristics

  let weatherData = {
    temperature: 70,
    description: "It is sunny",
    cityName: "Fairfax",
    condition: "sunny",
  };
  //array destructuring
  const [weather, setWeather] = useState(weatherData);
  //Ternary operator -> condition? true:false
  return (
    <div
      className={
        weather.condition === "sunny"
          ? styles.sunny
          : weather.condition === "rainy"
          ? styles.rainy
          : styles.cold
      }
    >
      <h1>Weather App</h1>
      <h2>{weather.cityName}</h2>
      <h3>{weather.temperature}</h3>
      <h3>{weather.description}</h3>

      {/* applying jsx for button */}
      <button
        onClick={() => {
          weatherData = {
            temperature: 70,
            description: "It is sunny",
            cityName: "Fairfax",
            condition: "sunny",
          };
          setWeather(weatherData);
        }}
      >
        Sunny
      </button>
      <button
        onClick={() => {
          weatherData = {
            temperature: 10,
            description: "It's rainy",
            cityName: "Fairfax",
            condition: "rainy",
          };
          setWeather(weatherData);
        }}
      >
        Rainy
      </button>
      <button
        onClick={() => {
          weatherData = {
            temperature: -10,
            description: "It's cold",
            cityName: "Fairfax",
            condition: "cold",
          };
          setWeather(weatherData);
        }}
      >
        Cold
      </button>
    </div>
  );
}

export default WeatherApp;
// sunny -> sunny
//rainy-> rainy
//cold
