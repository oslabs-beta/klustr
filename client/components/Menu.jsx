import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Menu() {
  return (
    <nav>
      <Sul>
        <li>
          <Link to='/'>Main Dashboard</Link>
        </li>
        <li>
          <Link to='/additionalmetrics'>Additional Metrics</Link>
        </li>
        <li>
          <Link to='/clients'>Clients</Link>
        </li>
        <li>
          <Link to='/settings'>Main Settings</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
      </Sul>
    </nav>
  );
}

const Sul = styled.ul`
  padding: 10px;
`;

export default Menu;
