import React, { useEffect, useState } from 'react';
import '../style/poll.css'; // Import the CSS file for styling

const PollingWidget = () => {
  const [polls, setPolls] = useState([]);
  const [currentPollIndex, setCurrentPollIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const readGoogleSheet = () => {
    fetch('https://sheetdb.io/api/v1/miimaq8fh4met')
      .then((response) => response.json())
      .then((data) => {
        setPolls(data);
      })
      .catch((error) => {
        console.error("Error fetching poll data:", error);
      });
  };

  useEffect(() => {
    readGoogleSheet();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextPoll = () => {
    setSelectedOption(''); // Clear selected option for the next poll
    setCurrentPollIndex((prevIndex) => {
      if (prevIndex < polls.length - 1) {
        return prevIndex + 1;
      } else {
        return prevIndex; // Stay on the last poll if at the end
      }
    });
  };

  const handleSubmit = () => {
    alert('Poll submitted!');
    // Handle poll submission here
  };

  if (!polls.length) return <div className='loading'>Loading...</div>;

  const currentPoll = polls[currentPollIndex];
  const question = currentPoll.Question || "No question provided";
  const options = [currentPoll.Option1, currentPoll.Option2, currentPoll.Option3];

  const isButtonDisabled = !selectedOption;
  const buttonClass = isButtonDisabled ? 'button-disabled' : 'button-enabled';

  return (
    <div className='poll-widget'>
      <div className='poll-question'>
        <h3>{question}</h3>
        {options.map((option, idx) => (
          option ? (
            <div key={idx} className='poll-option'>
              <input 
                type='radio' 
                id={`option${currentPollIndex}_${idx}`} 
                name={`question${currentPollIndex}`} 
                value={option.trim()} 
                checked={selectedOption === option.trim()}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option${currentPollIndex}_${idx}`}>{option.trim()}</label>
            </div>
          ) : null
        ))}
      </div>
      <div className='poll-buttons'>
        {currentPollIndex < polls.length - 1 ? (
          <button 
            onClick={handleNextPoll} 
            className={buttonClass}
            disabled={isButtonDisabled}
          >
            Next
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            className={buttonClass}
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default PollingWidget;
