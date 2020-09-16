import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super()
        this.state = {
            weather: null,
            lat: null,
            lon: null,
            api: '41620c4538b29ca4439b9a0bc1d57d48'
            }
        }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success)
    }

    success = (position) => {
        const crd = position.coords;
        this.setState({lat: crd.latitude, lon: crd.longitude})
        this.pollWeather();
    }

    watchPosition = () => {

    }

    pollWeather = async () => {
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.state.api}`)
        const weather = await data.json();
        const tempInK = weather.main.feels_like
        const temp = (tempInK - 273.15) * 9 / 5 + 32;
        this.setState({weather: temp});
    }

    render() {
        return(
            <>
                <h1>Weather</h1>
                <div className="weather-box">
                    <div>
                        <h1>Temperature is: {this.state.weather}</h1>
                    </div>
                </div>
            </>
        )
    }
}








export default Weather;
