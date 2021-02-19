import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Menu() {
  return (
    <nav>
      <Sul>
        <li>
          <Link to='/' style={{ textDecoration: 'none' }}>
            Main Dashboard
          </Link>
        </li>
        <li>
          <Link to='/cluster' style={{ textDecoration: 'none' }}>
            Cluster Overview
          </Link>
        </li>
        <li>
          <Link to='/metrics' style={{ textDecoration: 'none' }}>
            Metrics
          </Link>
        </li>
        <li>
          <Link to='/brokerView' style={{ textDecoration: 'none' }}>
            Broker View
          </Link>
        </li>
        <li>
          <Link to='/settings' style={{ textDecoration: 'none' }}>
            Main Settings
          </Link>
        </li>
        <li>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            About Us
          </Link>
        </li>
      </Sul>
    </nav>
  );
}

const Sul = styled.ul`
  padding: 10px;
`;

export default Menu;
