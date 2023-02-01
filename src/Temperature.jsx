import React from 'react'

export function Temperature({ data }) {
  function fahrenheitToCelsius(tempInF) {
    const tempInC = Math.ceil((tempInF - 32) * (5 / 9));
    return tempInC;
  }
  return (
    <>
      { Object.keys(data).length ? (
        <>
          {/* different types of weather */}
          <p>{data.weather[0].main}</p>
          <p>Temperature: {fahrenheitToCelsius(data.main.temp)}°C</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  )
}
