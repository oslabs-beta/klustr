import React from 'react';
import styled, { css } from 'styled-components';

function Consumer({ memberId }) {
  // need to grab Consumer ID from BrokerBox or MetricsContainer

  return (
    <StyledConsumerDiv>
      <span>Consumer ID: {memberId}</span>
    </StyledConsumerDiv>
  );
}

const StyledConsumerDiv = styled.div`
font-size: 1em;
text-align: center;
margin: .5em;
padding: 1em 1em;
box-shadow: 0 8px 6px -6px gray;
border-radius: 5px;
background: white;
`;

export default Consumer;