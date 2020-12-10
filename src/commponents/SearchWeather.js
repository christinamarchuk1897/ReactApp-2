import React, { Component } from 'react'
import axios from 'axios'
import CurrentCountry from '../commponents/CurrentCountry'
export default class SearchWeather extends Component {
    state={
        value: '',
        result: {}
    }
    searchWeather(e){
        e.preventDefault()
        let {value} = this.state
        if(value !== ''){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=42567c8c1ec20450ac05f1f0133739be
        `).then(res=>{
            this.setState({result: res.data, value: ''});
        })
        }
    
    }
    onChange(e){
        this.setState({value: e.target.value});
    }
    render() {
        let {result} = this.state;
        return (
            <React.Fragment>
                <h1 className="h1 text-center margin">Find Current Weather now: </h1>
                <form onSubmit={this.searchWeather.bind(this)} className='form-width'>
                    <div className="form-group">
                        <input 
                        onChange={this.onChange.bind(this)} 
                        type='text' className="form-control form-control-lg"
                        value={this.state.value}/>
                </div>
                    <button 
                        className="btn btn-secondary btn-lg btn-block mb-5 " 
                        type='submit'>Find!
                    </button>
            </form>

            {Object.keys(result).length !== 0 ? 
            <div className='card text-white bg-secondary mb-3 card-width mx-auto'>
                <CurrentCountry value={result}/>
            </div> : ''}
            </React.Fragment>
        )
    }
}
