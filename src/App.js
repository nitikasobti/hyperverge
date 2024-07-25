import React, { useState } from 'react';
import WeatherWidget from "./components/weather";
import PollingWidget from "./components/PollingWidget";
import Clock from "./components/clock";
import Pomodoro from './components/pomodorotimer';
import GoogleSlide from './components/googleslide';
import './style/App.css';
import './style/widget-container.css';
import './style/weather.css';
import './style/poll.css';
import './style/clock.css';
import './style/pomodoro.css';
import './style/googleslide.css';

function App() {
  const [inputValue, setInputValue] = useState('Delhi');
  const [location, setLocation] = useState('Delhi');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLocation(inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Noticeboard</h1>
        <form onSubmit={handleFormSubmit} className="location-form">
          <input 
            type='text' 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Enter location" 
          />
          <button type='submit'>Update Location</button>
        </form>
      </header>
      <div className="widget-container">
        <WeatherWidget location={location} />
        <PollingWidget />
        <Pomodoro />
        <GoogleSlide />
      </div>
      <div className="clock-container">
        <Clock />
      </div>
    </div>
  );
}

export default App;
