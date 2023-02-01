import React from 'react'

export function Temperature({ data }) {
  function fahrenheitToCelsius(tempInF) {
    const tempInC = Math.ceil((tempInF - 32) * (5 / 9));
    return tempInC;
  }
  return (
    <>
      { Object.keys(data).length ? (
        <div className='weather-info'>
          <div className='temperature'>
            <i class="fa-regular fa-snowflake"></i>
            {data.weather[0].main}
          </div>
          <div className='fahrenheit'>
            {fahrenheitToCelsius(data.main.temp)}°C
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  )
}
