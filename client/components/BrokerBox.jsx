import React from 'react';
import Broker from './Broker.jsx';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors/';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 350,
    height: 250,
    backgroundColor: red[500],
  },
  title: {
    fontSize: 30,
    marginTop: 40,
  },
  body2: {
    fontSize: 50,
    marginBottom: 10,
  },
});


function BrokerBox({ brokers }) {
  // const [brokers, setBrokers] = useState([])

  const classes = useStyles();

  // display all broker components
  const brokersArray = [];

  for (let i = 0; i < brokers.length; i++) {
    brokersArray.push(
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} align='center'>
            BROKERS
          </Typography>
          <br></br>
          <br></br>
          <Typography className={classes.body2} align='center'>
            {brokers.length}
          </Typography>
        </CardContent>
      </Card>
    );
  }


  // for (let i = 0; i < brokers.length; i++) {
  //   brokersArray.push(
  //     <Broker
  //       key={`broker-key-${i}`}
  //       port={brokers[i].port}
  //       host={brokers[i].host}
  //       nodeId={brokers[i].nodeId}
  //     />
  //   );

  // prop drill the Brokers Array from Metrics Container?
  // or hook in directly?

  // brokerArray.forEach((obj) => {
  //   brokers.push(<Broker />);
  // });

  const BrokerBoxDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} align='center'>
          BROKERS
        </Typography>
        <br></br>
        <br></br>
        <Typography className={classes.body2} align='center'>
          {brokers.length}
        </Typography>
      </CardContent>
    </Card>
    // <BrokerBoxDiv>
    //   {/* <div className='brokerBox'> */}
    //   {/* <h4>BROKERS</h4> */}
    //   {brokersArray}
    //   {/* </div> */}
    // </BrokerBoxDiv>
  );
}

export default BrokerBox;
