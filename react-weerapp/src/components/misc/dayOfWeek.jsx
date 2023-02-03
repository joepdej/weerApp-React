import React from "react";
import { useState } from "react";


const DayOfWeek = (props) => {
  console.log("OMG PROPS:", props);
  const [day, setDay] = useState(
    new Date().toLocaleString("default", { weekday: "long" })
  );
  const [time, setTime] = useState(
    new Date().toLocaleString("default", { hour: "2-digit", minute: "2-digit" })
  );
  const [timezoneName, setTimeZoneName] = useState("");
  const [timeZoneTime, setTimeZoneTime] = useState("");
  const [position, setPosition] = useState({ lat: null, lon: null });
  const getData = async () => {
    const { lat, lon } = props;
    if (lat != position.lat || lon != position.lon) {
      fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${import.meta.env.VITE_API_KEY_TIMEZONE}&format=json&by=position&lat=${lat}&lng=${lon}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTimeZoneName(data.zoneName);
          const date = new Date(data.timestamp * 1000);
          date.setHours(date.getHours() - 1);
          setTimeZoneTime(
            date.toLocaleString("default", {
              hour: "2-digit",
              minute: "2-digit",
            })
          );
          setTime(
            new Date().toLocaleString("default", {
              hour: "2-digit",
              minute: "2-digit",
            })
          );
          setDay(new Date().toLocaleString("en-GB", { weekday: "long" }));
          setPosition({ lat, lon });
        });
    }
  };
  getData();
  return (
    <div className={props.className}>
      <span>{day}</span>
      <br />
      <span>{time}</span>
      <br />
      <span>{timeZoneTime} </span>
      <span>{timezoneName}</span>
    </div>
  );
};

export default DayOfWeek;
