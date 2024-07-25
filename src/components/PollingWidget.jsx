import React, { useEffect, useState } from 'react';

const PollingWidget = () => {
  const [polls, setPolls] = useState([]);

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

  if (!polls.length) return <div>Loading...</div>;

  return (
    <div className='poll-widget'>
      {polls.map((poll, index) => {
        // Extracting the question and options from the data
        const question = poll.Question || "No question provided";
        const options = [poll.Option1, poll.Option2, poll.Option3];

        return (
          <div key={index} className='poll-question'>
            <h3>{question}</h3>
            {options.map((option, idx) => (
              option ? (
                <div key={idx} className='poll-option'>
                  <input type='radio' id={`option${index}_${idx}`} name={`question${index}`} value={option.trim()} />
                  <label htmlFor={`option${index}_${idx}`}>{option.trim()}</label>
                </div>
              ) : null
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PollingWidget;
