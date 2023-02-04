import React from 'react'

export default function DateTime() {

  function getTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ':' + minutes + ' ' + ampm
  }

  function getDate() {
    const date = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    const dateString = date.toLocaleDateString('en-US', options);
    return dateString;
  }

  return (
    <div className='timestamp-container'>
      <p className='location-details'>{getTime()}</p>
      <p className='location-details'>{getDate()}</p>
    </div>
  )
}
