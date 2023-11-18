import React, {useState, useEffect, lazy, Suspense} from 'react'
import Input from '../input'
import Button from '../button'
import SetLocation from '../handleError/SetLocation'
const WeatherCard = lazy(() => import('../weatherCard'))
import fetchWeatherData from '../../api'

const Content = () => {

    const [data, setData] = useState('')
    const [weatherData, setWeatherData] = useState({})
    const [isLocation, setIsLocation] = useState(false)

    const getWeatherData = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if(data) {
            fetchWeatherData(data).then(resp => setWeatherData(resp)).catch(() => setIsLocation(true))
            setIsLocation(false)
        } else {
            setIsLocation(true)
        }
        setData('')
    }

    useEffect(() => {
        console.log(weatherData)
    }, [weatherData])

    return (
        <React.Fragment>
            <Input data={data} setData={setData} />
            <Button makeWeatherApi={getWeatherData} />
            {isLocation && <SetLocation />}
            <Suspense fallback={<h1 style={{textAlign: 'center'}}>Fallback</h1>}>
                {(Object.keys(weatherData).length) > 0 && !(isLocation) && <WeatherCard weather={weatherData} />}
            </Suspense>
        </React.Fragment>
    )
}

export default Content