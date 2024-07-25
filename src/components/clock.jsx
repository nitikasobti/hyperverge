import React, { useEffect, useRef } from 'react';
import '../style/clock.css'; // Ensure this path is correct

const Clock = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${(hours % 12) * 30}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minutes * 6}deg)`;
      }
      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${seconds * 6}deg)`;
      }
    };

    const intervalId = setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the clock immediately

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='clock-container'>
      <div className='clock'>
        <div className='hand hour' ref={hourRef}></div>
        <div className='hand minute' ref={minuteRef}></div>
        <div className='hand second' ref={secondRef}></div>
        <div className='number number-12'>12</div>
        <div className='number number-3'>3</div>
        <div className='number number-6'>6</div>
        <div className='number number-9'>9</div>
        {/* Add additional numbers if needed */}
      </div>
    </div>
  );
};

export default Clock;
