import React, { useState, useEffect } from 'react';
import CoreMetrics from './CoreMetrics.jsx';

const CoreMetricsBox = () => {
  const [coreMetrics, setCoreMetrics] = useState({
    // activeControllers: 1,
    // replicatedPartitions: 0,
    // offlinePartitions: 0
  });

  const fetchCoreMetrics = () => {
    //fetch(`/jmx/metrics/${port}`, {
    fetch(`/jmx/metrics/23.20.153.187:7075`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCoreMetrics(data);
      })
      .then(() => {
        setTimeout(fetchCoreMetrics, 50000);
      });
  };

  useEffect(() => {
    fetchCoreMetrics();
  }, []);

  return (
    <div>
      <h4>Active Controllers:</h4>
      <CoreMetrics metric={coreMetrics.activeControllers} />
      <h4>Replicated Partitions:</h4>
      <CoreMetrics metric={coreMetrics.replicatedPartitions} />
      <h4>Offline Partitions:</h4>
      <CoreMetrics metric={coreMetrics.offlinePartitions} />
    </div>
  );
};

export default CoreMetricsBox;
