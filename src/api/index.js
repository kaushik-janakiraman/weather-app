import axios from 'axios'
import {key} from '../constants/key'

const fetchWeatherData = async (city) => {

    try {
        const data = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
        const weather = await data.data
        return weather
    } catch (err) {
        throw new Error(err)
    }
}

export default fetchWeatherData