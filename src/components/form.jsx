import React from 'react';
import PropTypes from 'prop-types';
import '../style/form.css'; // Import the CSS file for styling

const GoogleFormWidget = ({ formUrl }) => {
  return (
    <div className="google-form-widget">
      <iframe
        src={formUrl}
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

GoogleFormWidget.propTypes = {
  formUrl: PropTypes.string.isRequired,
};

export default GoogleFormWidget;
