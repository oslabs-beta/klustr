import React from 'react';
import ConsumerGroup from './ConsumerGroup.jsx';
import styled, { css } from 'styled-components';

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
    <StyledConsumerBoxDiv>
      <h4>CONSUMER GROUPS</h4>
      {consumerGroups}
    </StyledConsumerBoxDiv>
  );
}

const StyledConsumerBoxDiv = styled.div`
font-size: 1.5em;
text-align: left;
margin: 1em;
padding: 0.25em 1em;
padding-top: 1em;
box-shadow: 0 8px 6px -6px gray;
border-radius: 5px;
background: lightblue;
display: flex;
flex-direction:column;
`;

export default ConsumersBox;
