import React, { useState, useEffect } from "react";
import ForecastCard from "./ForecastCard.js";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const apiKey = "d4c486d391c1e53132be6cfbb096c3a8";
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [forecastType, setForecastType] = useState();

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
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

  function getForecastType(event) {
    console.log(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div
          className="btn-group btn-group-toggle"
          data-toggle="buttons"
          onClick={getForecastType}
        >
          <label className="btn btn-outline-secondary active">
            <input
              type="radio"
              name="forecastbtns"
              value="daily"
              id="forecastDaily"
              defaultChecked
            />{" "}
            Daily Forecast
          </label>
          <label className="btn btn-outline-secondary">
            <input
              type="radio"
              name="forecastbtns"
              id="forecastHourly"
              autoComplete="off"
              value="hourly"
            />{" "}
            Hourly Forecast
          </label>
        </div>

        <div className="card-group mt-1">
          <div className="row forecast-cards">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div key={index} className="col m-0 p-0">
                    <ForecastCard
                      data={forecast}
                      index={index}
                      units={props.units}
                      // type={getForecastType()}
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
