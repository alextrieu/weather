import React, { useState } from 'react'

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
  
  const climateData = Object.keys(data).length ? [
    {
      name: "humidity",
      icon: "fa-droplet",
      data: data.main.humidity + "%"
    },
    {
      name: "sunrise",
      icon: "fa-sun",
      data: timeConverter(data.sys.sunrise)
    },
    {
      name: "sunset",
      icon: "fa-mountain-sun",
      data: timeConverter(data.sys.sunset)
    }
  ] : [];

  
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  

  return (
    <>
      { Object.keys(data).length ? (
        <div className='card-container'>
            { climateData.map((climate, index) => {
              return (
                <>
                  <div className={`card-data ${climate.name}`}>
                    <i className={`fa-solid ${climate.icon}`}></i>
                    <p>{capitalizeFirstLetter(climate.name)}</p>
                    <hr></hr>
                    <p>{climate.data}</p>
                  </div>
                </>
              )}) 
            }
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}