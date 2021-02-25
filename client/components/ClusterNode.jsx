import React from 'react';
import ReactFlow, { Controls, MiniMap } from 'react-flow-renderer';

export const ClusterNode = ({ clusterId, brokers }) => {
  const initialElements = [];
  let increment = 1000 / brokers.length;

  brokers.length < 2 ? (increment = 250) : increment;

  const clusterObj = {
    id: '0',
    data: {
      label: <div id='clusterNode'>Cluster ID: {clusterId}</div>,
    },
    position: { x: 750, y: 100 },
  };

  initialElements.push(clusterObj);

  brokers.forEach((broker, idx) => {
    const brokerObj = {
      id: String(idx + 1),
      type: 'input',
      data: {
        label: (
          <div>
            Broker ID: {broker.nodeId}
            <br></br> Host Name: {broker.host}
            <br></br> Port:
            {broker.port}
          </div>
        ),
      },
      position: { x: increment * idx, y: 150 },
    };

    const edge = {
      id: `e0-${idx + 1}`,
      source: '0',
      target: `${idx + 1}`,
      animated: true,
    };

    initialElements.push(brokerObj, edge);
  });

  return (
    <div>
      <ReactFlow
        elements={initialElements}
        style={{ width: '100%', height: '90vh' }}
      >
        <MiniMap
          nodeColor={(n) => {
            if (n.type == 'input') return 'blue';
            return '#FF';
          }}
        />
        <Controls></Controls>
      </ReactFlow>
    </div>
  );
};

export const ClusterNode2 = () => {
  return (
    <div>
      <h2>Cluster Node 2</h2>
    </div>
  );
};
