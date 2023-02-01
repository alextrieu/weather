import React from 'react'

export default function Location({ data }) {
  let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

  return (
    <>
      { Object.keys(data).length ? (
        <>
          {/* City */}
          {/* {console.log(data.name)} */}
          {/* {Country} */}
          {/* {console.log(data.sys.country)} */}
          <p>{data.name}, {regionNames.of(data.sys.country)}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  )
}
