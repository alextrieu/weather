import { useState, useEffect, createContext } from 'react'
import { LocationInfo } from './LocationInfo'
import { WeatherData } from './WeatherData'

import './App.css'

export default function WeatherApp() {  
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const units = "imperial";
  const apiKey = import.meta.env.VITE_API_KEY;

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

  const [image, setImage] = useState(null);
  const keyword = weather.name;
  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${keyword}&client_id=BzSfVucYTI5CJ6qniGcyLfBul-fmqCuBl5UF4HOZ--A`
      );
      const data = await response.json();
      setImage(data.results[1].urls.full);
    };

    fetchImage();
  }, [keyword]);

  return (
    <main className='app-container'>
      <div className="hero-section" style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover' 
      }}>
        <LocationInfo data={weather}/>
      </div> 
      <div className='footer'>
        <WeatherData data={weather}/>
      </div>
    </main>
  )
}


