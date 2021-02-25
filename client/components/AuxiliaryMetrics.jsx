import React from 'react';
import Button from '@material-ui/core/Button';
import LineGraphMetrics from './LineGraphMetrics.jsx';
import MetricsOptions from './MetricsOptions.jsx';

// container for graphs
const AuxiliaryMetrics = ({
  metrics,
  fetchAuxMetrics,
  classes,
  setPause,
  pause,
}) => {
  const graphs = [];
  const chartOptions = {};
  const keys = Object.keys(metrics);
  keys.forEach((key) => {
    const keyID = `${key}`;
    if (!MetricsOptions.hasOwnProperty(keyID))
      chartOptions[keyID] = MetricsOptions.default;
    else chartOptions[keyID] = MetricsOptions[keyID];
    graphs.push(
      <li key={keyID}>
      <LineGraphMetrics
        chartOptions={chartOptions[keyID]}
        chartLabel={keyID}
        metricData={metrics[key]}
      />
      </li>
    );
  });

  // button to pause and restart metrics flow
  let button;

  if (keys.length > 0)
    button = (
      <div id='pausebtn'>
        <Button
          variant='contained'
          className={classes.pausestart}
          onClick={() => {
            if (pause) {
              setPause(false);
              fetchAuxMetrics();
            } else setPause(true);
          }}
        >
          PAUSE / RESTART Metrics Stream
        </Button>
      </div>
    );

  return (
    <div>
      {button}
      <ul>
        {graphs}
      </ul>
    </div>
  );
};

export default AuxiliaryMetrics;
