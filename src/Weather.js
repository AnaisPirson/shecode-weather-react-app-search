import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import { SpinnerDotted } from "spinners-react";

export default function Weather(props) {
  const apiKey = "d4c486d391c1e53132be6cfbb096c3a8";
  const [city, setCity] = useState("Amsterdam");
  const [weatherData, getWeatherData] = useState({ ready: false });
  const [units, setUnit] = useState("metric");

  function handleResponse(response) {
    getWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      country: response.data.sys.country,
      visibility: response.data.visibility,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      timestamp_sunrise: response.data.sys.sunrise,
      timestamp_sunset: response.data.sys.sunset,
      coord: response.data.coord,
    });
  }

  function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCityUpdate(event) {
    setCity(event.target.value);
  }
  function showUnit(event) {
    event.preventDefault();

    if (document.querySelector("#customSwitch1").checked !== true) {
      setUnit("imperial");
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
    } else {
      setUnit("metric");
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row  my-4">
            <div className="col-7 input-group">
              {/* <button
                className="btn btn-outline-secondary"
                id="currentLoc"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </button> */}

              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityUpdate}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="searchbtn"
                value="search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
            <div className="col align-self-center d-flex justify-content-center">
              <span className="celsius mr-2"> °C</span>
              <div className="custom-control custom-switch unit-toggler">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  onFocus={showUnit}
                />
                <label className="custom-control-label" htmlFor="customSwitch1">
                  °F
                </label>
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} units={units} />
      </div>
    );
  } else {
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Weather">
        "...Loading"
        <SpinnerDotted />
      </div>
    );
  }
}
