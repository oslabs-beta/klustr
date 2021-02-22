import React, { useState, useEffect, useRef } from 'react';
import AuxiliaryMetrics from './AuxiliaryMetrics.jsx';
import MetricsDropdown from './MetricsDropdown.jsx';

const AuxiliaryMetricsBox = ({}) => {
  const [auxiliaryMetrics, setAuxiliaryMetrics] = useState({}); // {disk_write_bytes: 198273}
  const [postMetrics, setPostMetrics] = useState([]);
  const [pause, setPause] = useState(false);
  const pauseRef = useRef(pause);
  pauseRef.current = pause;

  const fetchAuxiliaryMetrics = () => {
    console.log('fetching aux metrics');
    console.log(postMetrics);
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
        setAuxiliaryMetrics((prevState) => {
          const metrics = Object.keys(data);
          const stateCopy = JSON.parse(JSON.stringify(prevState));
          metrics.forEach((metric) => {
            if (stateCopy.hasOwnProperty(metric)) {
              stateCopy[metric].push(data[metric]);
              if (stateCopy[metric].length > 11) stateCopy[metric].shift();
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
                data[metric],
                data[metric],
              ];
            }
          });
          return stateCopy;
        });
      })
      .then(() => {
        if (!pauseRef.current) setTimeout(fetchAuxiliaryMetrics, 1000);
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
          if (pause) setPause(false);
          setAuxiliaryMetrics((prevState) => {
            const metrics = Object.keys(prevState);
            const stateCopy = JSON.parse(JSON.stringify(prevState));
            metrics.forEach((key) => delete stateCopy[key]);
            return stateCopy;
          });
          fetchAuxiliaryMetrics();
        }}
      >
        Submit Input
      </button>
      <button
        type='btn'
        onClick={() => {
          console.log(pause);
          if (pause) {
            setPause(false);
            fetchAuxiliaryMetrics();
          } else setPause(true);
        }}
      >
        Stop/Start
      </button>
      <AuxiliaryMetrics metrics={auxiliaryMetrics} />
    </div>
  );
};

export default AuxiliaryMetricsBox;
