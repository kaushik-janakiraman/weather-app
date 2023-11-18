import React from 'react'
import './style.css'

const WeatherCard = (props) => {

    const {weather} = props

    const bgChange = () => {
        const season = weather?.current?.condition?.text?.toLowerCase()
        if(season.includes('mist')) {
            return 'mist'
        } else if(season.includes('cloud')) {
            return 'cloudy'
        } else if(season.includes('rain')) {
            return 'rainy'
        } else if(season.includes('sun') || season.includes('clear')) {
            return 'sunny'
        } else {
            return 'default'
        }
    }

    return (
        <React.Fragment>
            <div id='container' className={bgChange()} >
                <p id='city'>{`${weather.location.name}, ${weather.location.region}, ${weather.location.country}`}</p>
                <p id='temp'>{weather.current.temp_c} &deg;C</p>
                <p id='feel-temp'>Feels like: {weather.current.feelslike_c} &deg;C</p>
                <p id='season'>{weather.current.condition.text}</p>
            </div>
        </React.Fragment>
    )

}

export default WeatherCard