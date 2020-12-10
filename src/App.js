import React from 'react'
import NavBar from './commponents/NavBar'
import Provider from './context'
import WeatherCards from './commponents/WeatherCards'
import SearchWeather from './commponents/SearchWeather'
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <SearchWeather/>
      <Provider>
      <WeatherCards/>
      </Provider>
    </React.Fragment>
  );
}

export default App;
