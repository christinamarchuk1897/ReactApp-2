import React from 'react'
import '../App.css'
export default function CurrentCountry(props) {
    let {value} = props
    return (
        <React.Fragment>
            <div className="card-header">{value.name}</div>
                <div className="card-body">
                    <ul>
                        <li>Temperature: {Math.round(value.main.temp - 273.15)}C 
                        | Feels like: {Math.round(value.main.feels_like - 273.15)}C</li>
                        <li> Weather: {value.weather[0].main}</li>
                        <li>Wind Speed: {value.wind.speed} m/s</li>
                    </ul>
                   
                </div>
        </React.Fragment>
    )
}
