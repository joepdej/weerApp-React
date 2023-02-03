export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY_GEODB,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const geoUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const urlWeather = `https://api.openweathermap.org/data/2.5`;
