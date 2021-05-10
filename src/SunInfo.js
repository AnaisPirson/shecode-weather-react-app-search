import React from "react";
import "./SunInfo.css";

export default function SunInfo(props) {
  let sunriseTime = new Date(
    props.dateInfo.timestamp_sunrise * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  let sunsetTime = new Date(
    props.dateInfo.timestamp_sunset * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
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
            <li id="sunrise">{sunriseTime}</li>
            <li id="sunset">{sunsetTime}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
