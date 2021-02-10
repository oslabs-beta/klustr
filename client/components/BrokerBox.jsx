import React from 'react';
import Broker from './Broker.jsx';

function BrokerBox({ brokers }) {
  // const [brokers, setBrokers] = useState([])

  // display all broker components
  const brokersArray = [];

  for (let i = 0; i < brokers.length; i++) {
    brokersArray.push(
      <Broker
        key={`broker-key-${i}`}
        port={brokers[i].port}
        host={brokers[i].host}
        nodeId={brokers[i].nodeId}
      />
    );
  }

  // prop drill the Brokers Array from Metrics Container?
  // or hook in directly?

  // brokerArray.forEach((obj) => {
  //   brokers.push(<Broker />);
  // });

  return (
    <div className='brokerBox'>
      <h4>BROKERS</h4>
      {brokersArray}
    </div>
  );
}

export default BrokerBox;
