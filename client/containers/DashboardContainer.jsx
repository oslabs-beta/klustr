import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu.jsx';
import styled, { css } from 'styled-components';
import tempLogo from '../rando-icon-transpo.png';

function DashboardContainer({ setRedirect }) {
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

  // reroute to '/metrics' to display the Metrics Container with all the metrics information

  const EyeGlass = styled.div`
    display: inline-block;
    padding: 2rem 1rem;
    font-size: 3rem;
    display: flex;
    justify-content: left;
    align-items: center;
    text-decoration: none;
  `;

  return (
    <div>
      <EyeGlass>
        {/* <img src={tempLogo} alt='Kafka Specks Logo' /> */}
        <a href='' id='eyeglasses'>
          👓
        </a>
      </EyeGlass>
      <div id='portSubmit'>
        <div>
          <label htmlFor='portInput' placeholder='Port Address'></label>
        </div>

        <input
          type='text'
          id='portInput'
          name='portInput'
          value={portInput}
          onChange={(e) => setPortInput(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <Menu />
    </div>
  );
}

export default DashboardContainer;
