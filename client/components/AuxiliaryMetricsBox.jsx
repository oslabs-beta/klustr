import React, { useState, useRef } from 'react';
import AuxiliaryMetrics from './AuxiliaryMetrics.jsx';
import MetricsDropdown from './MetricsDropdown.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Component to Handle Auxiliary Metrics from JMX Exporter
const AuxiliaryMetricsBox = ({ jMXPort }) => {
  const [auxiliaryMetrics, setAuxiliaryMetrics] = useState({}); 
  const [postMetrics, setPostMetrics] = useState([]);
  const [pause, setPause] = useState(false);

  // pauseRef allows the current state of pause to be accessed inside of setTimeout in setAuxiliaryMetrics
  const pauseRef = useRef(pause);
  pauseRef.current = pause;

  const fetchAuxiliaryMetrics = () => {
    fetch(`/jmx/advancedMetrics/${jMXPort}`, {
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

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    pausestart: {
      fontSize: 20,
    },
    controls: {
      height: 100,
    },
  }));

  const classes = useStyles();

  // metrics dropdown for users to select auxiliary metrics to view and capture inputs onClick for graphing
  return (
    <div>
      <div id='dropdown'>
        <MetricsDropdown setPostMetrics={setPostMetrics} />
        <Button
          variant='contained'
          className='submitMetrics'
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
          Submit
        </Button>
      </div>

      <AuxiliaryMetrics
        metrics={auxiliaryMetrics}
        setPause={setPause}
        pause={pause}
        fetchAuxMetrics={fetchAuxiliaryMetrics}
        classes={classes}
      />
    </div>
  );
};

export default AuxiliaryMetricsBox;
