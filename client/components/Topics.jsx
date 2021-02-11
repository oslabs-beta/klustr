import React, {useState, useEffect} from 'react';
import Partition from './Partition.jsx'
import styled, { css } from 'styled-components';

function Topic({ topicname }) {
  
  const [offsets, setOffsets] = useState([])

  const fetchOffsets = () => {
    fetch(`/admin/partitionInfo/${topicname}`, {
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
        setOffsets(data.offsets);
      }) // returns an array of partition objects ([{"partition": 0,"offset": "21"}])
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOffsets();
  }, []);

  const handleClick = () => {
    // trigger Partition popup
  }


  return (
    <StyledTopicDiv>
      <h4>{topicname}</h4>
      <br></br>
      <Partition offsets={offsets} />
    </StyledTopicDiv>
  );
}

const StyledTopicDiv = styled.div`
font-size: 1em;
text-align: center;
margin: 1em;
padding: 0.25em 1em;
padding-top: 1em;
padding-bottom: 1em;
border-radius: 5px;
background: white;
max-width: 25%;
`;


export default Topic;