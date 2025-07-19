import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
const SearchBox = ({updateInfo}) => {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "84882e62581ac79120f9ccc1730c91a0";
  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsonResponce = await response.json();
    // console.log(jsonResponce);
    let result = {
      city:city,
      temp: jsonResponce.main.temp,
      tempMin: jsonResponce.main.temp_min,
      tempMax: jsonResponce.main.temp_max,
      humiditiy:jsonResponce.main.humidity,
      feelsLike:jsonResponce.main.feels_Like,
      weather:jsonResponce.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange= (event) => {
    setCity(event.target.value);
  };
  let handleSubmit =async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button  variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
