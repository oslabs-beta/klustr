import React, {useState, useEffect} from 'react';
import CoreMetrics from './CoreMetrics.jsx';

const CoreMetricsBox = () => {

    const [coreMetrics, setCoreMetrics] = useState({})

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
      .then() => setTimeout(fetchCoreMetrics,5000);
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCoreMetrics();
  }, []);

  return (
    <div>
      <CoreMetrics metric={coreMetrics.activeControllers} />
      <CoreMetrics metric={coreMetrics.replicatedPartitions} />
      <CoreMetrics metric={coreMetrics.offlinePartitions} />
    </div>;
  )
};

export default CoreMetricsBox;
