import React from "react";
import { Button } from "react-bootstrap";
export const WeatherButton = ({ cities, setCity }) => {
  console.log("citiys", cities);
  return (
    <div class="city-button">
      <Button
        variant="info"
        onClick={() => {
          setCity("");
        }}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant="light"
          key={item}
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
