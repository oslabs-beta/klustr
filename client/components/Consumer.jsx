import React from 'react';

function Consumer({ memberId }) {
  // need to grab Consumer ID from BrokerBox or MetricsContainer

  return (
    <div>
      <span>Consumer ID: {memberId}</span>
    </div>
  );
}

export default Consumer;