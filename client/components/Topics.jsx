import React, {useState, useEffect} from 'react';
import Partition from './Partition.jsx'

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
    <div>
      <h1>Topic: {topicname}</h1>
      <Partition offsets={offsets} />
    </div>
  );
}

export default Topic;