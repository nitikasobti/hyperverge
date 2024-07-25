import React, { useState } from 'react';
import WeatherWidget from "./components/weather";
import PollingWidget from "./components/PollingWidget";
import Clock from "./components/clock"; // Import the AnalogClock
import Pomodoro from './components/pomodorotimer';
import GoogleSlide from './components/googleslide';
import './style/weather.css'; // Ensure styles are imported
import './style/poll.css'; // Ensure styles are imported
import './style/clock.css'; // Import CSS for the AnalogClock
import './style/pomodoro.css'
import './style/googleslide.css'


function App() {
  const [inputValue, setInputValue] = useState('Delhi');
  const [location, setLocation] = useState('Delhi');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLocation(inputValue);
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type='submit'> Update Location </button>
      </form>
      <WeatherWidget location={location} />
      <PollingWidget />
      <Clock /> {/* Render the AnalogClock */}
      <Pomodoro/>
      <GoogleSlide/>

    </div>
  );
}

export default App;
