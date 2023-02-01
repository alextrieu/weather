import React from 'react'
import { EnvironmentalData } from './EnvironmentalData'
import { Temperature } from './Temperature'

export function WeatherData({ data }) {
  return (
    <>
        <Temperature data={ data }/>
        <EnvironmentalData data={ data }/>
    </>
  )
}
