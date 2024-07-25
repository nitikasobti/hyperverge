import React from 'react';
import '../style/googleslide.css';

const GoogleSlide = () => (
  <div className="google-slide-container">
    <iframe
      src="https://docs.google.com/presentation/d/1k2wKjkbwetaW5ZFg2WOhh-pdkTeCmN8SJl0fhCTCLj4/embed?start=true&loop=true&delayms=3000"
      title="Google Slide"
      allowFullScreen
    ></iframe>
  </div>
);

export default GoogleSlide;
