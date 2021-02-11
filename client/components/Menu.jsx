import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Menu() {
  return (
    <nav>
      <ul>
        <Sli>
          <Link to='/metrics'>Dashboard</Link>
        </Sli>
        <Sli>
          <Link to='/additionalmetrics'>Additional Metrics</Link>
        </Sli>
        <li>
          <Link to='/clients'>Clients</Link>
        </li>
        <li>
          <Link to='/settings'>Main Settings</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

const Sli = styled.li`
  margin: 10;
`;

export default Menu;
