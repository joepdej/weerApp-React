import styles from "./App.module.css";
import Zoekbalk from "./components/zoekBalk/zoekBalk";
import Forecast from "./components/huidigWeer/huidigWeer";
import Forecast2 from "./components/huidigWeer/weer";
import { useState } from "react";
import { urlWeather } from "./api";
import Map from "./components/misc/map";


function App() {
  console.log(import.meta)
  const [forecast, setForecast] = useState(null);
  const [weer, setWeer] = useState(null);

  const handleOnSearchChange = (zoekValue) => {
    console.log(zoekValue);
    const [lat, lon] = zoekValue.value.split(" ");
    console.log(lat, lon);

    const weerFetch = fetch(
      `${urlWeather}/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY_OPENWEATHERMAP}`
    );

    const weerFetch2 = fetch(
      `${urlWeather}/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY_OPENWEATHERMAP}`
    );

    Promise.all([weerFetch, weerFetch2])
      .then(async (response) => {
        const forcastResponse = await response[0].json();
        const weatherResponse = await response[1].json();

        setForecast({ city: zoekValue.label, ...forcastResponse });
        setWeer({ city: zoekValue.label, ...weatherResponse });

        console.log(forcastResponse);
        console.log(weatherResponse);
      })
      .catch(console.log);
  };

  return (
    <div className={styles.container}>
      <Zoekbalk onZoekChange={handleOnSearchChange} />
      {weer && <Map lon={weer.coord.lon} lat={weer.coord.lat} />}
      {weer && <Forecast2 data={weer} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
