import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    const [weatherInfo,setweatherInfo]=useState({
    city:"Delhi",
    feelsLike: 30.84,
    temp: 37.08,
    tempMin: 37.08,
    tempMax: 37.08,
    humidity: 50,
    weather: "haze",
    })
    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }

  return (
    <div>
      <h1>Weather App by Ankit Kushwaha </h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
