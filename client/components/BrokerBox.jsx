import React from 'react';
import Broker from './Broker.jsx';

function BrokerBox() {
  // const [brokers, setBrokers] = useState([])

  // display all broker components
  const brokers = [];

  // prop drill the Brokers Array from Metrics Container?
  // or hook in directly?

  // brokerArray.forEach((obj) => {
  //   brokers.push(<Broker />);
  // });

  return (
    <div>
      <h4>BROKERS</h4>
      {/* {brokers} */}
    </div>
  );
}

export default BrokerBox;
