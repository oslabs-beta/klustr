import React from 'react';
import styled, { css } from 'styled-components';

const StyledBrokerDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin: 1em;
  padding: 0.25em 1em;
  border: 5px solid black;
  border-radius: 5px;
`;

function Broker({ port, host, nodeId }) {
  // need to grab Broker ID, Broker Host and Broker Port from BrokerBox or MetricsContainer

  return (
    <StyledBrokerDiv>
      <div className='hvr-pulse-grow'>
        <div>Broker ID: {nodeId}</div>
        <div>Host Name: {host}</div>
        <div>Port: {port}</div>
        {/* <span>BrokerID: {brokerID}</span>
      <span>Host: {host}</span>
      <span>Port: {port}</span> */}
      </div>
    </StyledBrokerDiv>
  );
}

export default Broker;
