import React from 'react';

function Partition({ offsets }) {
  // 'offsets': [{"partition": 0,"offset": "21"},{"partition": 1,"offset": "22"}]

  // const partitionInfo = {};

  // offsets.map(({partition, offset}) => {
  //   partitionInfo[partition] = offset;
  // })

  const partitionBox = [];

  offsets.forEach(({ partition, offset }) => {
    partitionBox.push(
      <div>
        <span>Partition: {partition}</span>
        <br></br>
        <span>Latest Offset: {offset}</span>
      </div>
    );
  });

  return (
    <div>
      {partitionBox}
    </div>  
  );
}

export default Partition;
