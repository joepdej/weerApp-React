import React from "react";
import styles from "./huidigWeer.module.css";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ data }) => {
  console.log(data.list);
  const forecastDays = data.list.filter((forecast) =>
    forecast.dt_txt.includes("12:00:00")
  );
  return (
    <div className={styles.huidigWeer}>
      {forecastDays.map((day, index) => (
        <div key={index} className={styles.huidigWeer__info}>
          <h2 className={styles.huidigWeer__plaats}>
            {WEEK_DAYS[new Date(day.dt_txt).getDay()]}
          </h2>
          <p className={styles.huidigWeer__datum}>{day.dt_txt.slice(0, 10)}</p>
          <p className={styles.huidigWeer__temperatuur}>
            {Math.round(day.main.temp - 273.15)}c
          </p>
          <p className={styles.huidigWeer__beschrijving}>
            {day.weather[0].description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
