import React, { useState } from "react";
import { Button } from "react-bootstrap";
export const WeatherButton = ({ cities, setCity }) => {
  const [hover, setHover] = useState(false);
  const baseStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
  };

  const normalStyle = {
    backgroundColor: "white",
    color: "black",
  };
  console.log("citiys", cities);

  return (
    <div class="city-button">
      <Button
        style={{ ...baseStyle, ...(hover ? hoverStyle : normalStyle) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        variant="info"
        onClick={() => {
          setCity("");
        }}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          style={{ ...baseStyle, ...(hover ? hoverStyle : normalStyle) }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
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
