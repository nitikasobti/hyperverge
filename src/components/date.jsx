import React, { useState, useEffect } from 'react';
import '../style/date.css'

const NewWidget = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Update dateTime every second
    const timerId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(timerId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className='date-time-widget'>
      <h2>Current Date and Time</h2>
      <p><strong>Day, Date:</strong> {formatDate(dateTime)}</p>
      <p><strong>Time:</strong> {formatTime(dateTime)}</p>
    </div>
  );
};

export default NewWidget;
