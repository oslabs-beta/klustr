import React from 'react';
import Topics from './Topics.jsx';

function TopicBox({ topics }) {
  // prop drill the Brokers Array from Metrics Container?
  // or hook in directly?

  return (
    <div>
      <h4>TOPICS</h4>
      <span>Number of Topics</span>
      <h1>{topics}</h1>
    </div>
  );
}

export default TopicBox;
