import React from 'react'
import Header from './components/Header/Header'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import HourlyForecast from './components/HourlyForecast/HourlyForecast'

const App = () => {
  return (
    <div>
      <Header />
      <CurrentWeather />
      <HourlyForecast />
    </div>
  )
}

export default App