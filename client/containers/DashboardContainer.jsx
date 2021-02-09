import { json } from 'express';
import React, { useState } from 'react';
import Menu from '../components/Menu.jsx';

function DashboardContainer() {
  // hook that contains the broker address(es) and update broker address(es)
  // hook that contains the text input and update text input
  const [portAddress, setPortAddress] = useState('');
  // add an onChange to input
  // add onclick/onsubmit to form?
  // post request to back end that sends broker ids
  const handleSubmit = () => {
    // prevent refresh with each letter
    e.preventDefault();
    // if there is a port address
    if (portAddress) {
      // create port object from 'portInput' input
      const port = { portInput };
      // post request
      fetch('/admin/brokerAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json.stringify({
          brokers: [port],
        }),
      }).then((data) => data.json());
    }
    setPortAddress(''); // clear out the port address input or keep displaying current port?
  };

  // reroute to '/metrics' to display the Metrics Container with all the metrics information

  return (
    <div>
      <p>logo goes brr</p>
      <label htmlFor='portInput'>Please Type in Your Port Address:</label>
      <input
        type='text'
        id='portInput'
        name='portInput'
        value={portInput}
        onChange={(e) => setPortAddress(e.target.value)}
      />
      <button type='submit' onClick={handleSubmit}>
        Submit
      </button>
      <Menu />
    </div>
  );
}

export default DashboardContainer;
