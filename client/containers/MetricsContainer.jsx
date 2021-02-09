import React, { useState, useEffect } from 'react';
import BrokerBox from '../components/BrokerBox.jsx';
import TopicBox from '../components/TopicBox.jsx';
import ConsumersBox from '../components/ConsumersBox.jsx';

function MetricsContainer() {
  // hooks
  // Cluster ID (string) ** Needs to be verified by Team 2 (need to be grabbed from describe cluster)
  // Brokers Info (Array of Objects)
  // Topics (Array of Strings)
  // Partitions (Array of Objects) ** May not be needed?
  // Offsets (Array of Objects)
  // Consumer Group (Array of Objects)
  // In object: Consumer ID
  const [clusterID, setClusterID] = useState('');
  const [brokers, setBrokers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [consumerGroup, setConsumerGroup] = useState([]);

  // use one hook to update all the states?
  // const [metrics, setMetrics] = useState(
  //   setClusterID('id'),
  //   setBrokers(['brokers']),
  //   setTopics(['topics']),
  //   setConsumerGroup(['consumer group'])
  // );

  // Fetch - GET all metrics for Metrics Container upon putting in a Port Address in Dashboard Container

  useEffect(() => {
    // get topics
    fetch('/admin/topics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json()) // object with topics array
      .then((data) => setTopics(data.topics))
      .catch((err) => console.log(err));

    // get broker info & cluster ID
    fetch('/admin/brokerInfo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json()) // object
      .then((data) => setBrokers(data.brokers)) //brokers property, returns  [ { nodeId: 0, host: 'Cerebro', port: 9092 } ]
      .then((data) => setClusterID(data.clusterID)) //clusterID property, returns '1_le6xdKSCuBQUa6duOmcg'
      .catch((err) => console.log(err));

    console.log('topics', topics);
    console.log('cluster', clusterID);
    console.log('brokers', brokers);
  }, []);
  // trigger setMetrics after fetch request to populate Metrics Components

  return (
    <div>
      <h1>ClusterID: number from the BE</h1>
      <BrokerBox />
      <TopicBox />
      <ConsumersBox />
    </div>
  );
}

export default MetricsContainer;
