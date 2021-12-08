import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Weather() {
  return (
    <div className="App">
      <div className="card">
        <form id="my-input" autocomplete="off" className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                id="city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <button id="search-button">
                <a href="/" className="buttons">
                  Search
                </a>
              </button>
            </div>
            <div className="col-3">
              <button id="current-button">
                <a href="/" className="buttons">
                  Current
                </a>
              </button>
            </div>
          </div>
        </form>

        <h5 className="card-title" id="title-city">
          Tokyo
        </h5>

        <div className="current-date">Today</div>
        <h6 id="current-date">Mon 29 Nov</h6>
        <br />

        <div className="row">
          <div className="col-5">
            <br />
            <i id="icon" className="far fa-sun current-icon "></i>
            <div>
              <span className="current-temp" id="temperature">
                8{" "}
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
            Tue 8°C
            <div>Wed 7°C</div>
            <div>Tue 10°C</div>
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
    </div>
  );
}
