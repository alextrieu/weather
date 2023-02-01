import React from 'react'

export default function Location({ data }) {
  let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

  return (
    <div>
      { Object.keys(data).length ? (
        <div className='location-data'>
          <p>{data.name}</p>
          <p className='right-aligned'>{regionNames.of(data.sys.country)}</p> 
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}
