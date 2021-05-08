import React, { useState, useEffect } from "react";
import ForecastCard from "./ForecastCard.js";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const apiKey = "d4c486d391c1e53132be6cfbb096c3a8";
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let units = props.units;
  //   let lat = 47;
  //   let lon = 23;

  useEffect(() => {
    //what you want to change
    setLoaded(false);
  }, [props.units]);

  useEffect(() => {
    //what you want to change
    setLoaded(false);
  }, [props.coords]); //trigger

  function load() {
    //    let lat = props.coordinates.lat;
    //    let lon = props.coordinates.lon;
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-outline-secondary active btn-lg">
            <input
              type="radio"
              name="forecastbtns"
              id="forecastDaily"
              autoComplete="off"
              checked
            />{" "}
            Daily Forecast
          </label>
          <label className="btn btn-outline-secondary btn-lg">
            <input
              type="radio"
              name="forecastbtns"
              id="forecastHourly"
              autoComplete="off"
            />{" "}
            Hourly Forecast
          </label>
        </div>
        <div className="card-group mt-1">
          <div className="row forecast-cards">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col m-0 p-0">
                    <ForecastCard
                      data={forecast}
                      index={index}
                      units={props.units}
                    />{" "}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
