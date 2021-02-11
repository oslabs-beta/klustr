import React from 'react';
import ConsumerGroup from './ConsumerGroup.jsx';

function ConsumersBox({ consumers }) {
  //grab the consumer group state

  const groupNames = consumers.map((obj) => obj.groupId);

// [
//     {"groupId": "test-group", "protocolType": "consumer"},
//     {"groupId": "tech-jobs",
//         "protocolType": "consumer"
//     }
// ]

  const consumerGroups = groupNames.map((groupId) => {
    return <ConsumerGroup key={groupId} groupId={groupId} />;
  })

  return (
    <div>
      <h4>CONSUMER GROUPS</h4>
      {consumerGroups}
    </div>
  );
}

export default ConsumersBox;
