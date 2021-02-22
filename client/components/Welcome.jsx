import React, { PureComponent, useState } from 'react';
import styled, { css } from 'styled-components';
import tempLogo from '../LogoDots.svg';

const LogoGoesBrrr = styled.div`
  display: inline-block;
  padding: 0;
  font-size: 1.2rem;
`;

function Welcome({ setRedirect }) {
  // hook that contains the broker address(es) and update broker address(es)
  // hook that contains the text input and update text input
  const [portInput, setPortInput] = useState('');
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

      console.log(portInput);
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
    setPortInput(''); // clear out the port address input or keep displaying current port?
    setRedirect(true);
  };

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
      </LogoGoesBrrr>

      {/* <p id='welcomeText'>
            To get started, please enter your Port Address on the left.
          </p> */}
      <div id='portSubmit'>
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
        />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Welcome;
