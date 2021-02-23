import React from 'react';

import ReactFlow, { Background, Controls, MiniMap } from 'react-flow-renderer';

// const initialElements = [
//   {
//     id: '1',
//     type: 'input', // input node
//     data: { label: 'Input Node' },
//     position: { x: 475, y: 250 },
//   },
//   // default node
//   {
//     id: '2',
//     // you can also pass a React component as a label
//     data: { label: <div>Default Node</div> },
//     position: { x: 250, y: 25 },
//   },
//   {
//     id: '3',
//     type: 'output', // output node
//     data: { label: 'Output Node' },
//     position: { x: 25, y: 250 },
//   },
//   // animated edge
//   { id: 'e1-2', source: '1', target: '2', animated: true },
//   { id: 'e2-3', source: '2', target: '3', animated: true },
// ];

export const ClusterNode = ({ clusterId, brokers }) => {
  const initialElements = [];
  let increment = 1000 / brokers.length;

  brokers.length < 2 ? (increment = 250) : increment;

  const clusterObj = {
    id: '0',
    // type: 'output',
    data: {
      label: <div id='clusterNode'>Cluster ID: {clusterId}</div>,
    },
    position: { x: 750, y: 100 },
  };

  // console.log(brokers);

  initialElements.push(clusterObj);

  brokers.forEach((broker, idx) => {
    const brokerObj = {
      // ...clusterObj,
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

    // console.log(edge);
    initialElements.push(brokerObj, edge);
  });

  // initialElements.push(
  //   { id: 'e0-1', source: '0', target: '1', animated: true },
  //   { id: 'e0-2', source: '0', target: '2', animated: true }
  // );

  // const initialElements = [
  //   {
  //     id: '1',
  //     type: 'input', // input node
  //     data: { label: 'Input Node' },
  //     position: { x: 475, y: 250 },
  //   },
  //   // default node
  //   {
  //     id: '2',
  //     // you can also pass a React component as a label
  //     data: { label: <div>Default Node</div> },
  //     position: { x: 250, y: 25 },
  //   },
  //   {
  //     id: '3',
  //     type: 'output', // output node
  //     data: { label: 'Output Node' },
  //     position: { x: 25, y: 250 },
  //   },
  //   // animated edge
  //   { id: 'e1-2', source: '1', target: '2', animated: true },
  //   { id: 'e2-3', source: '2', target: '3', animated: true },
  // ];
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
      {/* <div>
        <input type='text' name='title' />
        <button type='button'>Add Broker</button>
      </div> */}
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
