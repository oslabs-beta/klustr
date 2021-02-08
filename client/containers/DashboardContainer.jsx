import React, { useState } from 'react';
import Menu from '../components/Menu.jsx';

function DashboardContainer() {
  // hook that contains the broker address(es) and update broker address(es)
  // hook that contains the text input and update text input
  
  // add an onChange to input
  // add onclick/onsubmit to form? 
  // post request to back end that sends broker ids

  return (
    <div>
      <p>logo goes brr</p>
      <label for='portInput'>Please Type in Your Port Address:</label>
      <input type='text' id='portInput'></input>
      <button >Submit</button>
      <Menu />
    </div>
  );
}

export default DashboardContainer;
