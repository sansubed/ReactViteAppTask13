import React, { useState } from "react";
import styles from "./weather-app.module.css";

//creating array of object
function WeatherApp() {
  let weatherData = [
    {
      temperature: 80,
      description: "It is very sunny",
      cityName: "Lubbock",
      condition: "sunny",
    },
    {
      temperature: 20,
      description: "It is very rainy",
      cityName: "Dallas",
      condition: "rainy",
    },

    {
      temperature: 1,
      description: "It is cold.",
      cityName: "Albuquerque",
      condition: "cold",
    },
  ];
  //Array destructuring
  const [weather, setWeather] = useState(weatherData);
  console.log(weatherData);
  const [mode, setMode] = useState("sunny");

  return (
    <>
      weather app
      {weather.map(function (weather, index) {
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
            <h1>{weather.cityName}</h1>
            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
            <p>{weather.condition}</p>
          </div>
        );
      })}
      <button>{mode === "sunny" ? "sunny" : ">"}</button>
    </>
  );
}

export default WeatherApp;
