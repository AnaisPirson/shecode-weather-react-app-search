import React from "react";
import "./SunInfo.css";

export default function SunInfo(props) {
  console.log(props);
  // let sunriseTime = new Date(
  //   props.dateInfo.timestamp_sunrise * 1000
  // ).toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: false,
  // });
  function getSunriseTime() {
    let sunriseTime = new Date(
      (props.dateInfo.timestamp_sunrise + props.dateInfo.timezone) * 1000
    );
    let hours = sunriseTime.getHours();
    let minutes = sunriseTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:${minutes}`;
  }
  // let sunriseTime = new Date(
  //   (props.dateInfo.timestamp_sunrise + props.dateInfo.timezone) * 1000
  // ).toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: false,
  // });

  function getSunsetTime() {
    let sunsetTime = new Date(
      (props.dateInfo.timestamp_sunset + props.dateInfo.timezone) * 1000
    );
    let hours = sunsetTime.getHours();
    let minutes = sunsetTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:${minutes}`;
  }
  // let sunsetTime = new Date(
  //   (props.dateInfo.timestamp_sunset + props.dateInfo.timezone) * 1000
  // ).toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: false,
  // });

  // let sunsetTime = new Date(
  //   props.dateInfo.timestamp_sunset * 1000
  // ).toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: false,
  // });
  return (
    <div className="SunInfo">
      <div className="row">
        <div className="col-3 pl-0">
          <img
            src="../images/sunset.png"
            alt="sunset-icon"
            width="50px"
            className="sunset-icon"
          />
        </div>
        <div className="col pl-0">
          <ul>
            <li id="sunrise">{getSunriseTime()}</li>
            <li id="sunset">{getSunsetTime()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
