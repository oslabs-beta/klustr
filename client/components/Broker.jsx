import React from 'react';
import styled, { css } from 'styled-components';

const StyledBrokerDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  margin: 1em;
  padding: 0.25em 1em;
  height: 4em;
  border-radius: 10px;
  background-color: #00b4d8;
  box-shadow: 0 8px 6px -6px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`;

function Broker({ port, host, nodeId }) {
  // need to grab Broker ID, Broker Host and Broker Port from BrokerBox or MetricsContainer

  return (
    <StyledBrokerDiv className='grow'>
      <div>
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
