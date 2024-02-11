import React from "react";

export const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);
  return (
    <div class="weather-box">
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp + " °C"} / {weather?.main.temp * 1.8 + 32 + " °F"}
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};
