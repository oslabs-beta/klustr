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

// table for brokers in ClusterContainer

export default function BrokersTable({ brokers }) {
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
