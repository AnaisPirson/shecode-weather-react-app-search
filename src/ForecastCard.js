import React from "react";
import "./ForecastCard.css";

export default function ForecastCard(props) {
  console.log(props);

  function getDay() {
    let a = new Date(props.data[props.index + 1].dt * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = days[a.getDay()];
    return dayOfWeek;
  }

  function maxTemperature() {
    let termperature = Math.round(props.data[props.index + 1].temp.max);
    return `${termperature}`;
  }
  function minTemperature() {
    let termperature = Math.round(props.data[props.index + 1].temp.min);
    return `${termperature}`;
  }

  function getUnits() {
    if (props.units === "metric") {
      return "C";
    } else {
      return "F";
    }
  }

  return (
    <div className="ForecastCard">
      <div className="card">
        <div className="card-body m-0">
          <h5 className="card-title">{getDay()}</h5>
          <img
            src={
              "../images/" +
              props.data[props.index + 1].weather[0].icon +
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
}
