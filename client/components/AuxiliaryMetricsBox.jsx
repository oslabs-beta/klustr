import React, { useState, useEffect } from 'react';
import AuxiliaryMetrics from './AuxiliaryMetrics.jsx';
import MetricsDropdown from './MetricsDropdown.jsx';

const AuxiliaryMetricsBox = () => {
  const [auxiliaryMetrics, setAuxiliaryMetrics] = useState({
    //disk_write_bytes: 198273
  });
  const stateCopy = JSON.parse(JSON.stringify(auxiliaryMetrics));

  const fetchAuxiliaryMetrics = () => {
    //fetch(`/jmx/metrics/${ip address}`, {
    fetch(`/jmx/advancedMetrics/23.20.153.187:7075`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metrics: ['disk_write_bytes', 'disk_read_bytes'],
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
          } else {
            stateCopy[metric] = [data[metric]];
          }
        });
        setAuxiliaryMetrics(stateCopy);
      })
      .then(() => {
        setTimeout(fetchAuxiliaryMetrics, 5000);
      });
  };

  useEffect(() => {
    fetchAuxiliaryMetrics();
  }, []);

  return (
    <div>
      <MetricsDropdown />
      <AuxiliaryMetrics metrics={auxiliaryMetrics} />
    </div>
  );
};

export default AuxiliaryMetricsBox;
