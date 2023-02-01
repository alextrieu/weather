import React from 'react'
import Location from './Location'
import DateTime from './DateTime'

export function LocationInfo({ data }) {
  return (
    <>
        <Location data={data}/>
        <DateTime />
    </>
  )
}
