import React from 'react';
import PropTypes from 'prop-types';
import '../style/bookquote.css';

const BookQuoteWidget = ({ title, author, quote, amazonUrl, goodreadsUrl, reader }) => {
  return (
    <div className="book-quote-widget">
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <blockquote>"{quote}"</blockquote>
      <p>Read by {reader}</p>
      <div className="links">
        <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
          <button className="amazon-button">View on Amazon</button>
        </a>
        <a href={goodreadsUrl} target="_blank" rel="noopener noreferrer">
          <button className="goodreads-button">View on Goodreads</button>
        </a>
      </div>
    </div>
  );
};

BookQuoteWidget.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  amazonUrl: PropTypes.string.isRequired,
  goodreadsUrl: PropTypes.string.isRequired,
  reader: PropTypes.string.isRequired,
};

export default BookQuoteWidget;
