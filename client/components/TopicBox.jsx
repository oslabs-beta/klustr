import React from 'react';
import Topics from './Topics.jsx';
import styled, { css } from 'styled-components';

function TopicBox({ topics }) {
  // prop drill the Brokers Array from Metrics Container?
  // or hook in directly?

  const topicsList = []
  
  topics.map((topic) => {
    topicsList.push(<Topics key={topic} topicname={topic} /> );
  })

  return (
    <StyledTopicBoxDiv>
      <h4>TOPICS</h4>
      <span>Number of Topics: {topics.length}</span>
      <StyledTopicListDiv>{topicsList}</StyledTopicListDiv>
    </StyledTopicBoxDiv>
  );
}


const StyledTopicBoxDiv = styled.div`
font-size: 1.5em;
text-align: left;
margin: 1em;
box-shadow: 0 8px 6px -6px gray;
padding: 0.25em 1em;
padding-top: 1em;
border-radius: 5px;
background: grey;
display: flex;
flex-direction:column;
`;

const StyledTopicListDiv = styled.div`
display: flex;
flex-direction: row;
`;



export default TopicBox;
