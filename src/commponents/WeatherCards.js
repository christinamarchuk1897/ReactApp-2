import React, { Component } from 'react'
import { Consumer } from '../context'

import '../App.css'
import CurrentCountry from './CurrentCountry'
export default class WeatherCards extends Component {
    
    render() {
        return (
            <Consumer>
                {value =>{
                   const {weather, header} = value
                    if(Object.keys(weather).length !== 0){
                        return <React.Fragment>
                        <h1 className='h1 text-center margin'><strong>{header}</strong></h1>
                        <div className="container">
                        {weather.map(value=>{
                            return <div className="card text-white bg-dark mb-3 card-width">
                                        <CurrentCountry value={value}/>
                                    </div> 
                        })}
                        </div>
                    </React.Fragment>
                    }
                }}
            </Consumer>
        )
    }
}
