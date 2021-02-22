import React, { useState, useEffect, useRef } from 'react';
import AuxiliaryMetrics from './AuxiliaryMetrics.jsx';
import MetricsDropdown from './MetricsDropdown.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
      <div id='pausebtn'>
        <Button
          variant='contained'
          className={classes.pausestart}
          onClick={() => {
            console.log(pause);
            if (pause) {
              setPause(false);
              fetchAuxiliaryMetrics();
            } else setPause(true);
          }}
        >
          PAUSE / RESTART Metrics Stream
        </Button>
      </div>
      {/* <MetricsDropdown setPostMetrics={setPostMetrics} /> */}
      {/* <button
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
      </button> */}
      {/* <button
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
      </button> */}
      <AuxiliaryMetrics
        metrics={auxiliaryMetrics}
        setPause={setPause}
        fetchAuxMetrics={fetchAuxiliaryMetrics}
      />
    </div>
  );
};

export default AuxiliaryMetricsBox;
