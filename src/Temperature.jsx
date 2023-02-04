import React from 'react'

export function Temperature({ data }) {
  function fahrenheitToCelsius(tempInF) {
    const tempInC = Math.ceil((tempInF - 32) * (5 / 9));
    return tempInC;
  }

  function typeOfWeather(weather) {
    if (weather = "Clouds" || "Clear") {
      return <i className="fa-solid fa-cloud fa-icon"></i>
    } else if (weather = "Atmosphere" || "Drizzle") {
      return <i className="fa-solid fa-water fa-icon"></i>
    } else if (weather = "Rain") {
      return <i className="fa-solid fa-cloud-rain fa-icon"></i>
    } else if (weather = "Thunderstorm") {
      return <i className="fa-solid fa-cloud-bolt fa-icon"></i> 
    } else if (weather = "Snow") {
      return <i className="fa-solid fa-snowflake fa-icon"></i> 
    } else if (weather = "Sun") {
      return <i className="fa-regular fa-sun fa-icon"></i>
    }
  }


  return (
    <>
      { Object.keys(data).length ? (
        <div className='weather-info'>
          <div className='temperature'>
            {typeOfWeather(data.weather[0].main)}
            <p>{data.weather[0].main}</p>
          </div>
          <div className='degree'>
            {fahrenheitToCelsius(data.main.temp)}°C
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  )
}
