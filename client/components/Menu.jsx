import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Menu() {
  return (
    <nav>
      <Sul>
        <li>
          <Link to='/' style={{ textDecoration: 'none' }}>Main Dashboard</Link>
        </li>
        <li>
          <Link to='/metrics' style={{ textDecoration: 'none' }}>
            Additional Metrics
          </Link>
        </li>
        <li>
          <Link to='/metrics' style={{ textDecoration: 'none' }}>
            Clients
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
