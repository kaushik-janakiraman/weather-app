import React from 'react'
import './style.css'

const Button = (props) => {

    const { makeWeatherApi } = props

    return (
        <React.Fragment>
            <button id='btn' type='submit' onClick={(e) => makeWeatherApi(e)}>Get Weather info</button>
        </React.Fragment>
    )
}

export default Button