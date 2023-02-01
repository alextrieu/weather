import React from 'react'
import Location from './Location'
import DateTime from './DateTime'

export function LocationInfo({ data }) {
  return (
    <div className='header-info'>
        <DateTime />
        <Location data={data}/>
    </div>
  )
}
