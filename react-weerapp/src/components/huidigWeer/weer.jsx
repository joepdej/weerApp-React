import React from "react";
import styles from "./weer.module.css";
import DayOfWeek from "../misc/dayOfWeek";

const Forecast2 = ({ data }) => {
    console.log(data);
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

return (
  <div className={styles.weer}>
    <div className={styles.weer__info}>
      <h1 className={styles.weer__plaats}>{data.name}</h1>
      <DayOfWeek lat={data.coord.lat} lon={data.coord.lon} className={styles.day_of_week}/>
      <img className={styles.weer__icon} src={iconUrl} alt={data.weather[0].description}/>
      <p className={styles.weer__temperatuur}>{Math.round(data.main.temp - 273.15)}c</p>
    </div>
  </div>
);
  };

export default Forecast2;
