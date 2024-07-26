import React, { useState } from 'react';

function MetaWidget({ widgets, toggleWidget }) {
  return (
    <div>
      {Object.keys(widgets).map((widgetName) => (
        <div key={widgetName}>
          <label>
            <input
              type="checkbox"
              checked={widgets[widgetName]}
              onChange={() => toggleWidget(widgetName)}
            />
            {widgetName}
          </label>
        </div>
      ))}
    </div>
  );
}

export default MetaWidget;
