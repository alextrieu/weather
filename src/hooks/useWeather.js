import { useState, useEffect } from 'react'
import { useLocation } from './useLocation';

export function useWeather() {
  const location = useLocation();
  const [weather, setWeather] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!Object.keys(location).length) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${apiKey}&units=${'imperial'}`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setWeather(data);
      } catch(error) {
        console.error(error);
      }
    }
      fetchData()
    }, [location]);
  return weather;
}
