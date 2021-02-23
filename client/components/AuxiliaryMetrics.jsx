import React from 'react';
import Button from '@material-ui/core/Button';
import LineGraphMetrics from './LineGraphMetrics.jsx';

const AuxiliaryMetrics = ({ metrics, fetchAuxMetrics, classes, setPause, pause }) => {
  const graphs = [];

  const keys = Object.keys(metrics);
  keys.forEach((key) =>
    graphs.push(
      <LineGraphMetrics chartLabel={`${key}`} metricData={metrics[key]} />
    )
  );

  let button;

  if (keys.length > 0)
    button = (
      <div id='pausebtn'>
        <Button
          variant='contained'
          className={classes.pausestart}
          onClick={() => {
            console.log(pause);
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
      {graphs}
    </div>
  );
};

export default AuxiliaryMetrics;
