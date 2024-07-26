import React, { useState } from 'react';
import WeatherWidget from "./components/weather";
import PollingWidget from "./components/PollingWidget";
import Clock from "./components/clock";
import Pomodoro from './components/pomodorotimer';
import GoogleSlide from './components/googleslide';
import MetaWidget from './components/metawidget';
import Spreadsheet from './components/spreadsheet';
import GoogleFormWidget from './components/form';
import MusicWidget from './components/music';
import BookQuoteWidget from './components/bookquote';
import DailyGrowthChecklist from './components/dailytracker';

import './App.css';
import './style/weather.css';
import './style/poll.css';
import './style/clock.css';
import './style/pomodoro.css';
import './style/googleslide.css';
import './style/spreadsheet.css';
import './style/form.css';
import './style/music.css';
import './style/bookquote.css';
import './style/dailytracker.css'

function App() {
  const [inputValue, setInputValue] = useState('Delhi');
  const [location, setLocation] = useState('Delhi');
  const [widgets, setWidgets] = useState({
    weatherWidget: true,
    pollingWidget: true,
    clock: true,
    pomodoro: true,
    googleSlide: true,
    metaWidget: true,
    googleSpreadsheetWidget: true,
    googleFormWidget: true,
    musicWidget: true,
    bookQuoteWidget: true,
    dailyGrowthChecklistWidget: true,
  });

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleWidget = (widgetName) => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      [widgetName]: !prevWidgets[widgetName],
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLocation(inputValue);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="App">
      <header>
        <h1>HYPERVERGE</h1>
      </header>
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
      {sidebarVisible && (
        <div className="sidebar sidebar-visible">
          <h2>Manage Widgets</h2>
          <button onClick={() => toggleWidget('weatherWidget')}>Toggle Weather</button>
          <button onClick={() => toggleWidget('pollingWidget')}>Toggle Polling</button>
          <button onClick={() => toggleWidget('clock')}>Toggle Clock</button>
          <button onClick={() => toggleWidget('pomodoro')}>Toggle Pomodoro</button>
          <button onClick={() => toggleWidget('googleSlide')}>Toggle GoogleSlide</button>
          <button onClick={() => toggleWidget('metaWidget')}>Toggle MetaWidget</button>
          <button onClick={() => toggleWidget('googleSpreadsheetWidget')}>Toggle Spreadsheet</button>
          <button onClick={() => toggleWidget('googleFormWidget')}>Toggle Form</button>
          <button onClick={() => toggleWidget('musicWidget')}>Toggle Music</button>
          <button onClick={() => toggleWidget('bookQuoteWidget')}>Toggle BookQuote</button>
          <button onClick={() => toggleWidget('dailyGrowthChecklistWidget')}>Toggle Checklist</button>
        </div>
      )}
      <div className="content">
        <div className="top-widgets">
          {widgets.weatherWidget && <WeatherWidget location={location} />}
          {widgets.pollingWidget && <PollingWidget />}
          {widgets.pomodoro && <Pomodoro />}
          {widgets.clock && <Clock className="clock-widget" />}
        </div>
        <div className="widgets">
          {widgets.googleSlide && <GoogleSlide className="full-width-widget" />}
          {widgets.googleSpreadsheetWidget && (
            <Spreadsheet sheetDbUrl="https://sheetdb.io/api/v1/wmi6sb0abglyt" className="full-width-widget" />
          )}
          {widgets.googleFormWidget && (
            <GoogleFormWidget formUrl="https://docs.google.com/forms/d/e/1FAIpQLSf1C4DIhqbKjcpk_ONH01XVPn5qHSxt6tq8oQYbst32nW_LiA/viewform?embedded=true" />
          )}
          {widgets.musicWidget && (
        <MusicWidget trackUrl="https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3" />
      )}
          <div className="side-by-side-widgets">
            {widgets.bookQuoteWidget && (
              <BookQuoteWidget
                title="To Kill a Mockingbird"
                author="Harper Lee"
                quote="You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it."
                amazonUrl="https://www.amazon.com/dp/B00K0OI42W"
                goodreadsUrl="https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird"
                reader="John Doe"
              />
            )}
            {widgets.dailyGrowthChecklistWidget && <DailyGrowthChecklist />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
