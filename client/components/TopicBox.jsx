import React from 'react';
import Topics from './Topics.jsx';

function TopicBox({ topics }) {
  // prop drill the Brokers Array from Metrics Container?
  // or hook in directly?

  const topicsList = []
  
  topics.map((topic) => {
    topicsList.push(<Topics key={topic} topicname={topic} /> );
  })

  return (
    <div>
      <h4>TOPICS</h4>
      <span>Number of Topics {topics.length}</span>
      <h1>{topicsList}</h1>
    </div>
  );
}

export default TopicBox;
