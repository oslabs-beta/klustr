import React, { useState, useEffect } from 'react';
import { ClusterNode } from './ClusterNode.jsx';

function ClusterNodeContainer({}) {
  const [clusterId, setClusterId] = useState('');
  const [brokers, setBrokers] = useState([]);

  const fetchBrokerInfo = () => {
    fetch('/admin/brokerInfo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json()) // object
      .then((data) => {
        setBrokers((brokers) => {
          brokers = data.brokers;
          return brokers;
        }); //brokers property, returns  [ { nodeId: 0, host: 'Cerebro', port: 9092 } ]
        setClusterId((clusterId) => {
          clusterId = data.clusterId;
          return clusterId;
        }); //clusterID property, returns '1_le6xdKSCuBQUa6duOmcg'
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBrokerInfo();
  }, []);

  return (
    <div>
      <h1>Visual Overview of the Cluster</h1>
      <ClusterNode clusterId={clusterId} brokers={brokers} />
    </div>
  );
}
export default ClusterNodeContainer;
