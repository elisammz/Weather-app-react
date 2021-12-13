import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Weather(props) {
  let [description, setDescription] = useState({ ready: false });

  function handleSubmit(response) {
    setDescription({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
    });
  }

  if (description.ready) {
    return (
      <div className="App ">
        <div className="card">
          <div className="row">
            <form
              id="my-input"
              autoComplete="off"
              className="mb-3"
              onSubmit={handleSubmit}
            >
              <div className="col-6">
                <div className="row">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    id="city"
                    className="form-control "
                    onChange={""}
                  />{" "}
                  <div className="col">
                    <input
                      type="submit"
                      value="Search"
                      className="btn buttons"
                      id="search-button"
                      onChange={""}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="submit"
                      value="Current"
                      className="btn buttons"
                      id="current-button"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <h5 className="card-title" id="title-city">
            {description.city}
          </h5>

          <div className="current-date">Today</div>
          <h6 id="current-date">
            <FormattedDate date={description.date} />
          </h6>

          <div className="row">
            <div className="col-5">
              <br />
              <h6 id="current-date" className="text-capitalize description">
                {description.description}
              </h6>
              <img
                alt={description.description}
                className="current-icon "
                src={description.iconUrl}
              />
              <div>
                <span className="current-temp" id="temperature">
                  {Math.round(description.temperature)}
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
                <li>Humidity: {description.humidity}%</li>
                <li>Wind: {description.wind} km/h</li>
              </ul>
            </div>
          </div>

          <hr />
          <div className="card card-end">
            <span className="most-searched">Learn about climate crisis</span>
            <div>
              <a
                href="https://www.bbc.com/news/science-environment-56837908"
                target="blank"
                className="card-link most-cities"
              >
                Latest news from BBC
              </a>
              <a
                href="https://edition.cnn.com/specials/world/cnn-climate"
                target="blank"
                className="card-link most-cities"
              >
                Latest news from CNN
              </a>
            </div>
          </div>
        </div>
        <p class="footer">
          <a href="https://github.com/elisammz/sheCodesPlus-EM" target="blank">
            Open-source code
          </a>
          by Elisa Mendoza 👩🏽‍💻
        </p>
      </div>
    );
  } else {
    const apiKey = "7b82360a89d434b6c2917003378b2c60";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&APPID=${apiKey}&units=metric`;
    let url = apiUrl;
    axios.get(url).then(handleSubmit);
    return "Loading...";
  }
}
