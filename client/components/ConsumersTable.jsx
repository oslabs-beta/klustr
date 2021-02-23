import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { purple } from '@material-ui/core/colors/';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  head: {
    fontWeight: 'bold',
  },
  consumergroup: {
    backgroundColor: purple[200],
    paddingLeft: 10,
  },
  id: {
    paddingLeft: 40,
  },
});

function Row({ groupId }) {
  const [open, setOpen] = useState(false);
  const [consumers, setConsumers] = useState([]);

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
        const consumerMemberIDs = data.map((obj) => obj.memberId);
        setConsumers(consumerMemberIDs);
      }) // returns an array of consumer IDs (strings))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOffsets();
  }, []);

  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {groupId}
        </TableCell>
        <TableCell align='left'>{consumers.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography
                className={classes.consumergroup}
                variant='h6'
                gutterBottom
                component='div'
              >
                <strong>{groupId}</strong>
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.head}>Consumers</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {consumers.map((consumer) => (
                    <TableRow key={consumer}>
                      <TableCell
                        className={classes.id}
                        component='th'
                        scope='row'
                      >
                        ID: {consumer}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ConsumersTable({ consumers }) {
  const classes = useRowStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={classes.head} align='left'>
              Consumer Group
            </TableCell>
            <TableCell className={classes.head} align='left'>
              Number of Consumers
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consumers.map((obj) => (
            <Row key={obj.groupId} groupId={obj.groupId} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
