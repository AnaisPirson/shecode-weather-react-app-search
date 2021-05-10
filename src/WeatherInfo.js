import React from "react";
import Details from "./Details.js";
import "./WeatherInfo.css";
import DateFormat from "./DateFormat.js";
import SunInfo from "./SunInfo.js";
import MainWeatherImg from "./MainWeatherImg.js";
import Forecast from "./Forecast.js";

export default function WeatherInfo(props) {
  if (props.units === "metric") {
    return (
      <div className="WeatherInfo">
        <h2
          className="card-title current-location m-0 text-capitalize"
          id="current-location"
        >
          {props.data.city}, {props.data.country}
        </h2>
        <DateFormat dateInfo={props.data.date} />
        <div className="row">
          <div className="col">
            <SunInfo dateInfo={props.data} />
            <p className="currentTemp m-0" id="currentTempInfo">
              {Math.round(props.data.temperature)}°C
            </p>
          </div>
          <div className="col currentWeather">
            <p
              className="current-weather-description m-0 text-capitalize"
              id="weather-description"
            >
              {props.data.description}
            </p>

            <MainWeatherImg dataIcon={props.data.icon} />
            {/* <small className="text-muted lastUpdated">
              <i className="fas fa-redo update-arrow"></i> Last updated 3 mins
              ago
            </small> */}
          </div>
          <div className="col me-2 details">
            <h5 className="details-h5">Details</h5>
            <Details detailsInfo={props.data} units={props.units} />
          </div>
        </div>

        <Forecast units={props.units} coords={props.data.coord} />
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <h2
          className="card-title current-location m-0 text-capitalize"
          id="current-location"
        >
          {props.data.city}, {props.data.country}
        </h2>
        <DateFormat dateInfo={props.data.date} />
        <div className="row">
          <div className="col">
            <SunInfo dateInfo={props.data} />
            <p className="currentTemp m-0" id="currentTempInfo">
              {Math.round(props.data.temperature)}°F
            </p>
          </div>
          <div className="col currentWeather">
            <p
              className="current-weather-description m-0 text-capitalize"
              id="weather-description"
            >
              {props.data.description}
            </p>

            <MainWeatherImg dataIcon={props.data.icon} />
            {/* <small className="text-muted lastUpdated">
              <i className="fas fa-redo update-arrow"></i> Last updated 3 mins
              ago
            </small> */}
          </div>
          <div className="col me-2 details">
            <h5 className="details-h5">Details</h5>
            <Details detailsInfo={props.data} units={props.units} />
          </div>
        </div>
        <Forecast units={props.units} coords={props.data.coord} />
      </div>
    );
  }
}
