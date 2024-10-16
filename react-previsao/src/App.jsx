import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './componentes/Weatherinformation/WeatherInfo'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

async function searchCity() {

  const city = inputRef.current.value
  const key = "ff290e023d29ed601ab665d281938e50"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

  const apiInfo = await axios.get(url)
  setWeather(apiInfo.data)
  
}

  return (

        <div>
          <h1>DevClub previsão do tempo</h1>
          <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
          <button onClick={searchCity}>Buscar</button>

          <WeatherInfo/>
        </div>
  )
}

export default App
