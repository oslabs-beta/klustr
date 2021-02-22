import React, { useState, useEffect, useRef } from 'react';
import CoreMetrics from './CoreMetrics.jsx';
import CoreMetricsCard from './CoreMetricsCard.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CoreMetricsBox = ({jMXPort}) => {
  const [coreMetrics, setCoreMetrics] = useState({
    // activeControllers: 1,
    // replicatedPartitions: 0,
    // offlinePartitions: 0
  });

  const fetchCoreMetrics = () => {
    console.log('fetching core metrics');
    fetch(`/jmx/metrics/${jMXPort}`, {
    // fetch(`/jmx/metrics/23.20.153.187:7075`, {
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
        {/* <div>
        <h4>Active Controllers:</h4>
        <CoreMetrics metric={coreMetrics.activeControllers} />
        <h4>Replicated Partitions:</h4>
        <CoreMetrics metric={coreMetrics.replicatedPartitions} />
        <h4>Offline Partitions:</h4>
        <CoreMetrics metric={coreMetrics.offlinePartitions} />
      </div> */}
      </Grid>
    </>
  );
};

export default CoreMetricsBox;
