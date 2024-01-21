import { useEffect, useState } from "react";
import "./App.css";

// api key : 4649931500adf338a8e10a4eb37a4f36
// 1. 앱이 실행되면(useEffect) 현재 위치의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태를 보여준다
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩스피너가 나온다.

function App() {
  const APIKEY = "4649931500adf338a8e10a4eb37a4f36";
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log("현재위치", lat, lon);
        getCurrentWeather(lat, lon);
      },
      (error) => {
        console.error("위치 정보를 가져오는데 실패했습니다.", error);
      }
    );
  };

  const getCurrentWeather = async (lat, lon) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;

    try {
      const response = await fetch(weatherUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("날씨 데이터:", data);
      // 여기에서 data를 사용하여 UI를 업데이트하거나 필요한 처리를 하세요.
    } catch (error) {
      console.error("날씨 정보를 가져오는데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
    // getCurrentWeather({ lat, lon });
  }, []);
  return <div>hi</div>;
}

export default App;
