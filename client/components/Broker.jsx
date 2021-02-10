import React from 'react';

function Broker({ port, host, nodeId }) {
  // need to grab Broker ID, Broker Host and Broker Port from BrokerBox or MetricsContainer

  return (
    <div>
      <div>Broker ID: {nodeId}</div>
      <div>Host Name: {host}</div>
      <div>Port: {port}</div>
      {/* <span>BrokerID: {brokerID}</span>
      <span>Host: {host}</span>
      <span>Port: {port}</span> */}
    </div>
  );
}

export default Broker;
