import { useState, useEffect, createContext } from 'react'
import { LocationInfo } from './LocationInfo'
import { WeatherData } from './WeatherData'

import './App.css'

export default function WeatherApp() {  
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const apiKey = "5a5cf46984a904ea36fbbbdcb420b875";
  const units = "imperial";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }, []);

  useEffect(() => {
    if (!Object.keys(location).length) {
      return;
    }

    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${apiKey}&units=${units}`);
      const data = await response.json();

      setWeather(data);
    };
    fetchData()
      .catch(error => {
        console.error(error);
      });
  }, [location]);

  return (
    <div className="App">
        <LocationInfo data={weather}/>
        <WeatherData data={weather}/>
      <h1>Your Location</h1>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      <div>
    </div>
    </div>
  )
}


