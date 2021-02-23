import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontSize: 30,
  },
  head: {
    fontWeight: 'bold',
  },
});

// function createData(brokerID, host, port) {
//   return { brokerID, host, port };
// }

export default function BrokerTable({ brokers }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>Broker ID </TableCell>
            <TableCell className={classes.head} align='right'>
              Host
            </TableCell>
            <TableCell className={classes.head} align='right'>
              Port
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brokers.map((broker) => (
            <TableRow key={`broker${broker.nodeId}`}>
              <TableCell component='th' scope='row'>
                {broker.nodeId}
              </TableCell>
              <TableCell align='right'>{broker.host}</TableCell>
              <TableCell align='right'>{broker.port}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from 'react';
// import styled, { css } from 'styled-components';

// const StyledBrokerDiv = styled.div`
//   font-size: 1.5em;
//   text-align: center;
//   margin: 1em;
//   padding: 0.25em 1em;
//   height: 4em;
//   border-radius: 10px;
//   background-color: #00b4d8;
//   box-shadow: 0 8px 6px -6px gray;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: whitesmoke;
// `;

// function Broker({ port, host, nodeId }) {
//   // need to grab Broker ID, Broker Host and Broker Port from BrokerBox or MetricsContainer

//   return (
//     <StyledBrokerDiv className='grow'>
//       <div>
//         <div>Broker ID: {nodeId}</div>
//         <div>Host Name: {host}</div>
//         <div>Port: {port}</div>
//         {/* <span>BrokerID: {brokerID}</span>
//       <span>Host: {host}</span>
//       <span>Port: {port}</span> */}
//       </div>
//     </StyledBrokerDiv>
//   );
// }

// export default Broker;
