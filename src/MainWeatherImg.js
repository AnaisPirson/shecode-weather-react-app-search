import React from "react";
import "./MainWeatherImg.css";

export default function MainWeatherImg(props) {
  // console.log(props.dataIcon);

  if (props.dataIcon !== null) {
    return (
      <div className="MainWeatherImg">
        <img
          // src="../images/{props.dataIcon}.svg"
          src={"../images/" + props.dataIcon + ".svg"}
          alt="main-Weather"
          className="main-weather-image img-fluid"
          id="main-weather-icon"
        />
      </div>
    );
  } else {
    return (
      <div className="MainWeatherImg">
        <img
          // src="../images/{props.dataIcon}.svg"
          src="../images/09n.svg"
          width="300px"
          alt="main-Weather"
          className="main-weather-image img-fluid"
          id="main-weather-icon"
        />
      </div>
    );
  }
}
