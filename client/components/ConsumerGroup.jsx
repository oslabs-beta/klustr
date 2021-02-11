import React, {useState, useEffect} from 'react';
import Consumer from './Consumer.jsx';
import styled, { css } from 'styled-components';

function ConsumersGroup({ groupId }) {

  const [consumers, setConsumers] = useState([]) // array of consumer objects

  const fetchOffsets = () => {
    fetch(`/admin/consumers/${groupId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // filters the data from the fetch request to make consumers an array of member Ids instead of an object
        const consumerMemberIDs = data.map( (obj) => obj.memberId)
        setConsumers(consumerMemberIDs);
      }) // returns an array of consumer IDs (strings))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOffsets();
  }, []);

  const consumerComponents = consumers.map((memberId) => {
    return <Consumer key={memberId} memberId={memberId} />
  })


  return (
    <StyledConsumerGroupDiv>
      <h4>GROUP ID: {groupId}</h4>
      <span>Number of Consumers: {consumers.length}</span>
      {consumerComponents}
    </StyledConsumerGroupDiv>
  );
}

const StyledConsumerGroupDiv = styled.div`
font-size: 1em;
text-align: left;
margin: 1em;
padding: 0.25em 1em;
padding-top: 1em;
box-shadow: 0 8px 6px -6px gray;
border-radius: 5px;
background: grey;
display: flex;
flex-direction:column;

`;

export default ConsumersGroup;
