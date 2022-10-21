import React, { useState} from 'react'
import './Weather.css'
export default function Weather(props) {
    const [status, setStatus] = useState(null);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [city, setCity] = useState(null);
    const [temp, setTemp] = useState(null);
    const [description, setDescription] = useState(null);
    const [icon, setIcon] = useState(null);
    const [wind, setWind] = useState(null);
    const [status2, setStatus2] = useState(null);
    const [city2, setCity2] = useState(null);
    const [temp2, setTemp2] = useState(null);
    const [description2, setDescription2] = useState(null);
    const [icon2, setIcon2] = useState(null);
    const [wind2, setWind2] = useState(null);
    const [error, setError] = useState(null);
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Wait...');
            navigator.geolocation.getCurrentPosition((position) => {   // takes two functions
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }
    const getCityWeather = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('Search').value}&appid=${props.apiKey}`
            setStatus2('Wait...')
            let response = await fetch(url)
            if (response.ok) {
                let parsedResponse = await response.json()
                setStatus2(null)
                setCity2(document.getElementById('Search').value)
                setTemp2(Math.round((parsedResponse.main.temp - 273) * 10) / 10)
                setDescription2(parsedResponse.weather[0].description.charAt(0).toUpperCase().concat(parsedResponse.weather[0].description.substring(1)))
                setIcon2(parsedResponse.weather[0].icon)
                setWind2(parsedResponse.wind.speed)
                setError(null)
            }
            else {
                throw new Error('Network response was not ok.')
            }
        } catch (error) {
            setError(error)
            setCity2(null)
            setTemp2(null)
            setDescription2(null)
            setIcon2(null)
            setWind2(null)
            setStatus2(null)
        }
        document.getElementById('Search').value = "" // to erase the search field after click
    }
        if (lat !== null && lng !== null) {
            const getLocalWeather = async () => {
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${props.apiKey}`
                let response = await fetch(url)
                let parsedResponse = await response.json()
                setCity(parsedResponse.name)
                setTemp(Math.round((parsedResponse.main.temp - 273) * 10) / 10)
                setDescription(parsedResponse.weather[0].description.charAt(0).toUpperCase().concat(parsedResponse.weather[0].description.substring(1)))
                setIcon(parsedResponse.weather[0].icon)
                setWind(parsedResponse.wind.speed)
            }
            getLocalWeather();
        }
    return (
        <div id='weatherBox'>
            <div id="heading">
                Weather Daily 🌤
            </div>
            <div id='weather'>
                <div id="cityWeather">
                    <form className="form" role="search" onSubmit={(e) => { e.preventDefault(); getCityWeather() }}>
                        <input id="Search" type="search" placeholder="Search City..." label="Search" />
                    </form>
                    <div className='info'>
                        {status2 && <p className='status'>{status2}</p>}
                        {!status2 && city2 && <p className='city'>{city2.charAt(0).toUpperCase().concat(city2.substring(1))}</p>}
                        {!status2 && temp2 !== null && <p className='temperature'>{temp2}°C</p>}
                        {!status2 && description2 && <p className='description'><span>{description2}</span><img className='iconimg' src={`http://openweathermap.org/img/wn/${icon2}@2x.png`} alt="" /></p>}
                        {!status2 && wind2 !== null && <p className='windSpeed'>Wind Speed: {wind2} m/s</p>}
                        {!status2 && error && <p className='status'>Enter valid city name</p>}
                    </div>
                </div>
                <div id="localWeather">
                    <button id="button" onClick={getLocation}>Local Weather</button>
                    <div className='info'>
                        {status && <p className='status'>{status}</p>}
                        {!status && city && <p className='city'>{city}</p>}
                        {!status && temp !== null && <p className='temperature'>{temp}°C</p>}
                        {!status && description && <p className='description'><span>{description}</span><img className='iconimg' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /></p>}
                        {!status && wind !== null && <p className='windSpeed'>Wind Speed: {wind} m/s</p>}
                    </div>
                </div>
            </div>

        </div>
    )
}
// 357bec433a37b225287710887b023a41