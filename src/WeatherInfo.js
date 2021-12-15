import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h5 className="card-title" id="title-city">
        {props.data.city}
      </h5>

      <div className="current-date">Today</div>
      <h6 id="current-date">
        <FormattedDate date={props.data.date} />
      </h6>

      <div className="row">
        <div className="col-3">
          <br />
          <h6 id="current-date" className="text-capitalize description">
            {props.data.description}
          </h6>
          <div className="row">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={100}
            />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-19" id="forecast">
          <ul className="list-description">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
