import React, { useState, useEffect } from 'react'
import { LocationInfo } from './LocationInfo'
import { WeatherData } from './WeatherData'
import { useBackgroundImage } from './hooks/useBackgroundImage'
import { useWeather } from './hooks/useWeather'

import './App.css'

export default function WeatherApp() {  
  const weather = useWeather();
  const image = useBackgroundImage(weather.name);

  return (
    <main className='app-container'>
      <div className="hero-section" style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover' 
      }}>
        <LocationInfo data={weather}/>
      </div> 
      <div className='footer'>
        <WeatherData data={weather}/>
      </div>
    </main>
  )
}


