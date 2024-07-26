import React from 'react';
import PropTypes from 'prop-types';
import '../style/music.css';

const MusicWidget = ({ trackUrl }) => {
  return (
    <div className="music-widget">
      <iframe
        src={trackUrl}
        width="100%"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Music Player"
      ></iframe>
    </div>
  );
};

MusicWidget.propTypes = {
  trackUrl: PropTypes.string.isRequired,
};

export default MusicWidget;
