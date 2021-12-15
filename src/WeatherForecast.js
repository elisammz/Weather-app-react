import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude={part}&appid=7b82360a89d434b6c2917003378b2c60

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
    console.log(props);
  }
  let apiKey = "7b82360a89d434b6c2917003378b2c60";
  let latitude = 33.44;
  let longitude = -94.04;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}
`;

  axios.get(apiUrl).then(handleResponse);

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
}
