import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import styles from "./map.module.css";
import dotenv from "dotenv";

const Map = (props) => {
  console.log(props);
  return (
    <div id="map" className={styles.map}>
      <MapContainer
        center={[props.lat, props.lon]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={"https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid="+import.meta.env.VITE_API_KEY_OPENWEATHERMAP}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
