import React, { useEffect, useState } from 'react';
import '../style/weather.css';
import axios from 'axios';
import { ReactComponent as SunSVG } from '../assets/svgs/sunny_24dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MoonSVG } from '../assets/svgs/dark_mode_24dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg';
import { ReactComponent as CloudSVG } from '../assets/svgs/cloud_24dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg';

const WeatherWidget = ({ location }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (location.length) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=68e0721ec05216ede919eee2ce6758ac&units=metric`)
                .then(response => {
                    setWeatherData(response.data);
                })
                .catch(error => {
                    console.error("error", error);
                });
        }
    }, [location]);

    if (!weatherData) return <div>Loading...</div>;

    const currentTimeUTC = new Date().getTime() / 1000;
    const localTime = currentTimeUTC + weatherData.timezone;
    const isDayTime = localTime > weatherData.sys.sunrise && localTime < weatherData.sys.sunset;
    const cloudSize = weatherData.clouds.all;

    return (
        <div className='weather-widget'>
            {isDayTime ? <SunSVG className='sun' /> : <MoonSVG className='moon' />}
            <div className='cloud-container'>
                {cloudSize > 70 && <CloudSVG className='cloud' />}
            </div>
            <div className='temp'>{Math.round(weatherData.main.temp)}° / {Math.round(weatherData.main.temp_max)}°</div>
            <div className='weather'>{weatherData.weather[0].main}</div>
            <div className='low-high'>{Math.round(weatherData.main.temp_min)}°</div>
            <div className='feels-like'>Feels Like: {Math.round(weatherData.main.feels_like)}°</div>
            <div className='location'>{weatherData.name}</div>
            <div className='humidity'>Humidity: {weatherData.main.humidity}%</div>
        </div>
    );
};

export default WeatherWidget;
