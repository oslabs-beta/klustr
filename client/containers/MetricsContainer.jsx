import React, { useState, useEffect } from 'react';
import CoreMetricsBox from '../components/CoreMetricsBox.jsx';
import AuxiliaryMetricsBox from '../components/AuxiliaryMetricsBox.jsx';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors/';

const useStyles = makeStyles({
  root: {
    marginBottom: 50,
    backgroundColor: grey[300],
  },
  title: {
    fontSize: 30,
  },
});

const MetricsContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MetricsContainer = ({ jMXPort }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} align='center'>
            Metrics Dashboard
          </Typography>
        </CardContent>
      </Card>
      <MetricsContainerDiv>
        <CoreMetricsBox jMXPort={jMXPort} />
        <AuxiliaryMetricsBox jMXPort={jMXPort} />
      </MetricsContainerDiv>
    </>
  );
};

export default MetricsContainer;
