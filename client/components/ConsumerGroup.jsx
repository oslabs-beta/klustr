import React, {useState, useEffect} from 'react';
import Consumer from './Consumer.jsx';

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
    <div>
      <h4>CONSUMER GROUP: {groupId}</h4>
      <h5>Number of Consumers: {consumers.length}</h5>
      {consumerComponents}
    </div>
  );
}

export default ConsumersGroup;
