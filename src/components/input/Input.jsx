import React from 'react'
import './style.css'

const Input = (props) => {

    const { data, setData } = props

    return (
        <React.Fragment>
            <input id='text-field' type='text' value={data} onChange={(e) => setData(e.target.value)} />
        </React.Fragment>
    )
}

export default Input