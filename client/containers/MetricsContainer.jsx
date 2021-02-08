import React from 'react';
import BrokerBox from '../components/BrokerBox.jsx';
import TopicBox from '../components/TopicBox.jsx';
import ConsumersBox from '../components/ConsumersBox.jsx';

function MetricsContainer() {
  // hooks
  // Cluster ID (string) ** Needs to be verified by Team 2 (need to be grabbed from describe cluster)
  // Brokers Info (Array of Objects)
  // Topics (Array of Objects)
    // Partitions (Array of Objects) ** May not be needed?
    // Offsets (Array of Objects)
  // Consumer Group (Array of Objects)
    // In object: Consumer ID

  // useEffect to update all the states?

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
