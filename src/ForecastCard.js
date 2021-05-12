import React from "react";
import "./ForecastCard.css";

export default function ForecastCard(props) {
  console.log(props);

  function getDay() {
    let a = new Date(props.data.daily[props.index + 1].dt * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = days[a.getDay()];
    return dayOfWeek;
  }

  function maxTemperature() {
    let termperature = Math.round(props.data.daily[props.index + 1].temp.max);
    return `${termperature}`;
  }
  function minTemperature() {
    let termperature = Math.round(props.data.daily[props.index + 1].temp.min);
    return `${termperature}`;
  }

  function hourlyTemp() {
    let termperature = Math.round(props.data.hourly[props.index + 1].temp);
    return `${termperature}`;
  }

  function getUnits() {
    if (props.units === "metric") {
      return "C";
    } else {
      return "F";
    }
  }
  function getTime() {
    let a = new Date(
      props.data.hourly[props.index + 1].dt * 1000
    ).toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return a;
  }

  if (props.type === "daily") {
    return (
      <div className="ForecastCard">
        <div className="card">
          <div className="card-body m-0">
            <h5 className="card-title">{getDay()}</h5>
            <img
              src={
                "../images/" +
                props.data.daily[props.index + 1].weather[0].icon +
                ".svg"
              }
              alt=""
            />

            <p className="card-text">
              <small className="text-muted">
                {minTemperature()} °{getUnits()} / {maxTemperature()} °
                {getUnits()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ForecastCard">
        <div className="card">
          <div className="card-body m-0">
            <h5 className="card-title">{getTime()}</h5>
            <img
              src={
                "../images/" +
                props.data.hourly[props.index + 1].weather[0].icon +
                ".svg"
              }
              alt=""
            />

            <p className="card-text">
              <small className="text-muted">
                {hourlyTemp()} °{getUnits()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
