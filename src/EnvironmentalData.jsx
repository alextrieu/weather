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
        <div className='humidity-sunrise-sunset'>
          <div className='e-data humidity'>
            <i class="fa-solid fa-droplet"></i>
            <p>Humidity</p>
            <hr></hr>
            {data.main.humidity}%
          </div>
          <div className='e-data sunrise'>
            <i class="fa-solid fa-sun"></i>
            <p>Sunrise</p>
            <hr></hr>
            {timeConverter(data.sys.sunrise)}
          </div>
          <div className='e-data sunset'>
            <i class="fa-solid fa-mountain-sun"></i>
            <p>Sunset</p>
            <hr></hr>
            {timeConverter(data.sys.sunset)}
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}