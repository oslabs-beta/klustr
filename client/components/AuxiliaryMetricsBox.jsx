import React, { useState, useEffect } from 'react';
import AuxiliaryMetrics from './AuxiliaryMetrics.jsx';
import MetricsDropdown from './MetricsDropdown.jsx';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { cyan } from '@material-ui/core/colors/';

const AuxiliaryMetricsBox = () => {
  const [auxiliaryMetrics, setAuxiliaryMetrics] = useState({}); // {disk_write_bytes: 198273}

  const [postMetrics, setPostMetrics] = useState([]);
  console.log('in Auxiliary metrics box');
  const fetchAuxiliaryMetrics = () => {
    //fetch(`/jmx/metrics/${ip address}`, {
    console.log('postMetrics', postMetrics);
    console.log('AuxMetrics', auxiliaryMetrics);
    console.log('setfunc', setAuxiliaryMetrics);
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
        console.log('post response', data);

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
        setTimeout(fetchAuxiliaryMetrics, 1000);
      });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      backgroundColor: cyan[200],
    },
  }));

  const classes = useStyles();

  return (
    <MetricsContainerDiv>
      <div id='dropdown'>
        <MetricsDropdown setPostMetrics={setPostMetrics} />
        <Button
          variant='contained'
          className='submitMetrics'
          onClick={() => {
            fetchAuxiliaryMetrics();
          }}
        >
          Submit
        </Button>
      </div>
      <AuxiliaryMetrics metrics={auxiliaryMetrics} />
    </MetricsContainerDiv>
  );
};

const MetricsContainerDiv = styled.div`
  maxHeight: 
  display: flex;
  flex-direction: row;
  justify-content: flex-start
`;

export default AuxiliaryMetricsBox;
