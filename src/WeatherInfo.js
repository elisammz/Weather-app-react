import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
        <div className="col-5">
          <br />
          <h6 id="current-date" className="text-capitalize description">
            {props.data.description}
          </h6>
          <div>
            <WeatherIcon code={props.data.icon} alt={props.data.description} />

            <span className="current-temp" id="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <a href="/" id="celsius" className="active">
              <sup>°C</sup>{" "}
            </a>
            <span className="current-temp" id="separator">
              {" "}
              <sup>|</sup>{" "}
            </span>
            <a href="/" id="fahrenheit">
              <sup>°F</sup>
            </a>
          </div>
          <div className="description" id="description"></div>
        </div>

        <div className="col-6" id="forecast">
          <ul className="list-description">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
