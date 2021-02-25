import React, { useState, useEffect } from 'react';
import CoreMetricsCard from './CoreMetricsCard.jsx';
import { Grid } from '@material-ui/core';

const CoreMetricsBox = ({ jMXPort }) => {
  const [coreMetrics, setCoreMetrics] = useState({});

  // fetch request gathers core metrics active controller, underreplicated partitions and offline partitions
  const fetchCoreMetrics = () => {
    fetch(`/jmx/metrics/${jMXPort}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoreMetrics(data);
      })
      .then(() => {
        setTimeout(fetchCoreMetrics, 3000);
      });
  };

  useEffect(() => {
    fetchCoreMetrics();
  }, []);

  const coreMetricNames = [
    'ACTIVE\nCONTROLLERS',
    'UNDERREPLICATED\n PARTITIONS',
    'OFFLINE\n PARTITIONS',
  ];

  const metricsCards = Object.values(coreMetrics).map((value, index) => {
    return (
      <Grid xs={12} sm={3}>
        <CoreMetricsCard metric={value} name={coreMetricNames[index]} />
      </Grid>
    );
  });

  return (
    <>
      <Grid container justify='center' spacing={4}>
        {metricsCards}
      </Grid>
    </>
  );
};

export default CoreMetricsBox;
