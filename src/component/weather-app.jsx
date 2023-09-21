import React, { useState } from "react";
import styles from "./weather-app.module.css";

//creating array of object
function WeatherApp() {
  let weatherData = {
    temperature: 80,
    description: "It is very sunny.",
    cityName: "Lubbock",
    condition: "sunny",
  };
  //Array destructuring
  const [weather, setWeather] = useState(weatherData);

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
      <p>{weather.temperature}°C</p>
      <p>{weather.description}</p>
      <button
        onClick={function () {
          weatherData = {
            temperature: 80,
            description: "It is very sunny.",
            cityName: "Lubbock",
            condition: "sunny",
          };
          setWeather(weatherData);
        }}
      >
        Sunny
      </button>
      <button
        onClick={function () {
          weatherData = {
            temperature: 20,
            description: "It is rainy.",
            cityName: "Lubbock",
            condition: "rainy",
          };
          setWeather(weatherData);
        }}
      >
        Rainy
      </button>
      <button
        onClick={function () {
          weatherData = {
            temperature: -1,
            description: "It is very cold.",
            cityName: "Lubbock",
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
