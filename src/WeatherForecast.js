import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            Mon <WeatherIcon code="01d" size={32} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-max">19</span>
              <span className="WeatherForecast-min">11</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7b82360a89d434b6c2917003378b2c60";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}
`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
