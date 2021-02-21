import React, { useState, useEffect } from 'react';
import AuxiliaryMetrics from './AuxiliaryMetrics.jsx';
import MetricsDropdown from './MetricsDropdown.jsx';

const AuxiliaryMetricsBox = () => {
  const [auxiliaryMetrics, setAuxiliaryMetrics] = useState({}); // {disk_write_bytes: 198273}
  const stateCopy = JSON.parse(JSON.stringify(auxiliaryMetrics));
  const [postMetrics, setPostMetrics] = useState([]);

  const fetchAuxiliaryMetrics = () => {
    //fetch(`/jmx/metrics/${ip address}`, {
    fetch(`/jmx/advancedMetrics/23.20.153.187:7075`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metrics: postMetrics,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('post response', data);
        const metrics = Object.keys(data);

        metrics.forEach((metric) => {
          if (stateCopy.hasOwnProperty(metric)) {
            stateCopy[metric].push(data[metric]);
            stateCopy[metric].shift();
          } else {
            stateCopy[metric] = [
              data[metric],
              data[metric],
              data[metric],
              data[metric],
              data[metric],
              data[metric],
              data[metric],
              data[metric],
              data[metric],
            ];
          }
        });
        setAuxiliaryMetrics(stateCopy);
      })
      .then(() => {
        setTimeout(fetchAuxiliaryMetrics, 1000);
      });
  };

  // function onClick
  // render graph component

  return (
    <div>
      <MetricsDropdown setPostMetrics={setPostMetrics} />
      <button
        type='btn'
        onClick={() => {
          fetchAuxiliaryMetrics();
        }}
      >
        Submit Input
      </button>
      <AuxiliaryMetrics metrics={auxiliaryMetrics} />
    </div>
  );
};

export default AuxiliaryMetricsBox;
