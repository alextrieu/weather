import React from 'react'

export function EnvironmentalData({ data }) {

  function timeConverter(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let formattedTime = hours + ':' + minutes.substr(-2) + ' ' + ampm;
    return formattedTime;
  }
  return (
    <>
      { Object.keys(data).length ? (
        <>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Sunrise: {timeConverter(data.sys.sunrise)}</p>
          <p>Sunset: {timeConverter(data.sys.sunset)}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}