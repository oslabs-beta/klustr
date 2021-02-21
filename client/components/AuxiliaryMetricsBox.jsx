import React, { useState, useEffect } from 'react';
import AuxiliaryMetrics from './AuxiliaryMetrics.jsx';
import MetricsDropdown from './MetricsDropdown.jsx';

const AuxiliaryMetricsBox = () => {
  const [auxiliaryMetrics, setAuxiliaryMetrics] = useState({
    //disk_write_bytes: 198273
  });
  const stateCopy = JSON.parse(JSON.stringify(auxiliaryMetrics));
  const [postMetrics, setPostMetrics] = useState([]);

  // handles user's metrics selections
  // const captureInput = (e) => {
  //   let newInput; // expecting an array
  //   if (e.target) newInput = e.target.value;
  //   else newInput = e;

  //   console.log('new input', newInput);
  //   return setPostMetrics(newInput);
  // };

  // handles submission
  const handleSubmit = (arr) => {
    // use captured Input and pass it into the fetch body
    // if (postMetrics.length === 0) console.log('here');
    // else fetchAuxiliaryMetrics(postMetrics);
    setPostMetrics(arr);
    console.log('postmetrics', postMetrics);
    console.log('in handleSubmit');
  };

  const fetchAuxiliaryMetrics = (metricsArr) => {
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
      <MetricsDropdown
        handleSubmit={handleSubmit}
        setPostMetrics={setPostMetrics}
      />
      {/* <button
        type='btn'
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit Input
      </button> */}
      <AuxiliaryMetrics metrics={auxiliaryMetrics} />
    </div>
  );
};

export default AuxiliaryMetricsBox;
