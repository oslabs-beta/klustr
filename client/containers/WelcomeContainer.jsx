import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tempLogo from '../LogoDots.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const LogoGoesBrrr = styled.div`
  display: inline-block;
  padding: 0;
  font-size: 1.2rem;
`;

function Welcome({ setRedirect, setJMXPort }) {
  const [portInput, setPortInput] = useState('');
  const [jMXInput, setJMXInput] = useState('');

  // post request to back end that sends Broker Port and JMX Exporter Port
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!portInput || !jMXInput) {
    //   alert('Please enter the required ports');
    // }

    if (portInput) {
      fetch('/admin/brokerAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brokers: [portInput],
        }),
      })
        .then((data) => data.json())
        .then((data) => console.log(data));
    }
    if (jMXInput) {
      setJMXPort(jMXInput);
    }
    setRedirect(true);
  };

  // Material UI styling
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div id='welcomeContainer'>
      <LogoGoesBrrr>
        <img
          className='rotate'
          id='welcomeLogo'
          src={tempLogo}
          alt='Kafka Specks Logo'
        />
        <div id='klustr'>klustr</div>
      </LogoGoesBrrr>

      <form id='inputs' className={classes.root} noValidate>
        <TextField
          className={classes.textfield}
          label='Enter Broker Port'
          helperText='required'
          required
          id='standard-required'
          onChange={(event) => {
            setPortInput(event.target.value);
          }}
        />
        <TextField
          className={classes.textfield}
          label='Enter Exporter Port'
          helperText='required'
          required
          id='standard-required'
          onChange={(event) => {
            setJMXInput(event.target.value);
          }}
        />
        <br></br>
        <Button
          variant='contained'
          className='submitMetrics'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Welcome;
