import React from 'react';
import Broker from './Broker.jsx';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors/';


const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 350,
    height: 250,
    backgroundColor: blue[100],
  },
  title: {
    fontSize: 20,
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
      <>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} align='center'>
              Brokers
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <Typography className={classes.body2} align='center'>
              Total Number:
              <br></br>
              {brokers.length}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }


  const BrokerBoxDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const classes = useStyles();

  return (
    <BrokerBoxDiv>
      {brokersArray}
    </BrokerBoxDiv>
  );
}

export default BrokerBox;
