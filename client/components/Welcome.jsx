import React, { PureComponent, useState } from 'react';
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
  // hook that contains the broker address(es) and update broker address(es)
  // hook that contains the text input and update text input
  const [portInput, setPortInput] = useState('');
  const [jMXInput, setJMXInput] = useState('');
  // const [redirect, setRedirect] = useState(false);
  // add an onChange to input
  // add onclick/onsubmit to form?
  // post request to back end that sends broker ids
  const handleSubmit = (e) => {
    //   // prevent refresh with each letter
    e.preventDefault();
    //   // if there is a port address
    if (portInput) {
      //     // create port object from 'portInput' input

      // post request
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
    // setPortInput(''); // clear out the port address input or keep displaying current port?
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
  }));

  const classes = useStyles();

  // render() {
  return (
    <div id='welcomeContainer'>
      {/* <h2>KAFKA SPECKS</h2> */}

      <LogoGoesBrrr>
        <img
          className='rotate'
          id='welcomeLogo'
          src={tempLogo}
          alt='Kafka Specks Logo'
        />
        <div id='klustr'>klustr</div>
      </LogoGoesBrrr>

      {/* <p id='welcomeText'>
            To get started, please enter your Port Address on the left.
          </p> */}
      <form id='inputs' className={classes.root} noValidate>
        <TextField
          id='outlined-basic'
          label='Enter Broker Port'
          onChange={(event) => {
            setPortInput(event.target.value);
          }}
        />
        <TextField
          id='outlined-basic'
          label='Enter Exporter Port'
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
      {/* <div id='portSubmit'>
        <div>
          <label htmlFor='portInput'></label>
        </div>

        <input
          type='text'
          id='portInput'
          name='portInput'
          placeholder='Port Address'
          value={portInput}
          onChange={(e) => setPortInput(e.target.value)}
        /> */}
      {/* <button type='submit' onClick={handleSubmit}>
          Submit
        </button> */}
      {/* </div> */}
    </div>
  );
}

export default Welcome;
