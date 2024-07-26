import React, { useEffect, useState } from 'react';
import '../style/spreadsheet.css'

const GoogleSpreadsheetWidget = ({ sheetDbUrl }) => {
  const [data, setData] = useState([]);

  const readGoogleSheet = () => {
    fetch(sheetDbUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching spreadsheet data:", error);
      });
  };

  useEffect(() => {
    readGoogleSheet();
  }, [sheetDbUrl]);

  return (
    <div className="spreadsheet-widget">
      <h2>Lunch Menu</h2>
      <table>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSpreadsheetWidget;
