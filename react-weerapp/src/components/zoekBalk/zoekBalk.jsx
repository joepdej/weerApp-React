import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoUrl } from "../../api";
import { geoApiOptions } from "../../api";

const Zoekbalk = ({ onZoekChange }) => {
  const [value, setValue] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${geoUrl}/cities?minPopulation=500000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((stad) => {
            return {
              value: `${stad.latitude} ${stad.longitude}`,
              label: `${stad.name}, ${stad.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (zoekValue) => {
    setValue(zoekValue);
    onZoekChange(zoekValue);
    console.log(zoekValue);
  };

  return (
    <AsyncPaginate
      placeholder="Zoek een stad"
      debounceTimeout={600}
      value={value}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Zoekbalk;
