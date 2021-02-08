import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/metrics'>Dashboard</Link>
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
      </ul>
    </nav>
  );
}

export default Menu;
