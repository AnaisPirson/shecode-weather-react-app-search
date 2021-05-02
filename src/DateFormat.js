import React from "react";

export default function DateFormat(props) {
  let todayTime = new Date().toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  });

  let todayDate = new Date().toLocaleDateString("en-UK", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="DateFormat">
      <h3 className="current-date m-0">
        {todayDate}, {todayTime}
      </h3>
    </div>
  );
}
