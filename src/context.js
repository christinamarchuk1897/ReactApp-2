import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()
export default class Provider extends Component {
    state = {
        weather: [],
        header: 'Weather in the World'       
    }
    componentDidMount(){
        let countries = ['London', 'Kyiv', 'Berlin', 'Paris']
        let info = []
        countries.forEach(el=>{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=42567c8c1ec20450ac05f1f0133739be
        `).then(res=>{
            info.push(res.data)
            this.setState({weather: info})
        })
        })
                        
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
                
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer